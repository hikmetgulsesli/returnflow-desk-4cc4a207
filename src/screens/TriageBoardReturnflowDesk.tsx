// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Triage Board - ReturnFlow Desk
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, ListFilter, Plus, Search, Settings, TriangleAlert } from "lucide-react";


export type TriageBoardReturnflowDeskActionId = "notifications-1" | "help-2" | "settings-3" | "create-return-4" | "filter-5" | "sort-6" | "assign-7" | "assign-8" | "inspect-9" | "review-10" | "dashboard-1" | "triage-2" | "inventory-3" | "reports-4" | "settings-5" | "help-6" | "logout-7";

export interface TriageBoardReturnflowDeskProps {
  actions?: Partial<Record<TriageBoardReturnflowDeskActionId, () => void>>;
}

export function TriageBoardReturnflowDesk({ actions }: TriageBoardReturnflowDeskProps) {
  return (
    <>
      {/* TopNavBar */}
      <nav className="bg-surface dark:bg-on-surface docked full-width top-0 sticky z-50 border-b border-outline-variant dark:border-outline flat no shadows flex justify-between items-center h-10 px-gutter w-full">
      <div className="flex items-center gap-4">
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-inverse-on-surface">ReturnFlow Desk</span>
      </div>
      <div className="flex-1 flex justify-center px-8">
      <div className="relative w-full max-w-md">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full h-8 pl-8 pr-3 text-body-sm bg-surface-container border border-outline-variant rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Search tracking ID or customer (press / to focus)" type="text" />
      </div>
      </div>
      <div className="flex items-center gap-2">
      <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors rounded cursor-pointer active:opacity-80" type="button" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors rounded cursor-pointer active:opacity-80" type="button" data-action-id="help-2" onClick={actions?.["help-2"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors rounded cursor-pointer active:opacity-80" type="button" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <img alt="Warehouse Associate Profile" className="w-6 h-6 rounded-full border border-outline-variant ml-2 object-cover" data-alt="A small, circular profile picture of a male warehouse associate in uniform, smiling slightly against a neutral background. High-key lighting, corporate modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcZkIomT6vEMMI_a-dJaMKKI54aE7ww4FlIgGu4PvNaagKquMb5nzKB7RMpZTVy1sNAfiRFCfUbh4Map8HCSeWUxiK3iBe2BONp24RdwY2IsI62T-UwJw9UdS1m65NFgV0oMuHl_a4CndiO8AuDdLooX79TMH7nJrULwY76sT6x00KI-4NjiCcxgCs_hvb1OXt9tXIuVA-3BLsL6Vt8zvyP9lMwhOxZ75kzEyvpczYPL689iGs5rXvwK1uvUMhnoCRGKWDP7rZ97M" />
      </div>
      </nav>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar */}
      <aside className="hidden md:flex flex-col h-full w-64 border-r border-outline-variant bg-surface-container-low dark:bg-surface-container-highest p-unit gap-stack-compact flex-shrink-0 z-40">
      <div className="p-4 mb-2">
      <h2 className="font-headline-sm text-headline-sm font-black text-on-surface">RF Desk</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Station 04</p>
      </div>
      <button className="mx-2 mb-4 bg-primary text-on-primary font-table-data text-table-data h-8 rounded hover:bg-surface-tint transition-colors flex items-center justify-center gap-2" type="button" data-action-id="create-return-4" onClick={actions?.["create-return-4"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" />
                      Create Return
                  </button>
      <nav className="flex-1 space-y-1 px-2">
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors duration-150 ease-in-out rounded" href="#" data-action-id="dashboard-1" onClick={actions?.["dashboard-1"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm">Dashboard</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 bg-secondary-container text-on-secondary-container font-bold rounded-lg transition-colors duration-150 ease-in-out" href="#" data-action-id="triage-2" onClick={actions?.["triage-2"]}>
      <Circle data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm">Triage</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors duration-150 ease-in-out rounded" href="#" data-action-id="inventory-3" onClick={actions?.["inventory-3"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm">Inventory</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors duration-150 ease-in-out rounded" href="#" data-action-id="reports-4" onClick={actions?.["reports-4"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm">Reports</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors duration-150 ease-in-out rounded" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm">Settings</span>
      </a>
      </nav>
      <div className="mt-auto px-2 pb-2 space-y-1">
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors duration-150 ease-in-out rounded" href="#" data-action-id="help-6" onClick={actions?.["help-6"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm">Help</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors duration-150 ease-in-out rounded" href="#" data-action-id="logout-7" onClick={actions?.["logout-7"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm">Logout</span>
      </a>
      </div>
      </aside>
      {/* Main Content Canvas (Kanban Board) */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background">
      {/* Board Header */}
      <header className="flex-none flex items-center justify-between px-margin-page py-4 border-b border-outline-variant bg-surface">
      <div>
      <h1 className="font-display-metric text-display-metric text-on-surface">Triage Board</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Manage and assign incoming return packages.</p>
      </div>
      <div className="flex gap-2">
      <button className="h-8 px-3 text-body-sm font-table-data text-on-surface border border-outline-variant rounded hover:bg-surface-container transition-colors flex items-center gap-1" type="button" data-action-id="filter-5" onClick={actions?.["filter-5"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" />
                              Filter
                          </button>
      <button className="h-8 px-3 text-body-sm font-table-data text-on-surface border border-outline-variant rounded hover:bg-surface-container transition-colors flex items-center gap-1" type="button" data-action-id="sort-6" onClick={actions?.["sort-6"]}>
      <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
                              Sort
                          </button>
      </div>
      </header>
      {/* Kanban Lanes */}
      <div className="flex-1 overflow-x-auto p-4 flex gap-4 items-start">
      {/* Lane: Incoming */}
      <div className="flex-none w-72 flex flex-col h-full bg-surface-container-low border border-outline-variant rounded-lg">
      <div className="flex items-center justify-between p-3 border-b border-outline-variant">
      <h3 className="font-table-data text-table-data text-on-surface uppercase tracking-wider">Incoming</h3>
      <span className="bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded text-label-caps font-label-caps">3</span>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
      {/* Card 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant p-3 rounded shadow-sm hover:border-outline transition-colors cursor-grab relative overflow-hidden group">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary-fixed"></div> {/* Priority Stripe */}
      <div className="flex justify-between items-start mb-2 pl-2">
      <span className="font-table-data text-table-data text-on-surface">C. Jenkins</span>
      <span className="text-label-caps font-label-caps text-on-surface-variant">2h ago</span>
      </div>
      <div className="pl-2 mb-3">
      <p className="font-body-sm text-body-sm text-on-surface-variant truncate">TRK-9982-A</p>
      </div>
      <div className="pl-2 flex justify-between items-center">
      <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed-variant text-label-caps font-label-caps">MED</span>
      <button className="text-primary hover:text-surface-tint text-body-sm font-table-data opacity-0 group-hover:opacity-100 transition-opacity" type="button" data-action-id="assign-7" onClick={actions?.["assign-7"]}>Assign</button>
      </div>
      </div>
      {/* Card 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant p-3 rounded shadow-sm hover:border-outline transition-colors cursor-grab relative overflow-hidden group">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-error-container"></div>
      <div className="flex justify-between items-start mb-2 pl-2">
      <span className="font-table-data text-table-data text-on-surface">A. Rivera</span>
      <span className="text-label-caps font-label-caps text-error">4h ago</span>
      </div>
      <div className="pl-2 mb-3">
      <p className="font-body-sm text-body-sm text-on-surface-variant truncate">TRK-4512-B</p>
      </div>
      <div className="pl-2 flex justify-between items-center">
      <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-error-container text-on-error-container text-label-caps font-label-caps">HIGH</span>
      <button className="text-primary hover:text-surface-tint text-body-sm font-table-data opacity-0 group-hover:opacity-100 transition-opacity" type="button" data-action-id="assign-8" onClick={actions?.["assign-8"]}>Assign</button>
      </div>
      </div>
      </div>
      </div>
      {/* Lane: In Triage */}
      <div className="flex-none w-72 flex flex-col h-full bg-surface-container-low border border-outline-variant rounded-lg">
      <div className="flex items-center justify-between p-3 border-b border-outline-variant">
      <h3 className="font-table-data text-table-data text-on-surface uppercase tracking-wider">In Triage</h3>
      <span className="bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded text-label-caps font-label-caps">1</span>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
      {/* Card 3 */}
      <div className="bg-surface-container-lowest border border-outline-variant p-3 rounded shadow-sm hover:border-outline transition-colors cursor-grab relative overflow-hidden group">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-surface-variant"></div>
      <div className="flex justify-between items-start mb-2 pl-2">
      <span className="font-table-data text-table-data text-on-surface">M. Scott</span>
      <span className="text-label-caps font-label-caps text-on-surface-variant">30m ago</span>
      </div>
      <div className="pl-2 mb-3">
      <p className="font-body-sm text-body-sm text-on-surface-variant truncate">TRK-1120-X</p>
      </div>
      <div className="pl-2 flex justify-between items-center">
      <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-surface-variant text-on-surface-variant text-label-caps font-label-caps">LOW</span>
      <button className="text-primary hover:text-surface-tint text-body-sm font-table-data opacity-0 group-hover:opacity-100 transition-opacity" type="button" data-action-id="inspect-9" onClick={actions?.["inspect-9"]}>Inspect</button>
      </div>
      </div>
      </div>
      </div>
      {/* Lane: Flagged */}
      <div className="flex-none w-72 flex flex-col h-full bg-surface-container-low border border-outline-variant rounded-lg border-l-4 border-l-error">
      <div className="flex items-center justify-between p-3 border-b border-outline-variant">
      <h3 className="font-table-data text-table-data text-error uppercase tracking-wider flex items-center gap-1">
      <TriangleAlert className="text-[16px]" aria-hidden={true} focusable="false" /> Flagged
                              </h3>
      <span className="bg-error-container text-on-error-container px-2 py-0.5 rounded text-label-caps font-label-caps">2</span>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
      {/* Card 4 (Blocker) */}
      <div className="bg-surface-container-lowest border border-error p-3 rounded shadow-sm cursor-grab relative overflow-hidden group">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-error-container"></div>
      <div className="flex justify-between items-start mb-2 pl-2">
      <span className="font-table-data text-table-data text-on-surface">S. Patel</span>
      <span className="text-label-caps font-label-caps text-error">1d ago</span>
      </div>
      <div className="pl-2 mb-2">
      <p className="font-body-sm text-body-sm text-on-surface-variant truncate">TRK-8821-Y</p>
      </div>
      <div className="pl-2 mb-3 flex items-center gap-1 text-error bg-error-container/30 px-1 py-0.5 rounded w-fit">
      <Circle className="text-[14px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-[10px]">Missing Proof</span>
      </div>
      <div className="pl-2 flex justify-between items-center">
      <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-error-container text-on-error-container text-label-caps font-label-caps">HIGH</span>
      <button className="text-error hover:text-on-error-container text-body-sm font-table-data opacity-0 group-hover:opacity-100 transition-opacity" type="button" data-action-id="review-10" onClick={actions?.["review-10"]}>Review</button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
