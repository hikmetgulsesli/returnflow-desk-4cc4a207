import type { ReturnflowDeskStore } from '../returnflow-desk/returnflow-desk.store';

export function retryReturnflowLoad(store: ReturnflowDeskStore) {
  store.retryLoad();
}
