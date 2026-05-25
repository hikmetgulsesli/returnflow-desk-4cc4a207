import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  loadReturnflowDeskState,
  saveReturnflowDeskState,
  type PersistedReturnflowDeskState,
  type ReturnflowStorageStatus,
} from './returnflow-desk.repo';
import type { ReturnflowRecord } from '../../__fixtures__/returnflow-desk.fixture';

export interface ReturnflowDeskSnapshot {
  activeScreen: string;
  activeRoute: string;
  selectedRecord: ReturnflowRecord | null;
  searchQuery: string;
  records: ReturnflowRecord[];
  counts: Record<string, number>;
  storageStatus: ReturnflowStorageStatus;
  lastError: string | null;
  activePanel: string;
}

export interface ReturnflowDeskStore {
  snapshot: ReturnflowDeskSnapshot;
  navigate: (route: string) => void;
  selectRecord: (recordId: string) => void;
  setActivePanel: (panel: string) => void;
  searchRecords: (query: string) => void;
  createDraftReturn: () => void;
  saveSelectedReturn: () => void;
  cancelEdit: () => void;
  retryLoad: () => void;
}

function countRecords(records: ReturnflowRecord[]): Record<string, number> {
  return records.reduce<Record<string, number>>(
    (counts, record) => {
      counts.total += 1;
      counts[record.status] = (counts[record.status] ?? 0) + 1;
      return counts;
    },
    { total: 0, triage: 0, inspection: 0, resolved: 0 },
  );
}

export function useReturnflowDeskStore(): ReturnflowDeskStore {
  const [{ state, storageStatus, lastError }, setStore] = useState(() => loadReturnflowDeskState());

  useEffect(() => {
    const nextStatus = saveReturnflowDeskState(state);
    setStore((current) => ({ ...current, storageStatus: nextStatus }));
  }, [state]);

  const updateState = useCallback((updater: (state: PersistedReturnflowDeskState) => PersistedReturnflowDeskState) => {
    setStore((current) => ({ ...current, state: updater(current.state) }));
  }, []);

  const snapshot = useMemo<ReturnflowDeskSnapshot>(() => {
    const selectedRecord = state.records.find((record) => record.id === state.selectedRecordId) ?? null;
    const normalizedQuery = state.searchQuery.trim().toLowerCase();
    const visibleRecords = normalizedQuery
      ? state.records.filter((record) =>
          [record.id, record.customer, record.sku, record.reason, record.status, record.priority]
            .some((value) => value.toLowerCase().includes(normalizedQuery)),
        )
      : state.records;

    return {
      activeScreen: state.activeScreen,
      activeRoute: state.activeRoute,
      selectedRecord,
      searchQuery: state.searchQuery,
      records: visibleRecords,
      counts: countRecords(visibleRecords),
      storageStatus,
      lastError,
      activePanel: state.activePanel,
    };
  }, [lastError, state, storageStatus]);

  return {
    snapshot,
    navigate: (route) => {
      updateState((current) => ({ ...current, activeRoute: route, activePanel: route }));
    },
    selectRecord: (recordId) => {
      updateState((current) => ({
        ...current,
        selectedRecordId: recordId,
        activeScreen: 'CustomerEditorReturnflowDesk',
        activePanel: 'record',
      }));
    },
    setActivePanel: (panel) => {
      updateState((current) => ({ ...current, activePanel: panel }));
    },
    searchRecords: (query) => {
      updateState((current) => ({
        ...current,
        searchQuery: query,
        activePanel: query ? 'search-results' : 'triage',
      }));
    },
    createDraftReturn: () => {
      updateState((current) => {
        const draft: ReturnflowRecord = {
          id: `RET-${1000 + current.records.length + 1}`,
          customer: 'Draft customer',
          sku: 'RF-DRAFT',
          reason: 'New return intake',
          status: 'triage',
          priority: 'standard',
          updatedAt: new Date().toISOString(),
        };

        return {
          ...current,
          records: [draft, ...current.records],
          selectedRecordId: draft.id,
          activeScreen: 'CustomerEditorReturnflowDesk',
          activePanel: 'create-return',
        };
      });
    },
    saveSelectedReturn: () => {
      updateState((current) => ({
        ...current,
        activeScreen: 'CustomerOperationsReturnflowDesk',
        activePanel: 'saved',
      }));
    },
    cancelEdit: () => {
      updateState((current) => ({
        ...current,
        activeScreen: 'CustomerOperationsReturnflowDesk',
        activePanel: 'triage',
      }));
    },
    retryLoad: () => {
      setStore(loadReturnflowDeskState());
    },
  };
}
