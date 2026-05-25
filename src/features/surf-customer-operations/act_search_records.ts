import type { ReturnflowDeskStore } from '../returnflow-desk/returnflow-desk.store';

export function searchReturnRecords(store: ReturnflowDeskStore, query: string) {
  const normalizedQuery = query.trim();
  store.setActivePanel(normalizedQuery ? `search:${normalizedQuery}` : 'triage');
}
