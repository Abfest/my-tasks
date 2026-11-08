# TaskFlow recovery — Sprint 1

## Baseline findings
- This is a static HTML/JavaScript app, not a Next.js project.
- `index.html` contains most of the UI and logic.
- Local tasks and calendar use browser localStorage.
- Firebase synchronization currently targets a fixed Firestore document `taskflow/franco`, without per-user isolation in this code. **Do not enable multi-user or Personal/Work separation on this storage model.** Review Firestore security rules before using sensitive data.
- The original Vercel rewrite pointed all paths to `/api/index`, but the ZIP contains `index.js` at the repository root instead. The rewrite has been changed to serve the static index for `/` and leave `/api/chat` alone.
- Firebase web configuration includes a public client API key (normal for Firebase web apps), not an admin secret. Security depends on Firestore rules and auth.

## Changes
1. Corrected Vercel root rewrite.
2. Added a **Backup** button for task/calendar and UI-preference localStorage keys; excludes OAuth/token keys. This does **not** back up Firestore cloud data.
3. Improved mobile header and navigation spacing.
4. Updated the app title.

## Testing
- JavaScript syntax validation: `node --check` on inline scripts.
- Vercel config JSON parsed.
- Static checks confirm the backup button and function exist.
- Browser and Firebase integration have **not** been tested; verify before deployment.

## Local run
Serve the folder over HTTP, e.g. `python3 -m http.server 8000` from the `my-tasks-main` directory, then visit `http://localhost:8000`. The AI endpoint `/api/chat` requires Vercel's serverless environment and an `ANTHROPIC_API_KEY` environment variable.

## Next sprint
1. Verify Firebase auth/security and prevent shared-document data leakage.
2. Test and repair task CRUD and dashboard consistency.
3. Improve week/month calendar layouts.
4. Add Personal/Work isolation only after data migration and authorization design.

No live data, repository, or deployment was changed.
