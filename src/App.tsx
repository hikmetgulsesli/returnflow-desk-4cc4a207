import { useMemo } from 'react';
import {
  CustomerEditorReturnflowDesk,
  type CustomerEditorReturnflowDeskActionId,
  CustomerOperationsReturnflowDesk,
  type CustomerOperationsReturnflowDeskActionId,
} from './screens';
import { publishReturnflowDeskBridge } from './test/bridge';
import { useReturnflowDeskStore } from './features/returnflow-desk/returnflow-desk.store';
import { createReturnRecord } from './features/surf-customer-operations/act_create_record';
import { retryReturnflowLoad } from './features/surf-customer-operations/act_retry_load';
import { selectReturnRecord } from './features/surf-customer-operations/act_select_record';
import { cancelReturnEdit } from './features/surf-customer-editor/act_cancel_edit';
import { saveReturnRecord } from './features/surf-customer-editor/act_save_record';

type ReturnflowActionId = CustomerOperationsReturnflowDeskActionId | CustomerEditorReturnflowDeskActionId;

export default function App() {
  const desk = useReturnflowDeskStore();

  publishReturnflowDeskBridge(desk.snapshot);

  const actions = useMemo<Partial<Record<ReturnflowActionId, () => void>>>(
    () => ({
      'create-return-1': () => createReturnRecord(desk),
      'date-range-2': () => desk.setActivePanel('date-range'),
      'export-3': () => desk.setActivePanel('export'),
      'filter-settings-4': () => desk.setActivePanel('filters'),
      'close-5': () => desk.setActivePanel('triage'),
      'resolve-6': () => selectReturnRecord(desk, 'RET-1041'),
      're-scan-7': () => retryReturnflowLoad(desk),
      'dashboard-1': () => desk.navigate('dashboard'),
      'triage-2': () => desk.navigate('triage'),
      'inventory-3': () => desk.navigate('inventory'),
      'reports-4': () => desk.navigate('reports'),
      'settings-5': () => desk.setActivePanel('settings'),
      'help-6': () => desk.setActivePanel('help'),
      'logout-7': () => desk.setActivePanel('logout'),
      'cancel-edit-1': () => cancelReturnEdit(desk),
      'save-return-2': () => saveReturnRecord(desk),
    }),
    [desk],
  );

  const showsEditor =
    desk.snapshot.activePanel === 'record' || desk.snapshot.activePanel === 'create-return';

  const screen =
    showsEditor
      ? <CustomerEditorReturnflowDesk actions={actions} />
      : <CustomerOperationsReturnflowDesk actions={actions} />;

  return (
    <div
      data-setfarm-root="returnflow-desk"
      className="min-h-screen w-full flex bg-slate-50 text-slate-950"
    >
      {screen}
    </div>
  );
}
