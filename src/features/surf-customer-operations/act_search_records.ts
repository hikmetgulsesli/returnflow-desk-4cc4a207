import type { ReturnflowDeskStore } from '../returnflow-desk/returnflow-desk.store';

export function searchReturnRecords(store: ReturnflowDeskStore, query: string) {
  store.searchRecords(query);
}
