# Eduserve Unofficial

Vercel-ready layout with a Vite + React frontend and serverless backend functions.

## Structure

```
frontend/      Vite + React + Tailwind app
  src/
  public/
  tsconfig*.json
  vite.config.ts
api/           Serverless functions (Node 20 by default)
vercel.json    Vercel build/output config
```

## Commands

Run all commands from the repo root (they are forwarded to the frontend workspace):

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run preview`

## Deployment notes

- `vercel.json` sets `frontend/dist` as the static output and pins API runtimes to Node 20.
- Place backend endpoints under `api/`; `api/health.ts` is a minimal health check example.
- Configure the project root as this repo when importing into Vercel; no extra settings needed beyond the provided commands.
