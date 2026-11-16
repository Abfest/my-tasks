# TaskFlow v1.5.22 — Consolidated Deployment Release

## What is included
This release is cumulative, using the approved Sprint 1.5.22 index.html as its source.

- Neutral TaskFlow branding, Task / Project classification and Advanced Planning setting
- Consolidated Calendar: Day, Week, Month, Agenda, Timeline
- MS Project-inspired Gantt task table, collapsible task inspector and project-focused workspace
- Timeline Today / previous / next navigation and zoom controls
- Timeline completion filters: Active Only (default), All and Completed
- Subtask Closed/done consistency, native checkbox and parent-project completion correction
- Existing task, calendar, backup, cloud/Firebase and other application logic retained in source

## Deployment: GitHub main (Abfest/my-tasks)
1. Make a backup/export of existing app data before deploying.
2. Keep existing repository files and settings; only replace the root index.html with the one in this ZIP.
3. Keep oauth-callback.html if already present. The copy here is provided for reference and can be added if missing.
4. Commit the change on main. Vercel should rebuild from the connected repository.
5. After deployment, confirm Timeline navigation, completion filter, subtask checkbox and parent completion, calendar entries and cloud sync.
6. Rollback by reverting the GitHub commit if needed.

## Verification and limits
- index.html and standalone TaskFlow_v1.5.22_index.html have matching SHA-256.
- Inline JavaScript syntax checks passed (Node.js).
- ZIP CRC/extraction integrity verified.
- Full browser workflows, Firebase synchronization, and the Vercel deployment are **not** verified by these static checks.
- No live GitHub or Vercel changes were made while building this package.
