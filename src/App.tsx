import { useMemo } from 'react';
import {
  CustomerEditorReturnflowDesk,
  CustomerOperationsReturnflowDesk,
  EmptyAndErrorRecoveryReturnflowDesk,
  TriageBoardReturnflowDesk,
  type CustomerEditorReturnflowDeskActionId,
  type CustomerOperationsReturnflowDeskActionId,
  type EmptyAndErrorRecoveryReturnflowDeskActionId,
  type TriageBoardReturnflowDeskActionId,
} from './screens';
import { createReturnFromEmptyRecovery } from './features/surf-empty-and-error-recovery/act_create_record';
import { retryEmptyAndErrorRecoveryLoad } from './features/surf-empty-and-error-recovery/act_retry_load';
import { publishReturnflowDeskBridge } from './test/bridge';
import { useReturnflowDeskStore } from './features/returnflow-desk/returnflow-desk.store';
import { searchTriageRecords } from './features/surf-triage-board/act_search_records';
import { selectTriageRecord } from './features/surf-triage-board/act_select_record';
import { updateTriageRecordStatus } from './features/surf-triage-board/act_update_record_status';

export default function App() {
  const desk = useReturnflowDeskStore();

  publishReturnflowDeskBridge(desk.snapshot);

  const triageActions = useMemo<Partial<Record<TriageBoardReturnflowDeskActionId, () => void>>>(
    () => ({
      'create-return-4': () => desk.createDraftReturn(),
      'filter-5': () => desk.setActivePanel('filters'),
      'sort-6': () => desk.setActivePanel('sort'),
      'assign-7': () => updateTriageRecordStatus(desk, 'RET-1038', 'inspection'),
      'assign-8': () => updateTriageRecordStatus(desk, 'RET-1041', 'inspection'),
      'inspect-9': () => desk.setActivePanel('inspection'),
      'review-10': () => selectTriageRecord(desk, 'RET-1027'),
      'dashboard-1': () => desk.navigate('dashboard'),
      'triage-2': () => desk.navigate('triage'),
      'inventory-3': () => desk.navigate('inventory'),
      'reports-4': () => desk.navigate('reports'),
      'settings-5': () => desk.setActivePanel('settings'),
      'help-6': () => desk.setActivePanel('help'),
      'logout-7': () => desk.setActivePanel('logout'),
      'notifications-1': () => desk.setActivePanel('notifications'),
      'help-2': () => desk.setActivePanel('help'),
      'settings-3': () => desk.setActivePanel('settings'),
    }),
    [desk],
  );

  const operationsActions = useMemo<Partial<Record<CustomerOperationsReturnflowDeskActionId, () => void>>>(
    () => ({
      'create-return-1': () => desk.createDraftReturn(),
      'date-range-2': () => desk.setActivePanel('date-range'),
      'export-3': () => desk.setActivePanel('export'),
      'filter-settings-4': () => desk.setActivePanel('filter-settings'),
      'close-5': () => desk.navigate('triage'),
      'resolve-6': () => desk.setActivePanel('resolved'),
      're-scan-7': () => searchTriageRecords(desk, ''),
      'dashboard-1': () => desk.navigate('dashboard'),
      'triage-2': () => desk.navigate('triage'),
      'inventory-3': () => desk.navigate('inventory'),
      'reports-4': () => desk.navigate('reports'),
      'settings-5': () => desk.setActivePanel('settings'),
      'help-6': () => desk.setActivePanel('help'),
      'logout-7': () => desk.setActivePanel('logout'),
    }),
    [desk],
  );

  const editorActions = useMemo<Partial<Record<CustomerEditorReturnflowDeskActionId, () => void>>>(
    () => ({
      'cancel-edit-1': () => desk.navigate('triage'),
      'save-return-2': () => desk.navigate('triage'),
    }),
    [desk],
  );

  const recoveryActions = useMemo<Partial<Record<EmptyAndErrorRecoveryReturnflowDeskActionId, () => void>>>(
    () => ({
      'create-return-1': () => createReturnFromEmptyRecovery(desk),
      'notifications-2': () => desk.setActivePanel('notifications'),
      'help-3': () => desk.setActivePanel('help'),
      'settings-4': () => desk.setActivePanel('settings'),
      'close-5': () => desk.navigate('triage'),
      'close-6': () => desk.navigate('triage'),
      'filters-2-7': () => desk.setActivePanel('filters'),
      'retry-8': () => retryEmptyAndErrorRecoveryLoad(desk),
      'clear-all-filters-9': () => desk.navigate('triage'),
      'create-new-return-10': () => createReturnFromEmptyRecovery(desk),
      'dashboard-1': () => desk.navigate('dashboard'),
      'triage-2': () => desk.navigate('triage'),
      'inventory-3': () => desk.navigate('inventory'),
      'reports-4': () => desk.navigate('reports'),
      'settings-5': () => desk.setActivePanel('settings'),
      'help-6': () => desk.setActivePanel('help'),
      'logout-7': () => desk.setActivePanel('logout'),
    }),
    [desk],
  );

  const activeScreen = useMemo(() => {
    if (desk.snapshot.activePanel === 'record' || desk.snapshot.activePanel === 'create-return') {
      return <CustomerEditorReturnflowDesk actions={editorActions} />;
    }

    if (desk.snapshot.lastError || desk.snapshot.activePanel === 'empty-state') {
      return <EmptyAndErrorRecoveryReturnflowDesk actions={recoveryActions} />;
    }

    if (desk.snapshot.activeRoute !== 'triage') {
      return <CustomerOperationsReturnflowDesk actions={operationsActions} />;
    }

    return <TriageBoardReturnflowDesk actions={triageActions} />;
  }, [
    desk.snapshot.activePanel,
    desk.snapshot.activeRoute,
    desk.snapshot.lastError,
    editorActions,
    operationsActions,
    recoveryActions,
    triageActions,
  ]);

  return (
    <div
      data-setfarm-root="returnflow-desk"
      className="min-h-screen w-full min-w-0 flex flex-col bg-slate-50 text-slate-950 overflow-x-hidden"
    >
      {activeScreen}
    </div>
  );
}
