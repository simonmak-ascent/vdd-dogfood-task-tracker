# Technical Plan: Task CRUD

> Impact Chain: V-001 → S-002 → T-003 → SP-004 → PL-005

## Spec Reference
Implements: `vdd/specs/task-crud/spec.md`

## Architecture Overview
Single Next.js app. SQLite database via Drizzle. API routes in `src/app/api/tasks/`. Server components for UI.

## Component Breakdown

### Database Schema
- **Location:** `src/db/schema.ts`
- **AC Coverage:** AC-1, AC-2, AC-3, AC-4

### Task API Routes
- **Location:** `src/app/api/tasks/route.ts`, `src/app/api/tasks/[id]/route.ts`
- **AC Coverage:** AC-1, AC-2, AC-3, AC-4, AC-E1, AC-E2

## AC Coverage Map
| AC | Component | Contract |
|----|-----------|----------|
| AC-1 | Task API (POST) | POST /api/tasks |
| AC-2 | Task API (GET) | GET /api/tasks |
| AC-3 | Task API (PATCH) | PATCH /api/tasks/:id |
| AC-4 | Task API (DELETE) | DELETE /api/tasks/:id |
| AC-E1 | Task API (POST validation) | POST /api/tasks → 400 |
| AC-E2 | Task API (404) | PATCH/DELETE /api/tasks/:id → 404 |

## Risks
| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| SQLite dev/prod mismatch | Low | Medium | Use Drizzle adapter; test with PostgreSQL before deploy |
