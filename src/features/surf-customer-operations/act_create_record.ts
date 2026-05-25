import type { ReturnflowDeskStore } from '../returnflow-desk/returnflow-desk.store';

export function createReturnRecord(store: ReturnflowDeskStore) {
  store.createDraftReturn();
}
