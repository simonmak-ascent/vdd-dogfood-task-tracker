# Task CRUD — Database Schema & API

> Impact Chain: V-001 → S-002 → T-003 → SP-004

Status: Draft | Version: 1.0 | Last updated: 2026-08-10

## Tactical Origin
Implements: `vdd/tactics.md` → A-001 + A-002

## Overview
Database schema for tasks and REST API for CRUD operations. This is the data foundation of the task tracker.

## Acceptance Criteria

### AC-1: Create Task [MUST]
Given a valid task title (1-200 chars)
When POST /api/tasks with { "title": "Buy groceries" }
Then a task is created with unique ID, status "pending", and timestamps. Returns 201.

### AC-2: List Tasks [MUST]
Given tasks exist
When GET /api/tasks
Then all tasks returned ordered by created_at DESC. Returns 200.

### AC-3: Update Task [MUST]
Given an existing task
When PATCH /api/tasks/:id with { "status": "completed" }
Then task status is updated. Returns 200.

### AC-4: Delete Task [MUST]
Given an existing task
When DELETE /api/tasks/:id
Then task is removed. Returns 204.

### AC-E1: Invalid Title [MUST]
Given an empty or >200 char title
When POST /api/tasks
Then returns 400 with "Title must be between 1 and 200 characters"

### AC-E2: Task Not Found [MUST]
Given a non-existent task ID
When PATCH or DELETE /api/tasks/:id
Then returns 404 with "Task not found"

## Boundaries
**Always do:** Validate inputs with Zod before processing
**Never do:** Expose database errors to the client

## Impact Verification
- AC-1, AC-2 enable I-001 (users create tasks)
- AC-3, AC-4 enable I-002 (users complete/remove tasks)
- AC-E1, AC-E2 ensure robustness (retention driver)

## S&T Assumptions (Specs → Plan)
**Necessity:** Plan defines component architecture.
**Achievability:** Simple CRUD — no complex logic.
**Sufficiency:** 6 ACs cover all task operations + errors.
**Warnings:** Keep schema minimal — resist adding fields not in spec.
