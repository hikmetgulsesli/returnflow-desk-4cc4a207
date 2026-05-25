import type { ReturnflowDeskStore } from '../returnflow-desk/returnflow-desk.store';

export function selectTriageRecord(store: ReturnflowDeskStore, recordId: string) {
  store.selectRecord(recordId);
}
