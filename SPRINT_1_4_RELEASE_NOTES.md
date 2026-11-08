# TaskFlow Sprint 1.4 — Productivity Upgrade

Based on Sprint 1.3.1. No data migration or production deployment.

## Delivered
- Compact task filter toolbar, retaining the existing task type, category, status, owner, month, and search filters.
- Existing task details popup converted to a right-hand drawer; existing Edit Task and subtask controls retained.
- Task title display improvements and subtask completion percentages, without changing stored titles.
- Human-readable due dates (Today, Tomorrow, Yesterday, X days overdue, In X days).
- Collapsible overdue alert with a restore button; collapsed preference stored only in browser localStorage.
- Selection mode with independent selection checkboxes and bulk Complete, Priority, Category, and Archive Completed actions.
- Sort by pinned/default, due date, priority, status, or title.
- Coordinated light/dark theme styles for new controls.

## Bulk action safeguards
- Bulk completion refuses tasks with incomplete subtasks.
- Bulk operations request confirmation before modifying data.
- Archive only accepts completed tasks and reuses the existing monthly Archive format and restore feature.
- Changes use the existing save() function (local storage and existing Firebase synchronization).

## Known limitations / important tests
- Browser interaction and Firebase integration could not be tested in this execution environment; run the manual checklist below.
- No database schema changes were made. The app still uses the original shared Firebase document model; Personal/Work isolation is not implemented.
- The app was not deployed to Vercel.
- Local `index.html` may have restricted integration behaviour in some browsers; use a local HTTP server if needed.

## Manual acceptance checklist
1. Back up data using the existing Backup button before any bulk operation.
2. Open Tasks; confirm filters and sorting operate in both themes.
3. Expand a project; confirm progress and existing subtasks remain intact.
4. Click a task title; confirm right-side details drawer opens, can be closed, and Edit works.
5. Test selecting multiple tasks; ensure selecting is distinct from marking tasks complete.
6. Test changing priority/category and reloading to verify persistence.
7. Test bulk completion on a task with open subtasks: it must refuse the action.
8. Test archiving a completed task and restoring it from Archive.
9. Collapse and restore the overdue alert; verify no tasks are changed.
10. Confirm original Calendar, Planner, AI and other navigation still work.
