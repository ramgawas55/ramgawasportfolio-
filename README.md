# Linux x Spider UX Portfolio

Production-ready personal portfolio inspired by Linux terminals and Spider-Man motion language. Built with Next.js App Router, Tailwind CSS, Framer Motion, and TypeScript. Includes an interactive terminal mode, dynamic project filtering, and a validated contact API route.

## Tech Stack

- Next.js App Router + React 19
- Tailwind CSS
- Framer Motion
- TypeScript
- Node.js API routes

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment Variables

Copy the example file and adjust values as needed:

```bash
cp .env.example .env.local
```

| Variable | Purpose |
| --- | --- |
| CONTACT_EMAIL | Contact API target recipient |

## Folder Structure

- src/app: App Router pages, API route, and layout
- src/components: Reusable UI and motion components
- src/data: Profile data used across pages and terminal mode
- src/types: Shared TypeScript types
- public: Static assets and downloadable resume

## Render Deployment

1. Create a new Web Service on Render.
2. Connect the GitHub repository.
3. Set Build Command: `npm install && npm run build`
4. Set Start Command: `npm run start`
5. Add Environment Variables: `CONTACT_EMAIL`
6. Choose Node version 20+ in the Render settings.

## Git Commands

```bash
git init
git add .
git commit -m "Initial portfolio build"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — production server
- `npm run lint` — linting
- `npm run typecheck` — TypeScript checks
