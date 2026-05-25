import type { ReturnflowDeskStore } from '../returnflow-desk/returnflow-desk.store';

export function selectReturnRecord(store: ReturnflowDeskStore, recordId: string) {
  store.selectRecord(recordId);
}
