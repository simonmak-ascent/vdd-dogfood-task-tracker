# Tactics

> Impact Chain: V-001 → S-002 → T-003

Status: Draft
Version: 1.0
Last updated: 2026-08-10

## Strategy Reference
Derived from: `vdd/strategy.md`

## Codebase Audit

### What Exists
| Asset | Location | Purpose | Quality |
|-------|----------|---------|---------|
| Empty repo | `/` | Fresh Next.js project | N/A |

### Gap Analysis
| Gap | Strategy Pillar | Impact |
|-----|----------------|--------|
| No database schema | P2 | No data layer |
| No task CRUD API | P2 | No way to create/manage tasks |
| No UI | P1 | Users can't interact |
| No deployment | P1 | Users can't access |

## Prioritized Action Items

| ID | Action Item | Priority | Strategy | Size |
|----|------------|----------|----------|------|
| A-001 | Database schema + migrations | MUST | P2 | S |
| A-002 | Task CRUD API endpoints | MUST | P2 | M |
| A-003 | Minimal task list UI (mobile-first) | MUST | P1 | M |
| A-004 | Task completion toggle | MUST | P1 | S |
| A-005 | Deploy to Vercel | SHOULD | P1 | S |

## Dependency Map
```
A-001 (Schema) → A-002 (API) → A-003 (UI) → A-004 (Toggle) → A-005 (Deploy)
```

## S&T Assumptions (Tactics → Specs)

**Necessity:** Specs needed for precise acceptance criteria.
**Achievability:** All action items are S/M size; no L items.
**Sufficiency:** 5 action items cover all gaps.
**Warnings:** Avoid scope creep — stick to 5 items.
