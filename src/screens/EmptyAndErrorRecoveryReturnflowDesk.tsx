// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty and Error Recovery - ReturnFlow Desk
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Plus, Search, Settings, X } from "lucide-react";


export type EmptyAndErrorRecoveryReturnflowDeskActionId = "create-return-1" | "notifications-2" | "help-3" | "settings-4" | "close-5" | "close-6" | "filters-2-7" | "retry-8" | "clear-all-filters-9" | "create-new-return-10" | "dashboard-1" | "triage-2" | "inventory-3" | "reports-4" | "settings-5" | "help-6" | "logout-7";

export interface EmptyAndErrorRecoveryReturnflowDeskProps {
  actions?: Partial<Record<EmptyAndErrorRecoveryReturnflowDeskActionId, () => void>>;
}

export function EmptyAndErrorRecoveryReturnflowDesk({ actions }: EmptyAndErrorRecoveryReturnflowDeskProps) {
  return (
    <>
      {/* SideNavBar (Shared Component) */}
      <nav className="bg-surface-container-low dark:bg-surface-container-highest h-screen w-64 fixed left-0 top-0 z-40 border-r border-outline-variant flex flex-col p-unit gap-stack-compact transition-colors duration-150 ease-in-out hidden md:flex">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 mb-4">
      <div className="w-10 h-10 rounded bg-primary flex items-center justify-center text-on-primary">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h1 className="font-headline-sm text-headline-sm font-black text-on-surface">RF Desk</h1>
      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Station 04</p>
      </div>
      </div>
      {/* Navigation Links */}
      <div className="flex-1 flex flex-col gap-1 px-2">
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors duration-150 ease-in-out rounded-lg font-body-sm text-body-sm" href="#" data-action-id="dashboard-1" onClick={actions?.["dashboard-1"]}>
      <Circle aria-hidden={true} focusable="false" />
                      Dashboard
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 bg-secondary-container text-on-secondary-container font-bold rounded-lg transition-colors duration-150 ease-in-out font-body-sm text-body-sm" href="#" data-action-id="triage-2" onClick={actions?.["triage-2"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      Triage
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors duration-150 ease-in-out rounded-lg font-body-sm text-body-sm" href="#" data-action-id="inventory-3" onClick={actions?.["inventory-3"]}>
      <Circle aria-hidden={true} focusable="false" />
                      Inventory
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors duration-150 ease-in-out rounded-lg font-body-sm text-body-sm" href="#" data-action-id="reports-4" onClick={actions?.["reports-4"]}>
      <Circle aria-hidden={true} focusable="false" />
                      Reports
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors duration-150 ease-in-out rounded-lg font-body-sm text-body-sm" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings aria-hidden={true} focusable="false" />
                      Settings
                  </a>
      </div>
      {/* CTA */}
      <div className="px-4 py-4">
      <button className="w-full bg-primary text-on-primary h-8 rounded font-table-data text-table-data flex items-center justify-center gap-2 hover:opacity-90 transition-opacity" type="button" data-action-id="create-return-1" onClick={actions?.["create-return-1"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                      Create Return
                  </button>
      </div>
      {/* Footer Links */}
      <div className="mt-auto border-t border-outline-variant pt-4 px-2 pb-2 flex flex-col gap-1">
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors duration-150 ease-in-out rounded-lg font-body-sm text-body-sm" href="#" data-action-id="help-6" onClick={actions?.["help-6"]}>
      <Circle aria-hidden={true} focusable="false" />
                      Help
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors duration-150 ease-in-out rounded-lg font-body-sm text-body-sm" href="#" data-action-id="logout-7" onClick={actions?.["logout-7"]}>
      <Circle aria-hidden={true} focusable="false" />
                      Logout
                  </a>
      </div>
      </nav>
      {/* Main Content Area Wrapper */}
      <div className="flex-1 flex flex-col ml-0 md:ml-64 h-full relative">
      {/* TopNavBar (Shared Component) */}
      <header className="bg-surface dark:bg-on-surface full-width top-0 sticky z-50 border-b border-outline-variant dark:border-outline flex justify-between items-center h-10 px-gutter w-full">
      <div className="flex items-center gap-4">
      <div className="relative flex items-center">
      <Search className="absolute left-2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="pl-8 pr-3 h-7 w-64 bg-surface-container text-on-surface border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-sm text-body-sm placeholder:text-on-surface-variant" placeholder="Search tracking ID... (/)" type="text" />
      </div>
      </div>
      <div className="flex items-center gap-2">
      <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer active:opacity-80" type="button" data-action-id="notifications-2" onClick={actions?.["notifications-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer active:opacity-80" type="button" data-action-id="help-3" onClick={actions?.["help-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer active:opacity-80" type="button" data-action-id="settings-4" onClick={actions?.["settings-4"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <div className="w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-table-data text-table-data ml-2">
                          WA
                      </div>
      </div>
      </header>
      {/* Page Canvas */}
      <main className="flex-1 p-margin-page flex flex-col gap-stack-compact overflow-y-auto bg-background">
      {/* Context Header */}
      <div className="flex items-center justify-between mb-2">
      <h2 className="font-headline-sm text-headline-sm text-on-surface">Triage Queue</h2>
      {/* Mock Filter Context */}
      <div className="flex items-center gap-2">
      <div className="flex items-center gap-1 bg-surface border border-outline-variant rounded px-2 py-1">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Status:</span>
      <span className="font-body-sm text-body-sm text-on-surface">Pending Inspection</span>
      <button className="ml-1 text-on-surface-variant hover:text-on-surface" type="button" data-action-id="close-5" onClick={actions?.["close-5"]}><X className="text-[14px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="flex items-center gap-1 bg-surface border border-outline-variant rounded px-2 py-1">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Carrier:</span>
      <span className="font-body-sm text-body-sm text-on-surface">FedEx</span>
      <button className="ml-1 text-on-surface-variant hover:text-on-surface" type="button" data-action-id="close-6" onClick={actions?.["close-6"]}><X className="text-[14px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <button className="h-8 px-3 rounded border border-outline-variant text-on-surface font-table-data text-table-data hover:bg-surface transition-colors flex items-center gap-2" type="button" data-action-id="filters-2-7" onClick={actions?.["filters-2-7"]}>
      <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
                              Filters (2)
                          </button>
      </div>
      </div>
      {/* Error Banner (System Error Case) */}
      <div className="bg-error-container text-on-error-container border border-error/30 rounded p-3 flex items-start gap-3 shadow-sm mb-4">
      <Circle className="text-error mt-0.5" aria-hidden={true} focusable="false" />
      <div className="flex-1">
      <h3 className="font-table-data text-table-data font-semibold">Failed to load latest records</h3>
      <p className="font-body-sm text-body-sm opacity-90 mt-1">We couldn't retrieve the most recent updates from the central database. You may be viewing cached data.</p>
      </div>
      <button className="text-on-error-container font-table-data text-table-data font-bold hover:underline px-2 py-1 rounded hover:bg-error/10 transition-colors" type="button" data-action-id="retry-8" onClick={actions?.["retry-8"]}>
                          Retry
                      </button>
      </div>
      {/* Empty State Container */}
      <div className="flex-1 bg-surface border border-outline-variant rounded-xl flex flex-col items-center justify-center p-12 text-center min-h-[400px]">
      {/* Illustration/Icon Area */}
      <div className="w-24 h-24 rounded-full bg-surface-container-low flex items-center justify-center mb-6 border border-outline-variant/50">
      <Circle className="text-outline text-[48px] opacity-70" aria-hidden={true} focusable="false" />
      </div>
      {/* Messaging */}
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">No returns match your filters</h3>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mb-8">
                          We couldn't find any items in the triage queue that match "Pending Inspection" and "FedEx". Try adjusting your filters or search terms to see more results.
                      </p>
      {/* Actions */}
      <div className="flex items-center gap-4">
      <button className="h-8 px-4 bg-primary text-on-primary rounded font-table-data text-table-data hover:opacity-90 transition-opacity" type="button" data-action-id="clear-all-filters-9" onClick={actions?.["clear-all-filters-9"]}>
                              Clear All Filters
                          </button>
      <button className="h-8 px-4 bg-surface border border-outline text-on-surface rounded font-table-data text-table-data hover:bg-surface-container-low transition-colors" type="button" data-action-id="create-new-return-10" onClick={actions?.["create-new-return-10"]}>
                              Create New Return
                          </button>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
