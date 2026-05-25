import type { ReturnflowDeskStore } from '../returnflow-desk/returnflow-desk.store';

export function updateTriageRecordStatus(
  store: ReturnflowDeskStore,
  recordId: string,
  status: 'triage' | 'inspection' | 'resolved',
) {
  store.selectRecord(recordId);
  store.setActivePanel(status);
}
