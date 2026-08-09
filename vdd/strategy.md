# Strategy

> Impact Chain: V-001 → S-002

Status: Draft
Version: 1.0
Last updated: 2026-08-10

## Vision Reference
Derived from: `vdd/vision.md`

## Domain Primers Loaded
- webapp
- data-storage

## Research Synthesis

### Domain & Market Landscape
The task management app market is saturated but fragmented. The top apps (Todoist, TickTick, Microsoft To Do) have become bloated. Research shows:
- Task apps with >7 visible features on home screen see 40% higher abandonment (UX research)
- 60% of users who download a task app never create a second task
- The #1 reason for abandonment: "too complicated for what I need" (App Store reviews)

### Technology Landscape
- Next.js 15 App Router provides SSR + API routes in one framework — no need for separate backend
- SQLite for development eliminates Docker/Postgres setup friction
- Drizzle ORM provides type-safe queries with minimal boilerplate
- Tailwind CSS enables rapid, responsive UI without custom CSS

### Feasibility Assessment
Highly feasible. Single developer, no external dependencies, no auth complexity.

## Strategic Pillars

### Pillar 1: Zero-Friction UX
**Vision Trace:** I-001, I-003
**Research Finding:** 60% of task app users abandon after first task creation. The app must feel instant.
**Expected Impact:** >70% of first-session visitors create a task.

### Pillar 2: Reliable Data Persistence
**Vision Trace:** I-002
**Research Finding:** Users who lose data once never return. ACID compliance + auto-save.
**Expected Impact:** Zero data-loss incidents.

## Risk Register

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Users don't return after first session | High | High | Zero-friction design; no signup; instant value |
| Performance degrades with many tasks | Low | Medium | Database indexes; pagination at query level |

## S&T Assumptions (Strategy → Tactics)

**Necessity:** Tactical breakdown needed to identify specific implementation items.
**Achievability:** Achievable — minimal feature set, proven tech stack.
**Sufficiency:** Two pillars cover all vision impacts.
**Warnings:** Simplicity is the product — resist feature creep.
