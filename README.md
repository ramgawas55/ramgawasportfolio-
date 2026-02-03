# Linux x DevOps Portfolio

A terminal-inspired portfolio with motion-led UI, a live contact form, and lightweight visitor tracking. Built to feel fast and personal, with a CLI-style terminal mode and a downloadable resume endpoint.

## Highlights

- Terminal-style navigation page
- Animated hero and section transitions
- Contact form with validation + Telegram alerts
- Visitor alerts for key pages
- Resume download route with tracking

## Stack

- Next.js App Router
- React 19
- Tailwind CSS
- Framer Motion
- TypeScript

## Local Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment Variables

```bash
cp .env.example .env.local
```

| Variable | Purpose |
| --- | --- |
| CONTACT_EMAIL | Contact API recipient |
| TELEGRAM_BOT_TOKEN | Telegram bot token for alerts |
| TELEGRAM_CHAT_ID | Telegram chat ID for alerts |

## Project Map

- src/app: routes, API handlers, layouts
- src/components: UI building blocks
- src/data: profile data and content
- src/types: shared TypeScript types
- public: static assets + resume

## Deployment (Render)

1. Create a new Web Service
2. Connect the GitHub repository
3. Build Command: `npm install && npm run build`
4. Start Command: `npm run start`
5. Set environment variables from the table above
6. Use Node 20+

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — production server
- `npm run lint` — linting
- `npm run typecheck` — TypeScript checks
