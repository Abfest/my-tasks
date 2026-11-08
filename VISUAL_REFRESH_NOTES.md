# TaskFlow Sprint 1 Visual Refresh
This build implements a mockup-inspired navy sidebar, light header, responsive dashboard, Today’s Focus (live tasks), Upcoming Agenda (available calendar entries), and Quick Actions. Existing tabs, task editing, Firebase integration, AI and backup remain in place.

IMPORTANT: This is a local prototype. Personal/Work data isolation, new Finance/CRM modules, and full mockup parity are NOT implemented. No production deployment or database migration performed.

Testing: JavaScript syntax checked. Test in a browser with your real data after making a backup. Existing application uses remote Firebase and Google integrations; those cannot be fully tested offline.

## v2 corrections
- First-time v2 launch defaults to light theme, while retaining the user's subsequent theme choice.
- Home is the default opening screen, even when the previous view was Archive.
- Sidebar styles override legacy dark-mode selectors.
- Legacy refreshActive label checks updated for Home and Tasks.
- No Firestore migration or deployment.
