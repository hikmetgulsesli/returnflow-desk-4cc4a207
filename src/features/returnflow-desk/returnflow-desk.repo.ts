import {
  returnflowDeskFixture,
  type ReturnflowRecord,
} from '../../__fixtures__/returnflow-desk.fixture';

const STORAGE_KEY = 'returnflow-desk:v1';

export type ReturnflowStorageStatus = 'idle' | 'loaded' | 'persisted' | 'recovered' | 'unavailable';

export interface PersistedReturnflowDeskState {
  activeScreen: 'CustomerOperationsReturnflowDesk' | 'CustomerEditorReturnflowDesk';
  activeRoute: string;
  selectedRecordId: string | null;
  activePanel: string;
  searchQuery: string;
  records: ReturnflowRecord[];
}

export interface ReturnflowDeskLoadResult {
  state: PersistedReturnflowDeskState;
  storageStatus: ReturnflowStorageStatus;
  lastError: string | null;
}

const defaultState: PersistedReturnflowDeskState = {
  activeScreen: 'CustomerOperationsReturnflowDesk',
  activeRoute: 'triage',
  selectedRecordId: returnflowDeskFixture[0]?.id ?? null,
  activePanel: 'triage',
  searchQuery: '',
  records: returnflowDeskFixture,
};

function getStorage(): Storage | null {
  if (typeof window === 'undefined') {
    return null;
  }

  return window.localStorage ?? null;
}

function isRecord(value: unknown): value is ReturnflowRecord {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const record = value as Partial<ReturnflowRecord>;
  return (
    typeof record.id === 'string' &&
    typeof record.customer === 'string' &&
    typeof record.sku === 'string' &&
    typeof record.reason === 'string' &&
    typeof record.status === 'string' &&
    typeof record.priority === 'string' &&
    typeof record.updatedAt === 'string'
  );
}

function normalizeState(value: unknown): PersistedReturnflowDeskState {
  if (!value || typeof value !== 'object') {
    throw new Error('Saved ReturnFlow Desk data is not an object.');
  }

  const state = value as Partial<PersistedReturnflowDeskState>;
  const records = Array.isArray(state.records) && state.records.every(isRecord)
    ? state.records
    : defaultState.records;

  return {
    activeScreen:
      state.activeScreen === 'CustomerEditorReturnflowDesk'
        ? 'CustomerEditorReturnflowDesk'
        : defaultState.activeScreen,
    activeRoute: typeof state.activeRoute === 'string' ? state.activeRoute : defaultState.activeRoute,
    selectedRecordId:
      typeof state.selectedRecordId === 'string' || state.selectedRecordId === null
        ? state.selectedRecordId
        : defaultState.selectedRecordId,
    activePanel: typeof state.activePanel === 'string' ? state.activePanel : defaultState.activePanel,
    searchQuery: typeof state.searchQuery === 'string' ? state.searchQuery : defaultState.searchQuery,
    records,
  };
}

export function loadReturnflowDeskState(): ReturnflowDeskLoadResult {
  const storage = getStorage();

  if (!storage) {
    return { state: defaultState, storageStatus: 'unavailable', lastError: null };
  }

  try {
    const raw = storage.getItem(STORAGE_KEY);

    if (!raw) {
      return { state: defaultState, storageStatus: 'idle', lastError: null };
    }

    return {
      state: normalizeState(JSON.parse(raw)),
      storageStatus: 'loaded',
      lastError: null,
    };
  } catch (error) {
    storage.removeItem(STORAGE_KEY);

    return {
      state: defaultState,
      storageStatus: 'recovered',
      lastError: error instanceof Error ? error.message : 'Saved ReturnFlow Desk data could not be read.',
    };
  }
}

export function saveReturnflowDeskState(state: PersistedReturnflowDeskState): ReturnflowStorageStatus {
  const storage = getStorage();

  if (!storage) {
    return 'unavailable';
  }

  storage.setItem(STORAGE_KEY, JSON.stringify(state));
  return 'persisted';
}
