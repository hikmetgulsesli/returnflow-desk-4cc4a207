// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Customer Operations - ReturnFlow Desk
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Download, Menu, Plus, Search, Settings, TriangleAlert, X } from "lucide-react";


export type CustomerOperationsReturnflowDeskActionId = "create-return-1" | "date-range-2" | "export-3" | "filter-settings-4" | "close-5" | "resolve-6" | "re-scan-7" | "dashboard-1" | "triage-2" | "inventory-3" | "reports-4" | "settings-5" | "help-6" | "logout-7";

export interface CustomerOperationsReturnflowDeskProps {
  actions?: Partial<Record<CustomerOperationsReturnflowDeskActionId, () => void>>;
}

export function CustomerOperationsReturnflowDesk({ actions }: CustomerOperationsReturnflowDeskProps) {
  return (
    <>
      {/* TopNavBar (Mobile Only) */}
      <header className="md:hidden bg-surface text-primary font-body-md text-body-md docked full-width top-0 sticky z-50 border-b border-outline-variant flat no shadows flex justify-between items-center h-10 px-gutter w-full">
      <div className="flex items-center gap-unit">
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface">ReturnFlow Desk</span>
      </div>
      <div className="flex items-center gap-stack-compact text-on-surface-variant">
      <Search className="cursor-pointer active:opacity-80 hover:bg-surface-container-low transition-colors rounded p-1 text-[20px]" aria-hidden={true} focusable="false" />
      <Menu className="cursor-pointer active:opacity-80 hover:bg-surface-container-low transition-colors rounded p-1 text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      </header>
      <div className="flex flex-1 min-w-0 overflow-hidden">
      {/* SideNavBar (Desktop) */}
      <nav className="hidden md:flex flex-col h-full p-unit gap-stack-compact bg-surface-container-low text-primary font-body-sm text-body-sm h-screen w-64 fixed left-0 top-0 z-40 border-r border-outline-variant flat no shadows transition-colors duration-150 ease-in-out">
      <div className="flex items-center gap-stack-compact p-gutter mb-stack-compact">
      <div className="w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center font-bold">RF</div>
      <div>
      <div className="font-headline-sm text-headline-sm font-black text-on-surface">RF Desk</div>
      <div className="text-[11px] text-on-surface-variant">Station 04</div>
      </div>
      </div>
      <button className="w-full bg-primary text-on-primary h-8 rounded flex items-center justify-center gap-unit font-bold hover:bg-on-surface transition-colors mb-stack-compact" type="button" data-action-id="create-return-1" onClick={actions?.["create-return-1"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                      Create Return
                  </button>
      <div className="flex-1 flex flex-col gap-unit">
      <a className="flex items-center gap-stack-compact p-2 rounded hover:bg-surface-container-high transition-colors duration-150 ease-in-out text-on-surface-variant hover:text-on-surface" href="#" data-action-id="dashboard-1" onClick={actions?.["dashboard-1"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>Dashboard</span>
      </a>
      <a className="flex items-center gap-stack-compact p-2 rounded hover:bg-surface-container-high transition-colors duration-150 ease-in-out bg-secondary-container text-on-secondary-container font-bold" href="#" data-action-id="triage-2" onClick={actions?.["triage-2"]}>
      <Circle className="text-[20px] icon-fill" aria-hidden={true} focusable="false" />
      <span>Triage</span>
      </a>
      <a className="flex items-center gap-stack-compact p-2 rounded hover:bg-surface-container-high transition-colors duration-150 ease-in-out text-on-surface-variant hover:text-on-surface" href="#" data-action-id="inventory-3" onClick={actions?.["inventory-3"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>Inventory</span>
      </a>
      <a className="flex items-center gap-stack-compact p-2 rounded hover:bg-surface-container-high transition-colors duration-150 ease-in-out text-on-surface-variant hover:text-on-surface" href="#" data-action-id="reports-4" onClick={actions?.["reports-4"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>Reports</span>
      </a>
      <a className="flex items-center gap-stack-compact p-2 rounded hover:bg-surface-container-high transition-colors duration-150 ease-in-out text-on-surface-variant hover:text-on-surface" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>Settings</span>
      </a>
      </div>
      <div className="mt-auto border-t border-outline-variant pt-unit flex flex-col gap-unit">
      <a className="flex items-center gap-stack-compact p-2 rounded hover:bg-surface-container-high transition-colors duration-150 ease-in-out text-on-surface-variant hover:text-on-surface" href="#" data-action-id="help-6" onClick={actions?.["help-6"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>Help</span>
      </a>
      <a className="flex items-center gap-stack-compact p-2 rounded hover:bg-surface-container-high transition-colors duration-150 ease-in-out text-on-surface-variant hover:text-on-surface" href="#" data-action-id="logout-7" onClick={actions?.["logout-7"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>Logout</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 min-w-0 w-full md:ml-64 xl:mr-[320px] flex flex-col h-full bg-surface-bright">
      {/* Desktop Top Search Bar / Global Actions */}
      <div className="hidden md:flex justify-between items-center h-12 px-margin-page border-b border-outline-variant bg-surface">
      <div className="relative w-96">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full h-8 pl-8 pr-2 bg-surface-container-low border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary text-body-sm font-body-sm transition-colors" placeholder="Search orders, customers, or items ( / )" type="text" />
      </div>
      <div className="flex items-center gap-stack-compact text-on-surface-variant">
      <Circle className="cursor-pointer hover:text-on-surface transition-colors p-1" aria-hidden={true} focusable="false" />
      <div className="w-6 h-6 rounded bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-xs ml-2 cursor-pointer">
                              WA
                          </div>
      </div>
      </div>
      {/* Dashboard Content Scrollable Area */}
      <div className="flex-1 min-w-0 overflow-auto p-gutter md:p-margin-page flex flex-col gap-margin-page">
      {/* Metrics Header */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
      {/* Metric 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-3 flex flex-col justify-between">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Total Returns</span>
      <div className="flex items-end justify-between mt-2">
      <span className="font-display-metric text-display-metric text-on-surface">1,248</span>
      <span className="text-body-sm font-body-sm text-on-surface-variant flex items-center"><Circle className="text-[14px] mr-1" aria-hidden={true} focusable="false" />12%</span>
      </div>
      </div>
      {/* Metric 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-3 flex flex-col justify-between border-l-4 border-l-error">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Pending Triage</span>
      <div className="flex items-end justify-between mt-2">
      <span className="font-display-metric text-display-metric text-error">42</span>
      <span className="text-body-sm font-body-sm text-error flex items-center"><TriangleAlert className="text-[14px] mr-1" aria-hidden={true} focusable="false" />High</span>
      </div>
      </div>
      {/* Metric 3 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-3 flex flex-col justify-between border-l-4 border-l-on-tertiary-container">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Flagged Exceptions</span>
      <div className="flex items-end justify-between mt-2">
      <span className="font-display-metric text-display-metric text-on-surface">18</span>
      <span className="text-body-sm font-body-sm text-on-surface-variant">Review Req.</span>
      </div>
      </div>
      {/* Metric 4 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-3 flex flex-col justify-between border-l-4 border-l-primary-fixed-dim">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Refund Ready</span>
      <div className="flex items-end justify-between mt-2">
      <span className="font-display-metric text-display-metric text-on-surface">305</span>
      <span className="text-body-sm font-body-sm text-on-surface-variant">Auto-proc.</span>
      </div>
      </div>
      </section>
      {/* Data Table Section */}
      <section className="flex-1 min-w-0 flex flex-col bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden min-h-[400px]">
      {/* Table Toolbar */}
      <div className="p-3 border-b border-outline-variant flex flex-col sm:flex-row justify-between items-start sm:items-center gap-stack-compact bg-surface-container-low">
      <div className="flex items-center gap-stack-compact flex-wrap">
      <select className="h-8 border-outline-variant bg-surface rounded text-body-sm font-body-sm px-2 focus:ring-1 focus:ring-primary focus:border-primary">
      <option>Status: All</option>
      <option>Pending Triage</option>
      <option>Inspected</option>
      <option>Exception</option>
      </select>
      <select className="h-8 border-outline-variant bg-surface rounded text-body-sm font-body-sm px-2 focus:ring-1 focus:ring-primary focus:border-primary">
      <option>Lane: All</option>
      <option>Lane 1 (Electronics)</option>
      <option>Lane 2 (Apparel)</option>
      </select>
      <button className="h-8 px-2 border border-outline-variant rounded bg-surface hover:bg-surface-container flex items-center gap-1 text-body-sm font-body-sm transition-colors" type="button" data-action-id="date-range-2" onClick={actions?.["date-range-2"]}>
      <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
                                      Date Range
                                  </button>
      </div>
      <div className="flex items-center gap-unit">
      <button className="h-8 w-8 border border-outline-variant rounded bg-surface hover:bg-surface-container flex items-center justify-center transition-colors" title="Export" type="button" data-action-id="export-3" onClick={actions?.["export-3"]}>
      <Download className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="h-8 w-8 border border-outline-variant rounded bg-surface hover:bg-surface-container flex items-center justify-center transition-colors" title="Filter Settings" type="button" data-action-id="filter-settings-4" onClick={actions?.["filter-settings-4"]}>
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Table Container (Dense) */}
      <div className="flex-1 overflow-auto">
      <table className="w-full text-left border-collapse min-w-[800px]">
      <thead className="bg-surface-container-low sticky top-0 z-10 shadow-[0_1px_0_#e4e2e4]">
      <tr>
      <th className="px-3 py-2 font-label-caps text-label-caps text-on-surface-variant w-10">
      <input className="rounded border-outline-variant text-primary focus:ring-primary h-3.5 w-3.5" type="checkbox" />
      </th>
      <th className="px-3 py-2 font-label-caps text-label-caps text-on-surface-variant">Customer</th>
      <th className="px-3 py-2 font-label-caps text-label-caps text-on-surface-variant">Order ID</th>
      <th className="px-3 py-2 font-label-caps text-label-caps text-on-surface-variant">Return Reason</th>
      <th className="px-3 py-2 font-label-caps text-label-caps text-on-surface-variant">Status</th>
      <th className="px-3 py-2 font-label-caps text-label-caps text-on-surface-variant">Lane</th>
      <th className="px-3 py-2 font-label-caps text-label-caps text-on-surface-variant text-right">Last Activity</th>
      </tr>
      </thead>
      <tbody className="font-table-data text-table-data divide-y divide-outline-variant">
      {/* Row 1 (Selected) */}
      <tr className="bg-secondary-fixed cursor-pointer transition-colors hover:bg-secondary-fixed-dim">
      <td className="px-3 py-1.5 h-[32px]">
      <input defaultChecked={true} className="rounded border-outline-variant text-primary focus:ring-primary h-3.5 w-3.5" type="checkbox" />
      </td>
      <td className="px-3 py-1.5 h-[32px] text-on-surface font-semibold">Sarah Jenkins</td>
      <td className="px-3 py-1.5 h-[32px] font-mono text-[12px] text-on-surface-variant">ORD-992-A</td>
      <td className="px-3 py-1.5 h-[32px] text-on-surface-variant truncate max-w-[200px]">Defective / Does not power on</td>
      <td className="px-3 py-1.5 h-[32px]">
      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-error-container text-on-error-container border border-[#ffb4ab]">
                                                  EXCEPTION
                                              </span>
      </td>
      <td className="px-3 py-1.5 h-[32px] text-on-surface-variant">L1-Elec</td>
      <td className="px-3 py-1.5 h-[32px] text-right text-on-surface-variant text-[11px]">10m ago</td>
      </tr>
      {/* Row 2 */}
      <tr className="hover:bg-surface-container-low cursor-pointer transition-colors">
      <td className="px-3 py-1.5 h-[32px]">
      <input className="rounded border-outline-variant text-primary focus:ring-primary h-3.5 w-3.5" type="checkbox" />
      </td>
      <td className="px-3 py-1.5 h-[32px] text-on-surface">Michael Chang</td>
      <td className="px-3 py-1.5 h-[32px] font-mono text-[12px] text-on-surface-variant">ORD-881-X</td>
      <td className="px-3 py-1.5 h-[32px] text-on-surface-variant truncate max-w-[200px]">Wrong size ordered</td>
      <td className="px-3 py-1.5 h-[32px]">
      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary-fixed-dim">
                                                  PENDING
                                              </span>
      </td>
      <td className="px-3 py-1.5 h-[32px] text-on-surface-variant">L2-App</td>
      <td className="px-3 py-1.5 h-[32px] text-right text-on-surface-variant text-[11px]">45m ago</td>
      </tr>
      {/* Row 3 */}
      <tr className="hover:bg-surface-container-low cursor-pointer transition-colors bg-surface-container-lowest">
      <td className="px-3 py-1.5 h-[32px]">
      <input className="rounded border-outline-variant text-primary focus:ring-primary h-3.5 w-3.5" type="checkbox" />
      </td>
      <td className="px-3 py-1.5 h-[32px] text-on-surface">Elena Rodriguez</td>
      <td className="px-3 py-1.5 h-[32px] font-mono text-[12px] text-on-surface-variant">ORD-104-Y</td>
      <td className="px-3 py-1.5 h-[32px] text-on-surface-variant truncate max-w-[200px]">No longer needed</td>
      <td className="px-3 py-1.5 h-[32px]">
      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#cce8e4] text-[#055047] border border-[#a0d2ca]">
                                                  INSPECTED
                                              </span>
      </td>
      <td className="px-3 py-1.5 h-[32px] text-on-surface-variant">L3-Gen</td>
      <td className="px-3 py-1.5 h-[32px] text-right text-on-surface-variant text-[11px]">2h ago</td>
      </tr>
      {/* Row 4 */}
      <tr className="hover:bg-surface-container-low cursor-pointer transition-colors">
      <td className="px-3 py-1.5 h-[32px]">
      <input className="rounded border-outline-variant text-primary focus:ring-primary h-3.5 w-3.5" type="checkbox" />
      </td>
      <td className="px-3 py-1.5 h-[32px] text-on-surface">David Kim</td>
      <td className="px-3 py-1.5 h-[32px] font-mono text-[12px] text-on-surface-variant">ORD-552-Z</td>
      <td className="px-3 py-1.5 h-[32px] text-on-surface-variant truncate max-w-[200px]">Item damaged in transit</td>
      <td className="px-3 py-1.5 h-[32px]">
      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-error-container text-on-error-container border border-[#ffb4ab]">
                                                  EXCEPTION
                                              </span>
      </td>
      <td className="px-3 py-1.5 h-[32px] text-on-surface-variant">L1-Elec</td>
      <td className="px-3 py-1.5 h-[32px] text-right text-on-surface-variant text-[11px]">3h ago</td>
      </tr>
      </tbody>
      </table>
      </div>
      </section>
      </div>
      </main>
      {/* Preview Drawer (Visible based on selection) */}
      <aside className="hidden xl:flex fixed right-0 top-0 z-30 flex-col w-[320px] bg-surface-container-lowest border-l border-outline-variant h-screen">
      <div className="p-3 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
      <span className="font-headline-sm text-headline-sm text-on-surface">Return Details</span>
      <button className="text-on-surface-variant hover:text-on-surface" type="button" data-action-id="close-5" onClick={actions?.["close-5"]}>
      <X className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex-1 overflow-auto p-3 flex flex-col gap-3">
      {/* Header Info */}
      <div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface">ORD-992-A</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Sarah Jenkins • Premium Member</p>
      </div>
      {/* Status Bar */}
      <div className="bg-error-container text-on-error-container rounded p-2 border border-[#ffb4ab]">
      <div className="flex items-center gap-1 font-bold text-body-sm">
      <TriangleAlert className="text-[16px]" aria-hidden={true} focusable="false" />
                              Exception Requires Review
                          </div>
      <p className="text-[12px] mt-1 opacity-90">Item returned does not match serial number on file.</p>
      </div>
      {/* Action Buttons */}
      <div className="flex gap-2">
      <button className="flex-1 bg-primary text-on-primary h-8 rounded text-body-sm font-bold hover:bg-on-surface transition-colors" type="button" data-action-id="resolve-6" onClick={actions?.["resolve-6"]}>Resolve</button>
      <button className="flex-1 bg-surface border border-outline-variant h-8 rounded text-body-sm font-bold hover:bg-surface-container transition-colors" type="button" data-action-id="re-scan-7" onClick={actions?.["re-scan-7"]}>Re-scan</button>
      </div>
      <hr className="border-outline-variant my-1" />
      {/* Activity Timeline */}
      <div>
      <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-2">Activity History</h4>
      <div className="flex flex-col gap-2 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant">
      <div className="flex gap-2 relative z-10">
      <div className="w-6 h-6 rounded-full bg-error flex items-center justify-center shrink-0 mt-0.5">
      <Circle className="text-[12px] text-white" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <p className="font-body-sm text-body-sm text-on-surface font-semibold">Flagged at Inspection</p>
      <p className="text-[11px] text-on-surface-variant">Today, 10:42 AM by WA-04</p>
      </div>
      </div>
      <div className="flex gap-2 relative z-10">
      <div className="w-6 h-6 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center shrink-0 mt-0.5">
      <Circle className="text-[12px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <p className="font-body-sm text-body-sm text-on-surface">Received at Dock</p>
      <p className="text-[11px] text-on-surface-variant">Today, 08:15 AM</p>
      </div>
      </div>
      <div className="flex gap-2 relative z-10">
      <div className="w-6 h-6 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center shrink-0 mt-0.5">
      <Circle className="text-[12px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <p className="font-body-sm text-body-sm text-on-surface">RMA Generated</p>
      <p className="text-[11px] text-on-surface-variant">Oct 12, 14:22 PM by Customer</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </aside>
      </div>
    </>
  );
}
