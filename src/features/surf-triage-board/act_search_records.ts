import type { ReturnflowDeskStore } from '../returnflow-desk/returnflow-desk.store';

export function searchTriageRecords(store: ReturnflowDeskStore, query: string) {
  const normalizedQuery = query.trim();
  store.setActivePanel(normalizedQuery ? `triage-search:${normalizedQuery}` : 'triage');
}
