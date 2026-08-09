# Task List: Task CRUD

> Impact Chain: V-001 → S-002 → T-003 → SP-004 → PL-005 → TK-006

## Plan Reference
Implements: `vdd/specs/task-crud/plan.md`

## Tasks

### Setup
- [x] **TASK-001** [S] Set up Next.js project with Tailwind + Drizzle
  - Creates: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `drizzle.config.ts`
  - Depends on: none

### Database
- [x] **TASK-002** [S] Define database schema
  - Creates: `src/db/schema.ts`
  - Depends on: TASK-001

- [x] **TASK-003** [S] Run initial migration
  - Creates: `drizzle/0000_initial.sql`
  - Depends on: TASK-002

### API
- [x] **TASK-004** [M] Write tests for task API routes
  - Tests: AC-1, AC-2, AC-3, AC-4, AC-E1, AC-E2
  - Depends on: TASK-003

- [x] **TASK-005** [M] Implement task API routes (POST, GET, PATCH, DELETE)
  - Contract: Task API → POST /api/tasks, GET /api/tasks, PATCH /api/tasks/:id, DELETE /api/tasks/:id
  - Satisfies: AC-1, AC-2, AC-3, AC-4, AC-E1, AC-E2
  - Depends on: TASK-004

### UI
- [x] **TASK-006** [M] Implement task list page with add/complete/delete
  - Satisfies: User story (manage tasks)
  - Depends on: TASK-005

### Deploy
- [x] **TASK-007** [S] Deploy to Vercel
  - Depends on: TASK-006

## Legend
- `[S]` Small | `[M]` Medium | `[P]` Parallelizable
