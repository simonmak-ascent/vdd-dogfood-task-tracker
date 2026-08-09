# Vision

> Impact Chain: V-001

Status: Approved
Version: 1.0
Last updated: 2026-08-10

## Vision Statement

A personal task tracker that helps people stay organized without complexity. Too many task apps are bloated with features nobody uses. This one does one thing well: manage a personal task list. Users can add tasks, check them off, and move on with their day. No accounts, no sharing, no notifications — just a clean, fast, private task list that lives in the browser.

## Impact Model

### Goal

Provide a zero-friction task management experience that users actually stick with daily.

### Actors

| Actor | Current State | Desired State | Benefit |
|-------|--------------|---------------|---------|
| Individual user | Uses paper/post-it notes or bloated apps they abandon | Uses one simple, fast task tracker daily | Less cognitive load, more tasks completed |
| Occasional user | Avoids task apps because setup is too complex | Opens the app and immediately starts adding tasks | Zero onboarding friction |

### Impacts

| Impact ID | Description | Actor | Measurement |
|-----------|-------------|-------|-------------|
| I-001 | Users manage tasks digitally instead of on paper | Individual user | % of users adding ≥1 task within first session |
| I-002 | Users complete tasks they create | Individual user | Task completion rate (completed/total) |
| I-003 | Users return to the app | All | Day-7 and day-30 retention |

## Stakeholder Map

| Role | Interest | Influence | Engagement Strategy |
|------|----------|-----------|-------------------|
| Individual user | Simple, fast task management | High | No signup required; instant value |
| Developer (dogfood audience) | See VDD methodology demonstrated | Medium | All VDD artifacts committed to repo |

## Success Metrics

### Lagging Indicators

| Metric | Target | Measurement |
|--------|--------|-------------|
| Day-30 retention | >30% | Analytics event on page load |
| Task completion rate | >60% | Completed tasks / total tasks |

### Leading Indicators

| Metric | Target | Measurement |
|--------|--------|-------------|
| First-session task creation | >70% | Analytics event on first task creation |
| App load time (LCP) | <1.5s | Lighthouse / Web Vitals |
| Zero errors on happy path | 100% | Test coverage of all MUST ACs |

## Constraints & Boundaries

- No user accounts — public, local-first by design
- Must work on mobile and desktop
- Must load in under 1.5 seconds on 4G
- No external API dependencies (self-contained)

## Target Domains

- [x] WebApp
- [x] Data Storage
