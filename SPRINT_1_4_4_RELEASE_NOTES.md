# TaskFlow Sprint 1.4.4 — Reliability & Navigation

Based on Sprint 1.4.3, with no intentional changes to existing task or calendar records.

## Changes
- Notification click now marks read, closes dropdown, switches to Tasks, and opens the linked task detail panel using its task ID.
- Missing/deleted task notifications show an explanatory warning.
- Header displays Firebase status: pending, cloud saved, connected, or offline/failure. The status distinguishes local persistence from cloud success.
- Force cloud refresh now says "requested" rather than incorrectly declaring completion before the snapshot arrives.
- Notification title and description strings are HTML-escaped.

## Important limitations
- Firebase cloud connection, writes and multi-device conflict behavior need browser testing with your account. The fixed Firestore document path and unauthenticated architecture in this legacy app need security review before public deployment.
- Local backup download works independently of Firebase. An internal local-restore prototype was added but is **not exposed in the UI** pending cloud-safe restoration design.
- Google Calendar sync is a separate feature from Firebase sync; it has not been verified in this patch.

## Suggested smoke test
1. Open index.html and ensure existing tasks are present.
2. Click a notification associated with an existing task: expect Tasks tab and the correct task detail panel.
3. Click a notification whose task was deleted: expect a warning, not a broken panel.
4. Create a test task and observe header cloud status; disconnect internet and repeat.
5. Download backup and confirm valid JSON.
6. Test the cloud refresh on a second browser only after preserving both local backups.
