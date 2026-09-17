# Internal Product Intelligence Dashboard

A front-end mock of an internal "product intelligence" dashboard for a Granicus-style
government software modernization programme. It presents a single-screen view of how a
workflow modernization effort is performing: operational KPIs, where users are hitting
friction, how adoption is trending, and what is blocking the roadmap.

The application is a **demo/prototype**. All numbers, initiatives, owners and customer
quotes are hard-coded sample data — there is no backend, API or database. It exists to
communicate layout, information architecture and narrative to stakeholders, not to report
real metrics.

Two of the three tabs are deliberately rendered in a desaturated "wireframe" style to
signal that they are layout concepts rather than finished screens.

## Tech stack

- **React 18** with function components and hooks
- **Vite 5** for dev server and build (`base: './'` so the build works on GitHub Pages)
- **Recharts** for line, bar and stacked area charts
- **lucide-react** for icons
- **Plain CSS** (`src/index.css`) — CSS custom properties for the dark theme plus a small
  hand-rolled utility class set; no Tailwind or component library
- **GitHub Actions** deploys the built `dist/` to GitHub Pages on every push to `main`

## Features

### Application shell

- **Tabbed navigation** between three views — Operations Health, Adoption Metrics and
  Roadmap Status — with the active tab highlighted.
- **"View As" role selector** (Executive / PM / Dev Team) in the header.
- **Time range selector** (Last 30 Days / Last Quarter / Year to Date).
- **"Export for Stakeholders" button** in the header.
- **Voice of the Customer ticker** — a banner that rotates through verbatim customer
  quotes on a 5-second interval.
- **"Last Refreshed" timestamp** in the footer, set from the browser clock on load.
- **Dark theme** driven by CSS custom properties, with semantic success / warning / danger
  colours used consistently across KPIs, charts and status badges.

### Operations Health tab (primary view)

- **KPI cards** for Processing Time Reduction, Manual Steps Eliminated, User Friction
  Reports and System Adoption Rate, each with a trend arrow, period-over-period change and
  a coloured left border — green when healthy, amber when a target is being missed.
- **Workflow Efficiency Trend** — a line chart contrasting manual against automated
  processing time over six months, with a reference line marking the modernization
  go-live.
- **Top Friction Points** — a horizontal bar chart of reported issues, with bars coloured
  by severity (high / medium / low) and a "Submit Feedback" action.
- **Active Initiatives table** — initiative name, owner, status pill (On Track / At Risk /
  Blocked), target KPI, current value and sprint.

### Adoption Metrics tab (wireframe)

- **Tool Adoption Funnel** — a stepped funnel from Invited through Activated and Weekly
  Active to Power User.
- **Feature Usage Heatmap** — a role-by-feature grid (Underwriter, Analyst, Manager across
  Search, Export, Approval, Settings), with one cell flagged as a friction signal.
- **Adoption Over Time** — a stacked area chart of new versus returning users by week, with
  a reference line marking the launch of the training initiative.

### Roadmap Status tab (wireframe)

- **Quarterly timeline** spanning the current and upcoming quarter, with roadmap items
  styled by state — completed, in progress (hatched) and upcoming (dashed outline).
- **Milestone and blocker markers** on the timeline, such as the security review gate on
  the SSO integration.
- **Escalation Path sidebar** — a sticky panel listing active blockers with a description,
  owner and, where relevant, the age of the blocker.

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Vite prints a local URL (`http://localhost:5173` by default).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot module replacement |
| `npm run build` | Produce a production build in `dist/` |
| `npm run preview` | Serve the contents of `dist/` locally to check the build |

## Project structure

```
index.html                              Vite entry point
vite.config.js                          Vite + React plugin config, relative base path
src/
  main.jsx                              React root
  App.jsx                               Shell: header, tab state, VoC ticker, footer
  index.css                             Theme variables, utility classes, component styles
  components/
    OperationsHealthTab.jsx             KPIs, efficiency trend, friction chart, initiatives
    AdoptionMetricsTab.jsx              Funnel, usage heatmap, adoption over time
    RoadmapStatusTab.jsx                Quarterly timeline and blockers sidebar
.github/workflows/deploy.yml            Build and publish dist/ to GitHub Pages
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which installs dependencies,
runs `npm run build` and publishes `dist/` to GitHub Pages. The workflow can also be run
manually via `workflow_dispatch`.

## Changing the sample data

Each tab holds its own data at the top of its component file as plain arrays of objects —
for example `kpis`, `efficiencyData`, `frictionData` and `initiatives` in
`src/components/OperationsHealthTab.jsx`, and `adoptionData` in
`src/components/AdoptionMetricsTab.jsx`. The Voice of the Customer quotes live in
`recentQuotes` in `src/App.jsx`. Roadmap items are currently written directly into the
markup of `src/components/RoadmapStatusTab.jsx`.
