import type { ReturnflowDeskStore } from '../returnflow-desk/returnflow-desk.store';

export function retryEmptyAndErrorRecoveryLoad(store: ReturnflowDeskStore) {
  store.setActivePanel('retry-load');
}
