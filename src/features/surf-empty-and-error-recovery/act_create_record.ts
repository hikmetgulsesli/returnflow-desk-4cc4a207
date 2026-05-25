import type { ReturnflowDeskStore } from '../returnflow-desk/returnflow-desk.store';

export function createReturnFromEmptyRecovery(store: ReturnflowDeskStore) {
  store.createDraftReturn();
}
