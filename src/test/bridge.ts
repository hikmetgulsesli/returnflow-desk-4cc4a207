import type { ReturnflowDeskSnapshot } from '../features/returnflow-desk/returnflow-desk.store';

declare global {
  interface Window {
    app?: ReturnflowDeskSnapshot;
  }
}

export function publishReturnflowDeskBridge(snapshot: ReturnflowDeskSnapshot) {
  if (typeof window !== 'undefined') {
    window.app = snapshot;
  }
}
