# Release Radar

Release Radar is a production-readiness dashboard for software releases. It combines delivery signals into a readable confidence score and highlights the actions most likely to reduce risk.

## Features

- Confidence scoring for tests, incidents, observability, rollback, and ownership
- Zod-validated release configuration form
- English and Arabic localization with automatic RTL layout
- Persistent light and dark themes
- TanStack Router routes for dashboard and signal details
- Responsive Tailwind and shadcn-style UI components

## Run locally

```bash
npm install
npm run dev
```

Run a production check with `npm run build` and lint with `npm run lint`.