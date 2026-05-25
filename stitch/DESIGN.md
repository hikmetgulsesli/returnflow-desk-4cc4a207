---
name: ReturnFlow Desk Operational System
colors:
  surface: '#fcf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fcf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f5'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e4'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45464d'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271901'
  on-tertiary-container: '#98805d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#fcf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e4'
typography:
  display-metric:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  table-data:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 12px
  margin-page: 24px
  stack-compact: 8px
  stack-dense: 4px
---

## Brand & Style
The design system is engineered for high-velocity warehouse environments where information density is a requirement, not a choice. The brand personality is **Precise, Reliable, and Calm**. It avoids visual noise to reduce cognitive load during long shifts of package triaging and data entry.

The style is **Corporate / Modern** with a lean toward **Minimalism**. It prioritizes utility over decoration, utilizing a "Dense but Calm" philosophy. This is achieved through a systematic application of neutral tones and generous horizontal breathing room within high-density vertical stacks. The UI should feel like a high-performance instrument: quiet until an exception requires immediate attention.

## Colors
The palette is anchored in **Slate Grays** and **Crisp Whites** to create a neutral stage for data. 
- **Primary:** Deep Slate (#0F172A) for text and primary actions to ensure maximum contrast.
- **Neutrals:** A range of cool grays (Slate 50–500) defines the UI structure and secondary information.
- **Accents:** Reserved strictly for status and functional signaling:
    - **Emerald (Ready):** Successful scans and completed triages.
    - **Amber (Triage):** Items requiring manual review or pending actions.
    - **Rose (Exception):** Damaged goods, missing manifests, or system errors.

The default mode is **Light**, optimized for high-glare warehouse environments with overhead lighting.

## Typography
This design system utilizes **Inter** for its exceptional legibility at small sizes and its neutral, systematic character. 

The hierarchy is optimized for scanning:
- **Metrics:** Use `display-metric` for warehouse KPIs (e.g., "Items Triaged Today").
- **Tables:** Data rows use `table-data` at 13px to maximize row count without sacrificing readability.
- **Labels:** Uppercase labels are used for table headers and form field captions to differentiate them from user-generated data.
- **Mobile:** On smaller devices, `display-metric` scales down to 28px (`display-metric-mobile`) to prevent horizontal overflow.

## Layout & Spacing
The layout follows a **Fluid Grid** model designed to stretch across wide-screen industrial monitors while maintaining usability on handheld scanners. 

- **Grid:** A 12-column layout with 12px gutters. The narrow gutter supports the "dense" requirement, allowing more data columns in tables.
- **Density:** Vertical rhythm is tight. Components use a 4px baseline. Table rows should be capped at 40px height for "Standard" and 32px for "High-Density" views.
- **Adaptation:** On mobile/handhelds, the grid collapses to a single column, and the `margin-page` reduces to 16px. Sidebars transform into bottom-anchored sheets for easy thumb access.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows. This keeps the interface feeling "flat" and efficient.

- **Level 0 (Background):** Slate-50 (#F8FAFC) for the main canvas.
- **Level 1 (Cards/Containers):** Pure White (#FFFFFF) with a 1px border (#E2E8F0).
- **Level 2 (Popovers/Tooltips):** Pure White with a subtle, tight shadow (4px blur, 10% opacity) to provide minimal separation from the base layer.
- **Active States:** Elements being dragged or interacted with use a subtle blue tint (#EFF6FF) and a slightly darker border.

## Shapes
The shape language is **Soft (0.25rem)**. This provides a professional, "tool-like" feel that is more space-efficient than fully rounded corners. 

- **Standard Elements:** 4px radius for buttons, inputs, and status badges.
- **Large Containers:** 8px (rounded-lg) for main dashboard cards.
- **Data Points:** Status dots and toggle switches remain circular for instant recognition.

## Components
- **Data Tables:** The core of the system. Rows use an alternating zebra-stripe (Slate-25) on hover. Columns for "Tracking ID" use a monospaced font variant if possible.
- **Status Badges:** Small, rectangular tags with 4px radius. Use a light background tint of the status color with high-contrast dark text (e.g., Light Emerald background with Deep Emerald text).
- **Primary Action Buttons:** Solid Slate-900 with white text. Height is fixed at 32px for high-density efficiency.
- **Input Fields:** Condensed 32px height. 1px Slate-200 border. Focus state uses a 2px Slate-900 inner ring.
- **Return Cards:** In triage views, use a condensed card with a vertical status stripe on the left edge (Emerald/Amber/Rose) to allow peripheral scanning of status while reading details.
- **Search Bar:** Prominent, global search at the top of the dashboard with a `/` keyboard shortcut hint.