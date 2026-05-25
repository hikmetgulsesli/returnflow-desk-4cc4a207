import type { ReturnflowDeskStore } from '../returnflow-desk/returnflow-desk.store';

export function cancelReturnEdit(store: ReturnflowDeskStore) {
  store.cancelEdit();
}
