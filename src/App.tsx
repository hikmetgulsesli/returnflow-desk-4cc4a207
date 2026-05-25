import { useMemo } from 'react';
import {
  TriageBoardReturnflowDesk,
  type TriageBoardReturnflowDeskActionId,
} from './screens';
import { publishReturnflowDeskBridge } from './test/bridge';
import { useReturnflowDeskStore } from './features/returnflow-desk/returnflow-desk.store';

export default function App() {
  const desk = useReturnflowDeskStore();

  publishReturnflowDeskBridge(desk.snapshot);

  const actions = useMemo<Partial<Record<TriageBoardReturnflowDeskActionId, () => void>>>(
    () => ({
      'create-return-4': () => desk.createDraftReturn(),
      'filter-5': () => desk.setActivePanel('filters'),
      'sort-6': () => desk.setActivePanel('sort'),
      'assign-7': () => desk.selectRecord('RET-1038'),
      'assign-8': () => desk.selectRecord('RET-1041'),
      'inspect-9': () => desk.setActivePanel('inspection'),
      'review-10': () => desk.selectRecord('RET-1027'),
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

  return (
    <div
      data-setfarm-root="returnflow-desk"
      className="min-h-screen w-full flex bg-slate-50 text-slate-950"
    >
      <TriageBoardReturnflowDesk actions={actions} />
    </div>
  );
}
