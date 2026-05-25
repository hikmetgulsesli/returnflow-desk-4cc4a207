import type { ReturnflowDeskStore } from '../returnflow-desk/returnflow-desk.store';

export function saveReturnRecord(store: ReturnflowDeskStore) {
  store.navigate('triage');
}
