# Project Constitution

Version: 1.0.0
Last updated: 2026-08-10

## Architecture Principles
- API-first: task CRUD via REST before UI
- Mobile-first responsive design
- Zero dependencies beyond framework defaults
- All state in database; no client-side cache

## Technology Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Language | TypeScript 5.x | Strict mode |
| Runtime | Node.js 22 LTS | |
| Framework | Next.js 15+ (App Router) | |
| Styling | Tailwind CSS v4 | |
| Database | SQLite (dev) / PostgreSQL (prod) | Drizzle ORM |
| Testing | Vitest + Playwright | |
| Deployment | Vercel | |

## Security Constraints
- Input validation: all inputs validated with Zod
- No authentication required (public task list — single-user by design)
- Rate limiting: 100 req/min per IP on task endpoints

## Naming Conventions
- Files: kebab-case
- Functions: camelCase
- Types: PascalCase
- DB columns: snake_case

## Banned Patterns
- No `any` type
- No `console.log` in production
- No direct DOM manipulation
- No client-side data fetching without error/loading states

## Domain Primitives
- webapp
- data-storage
