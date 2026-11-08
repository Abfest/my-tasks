# TaskFlow Sprint 1.1 – Usability Refresh

## Changes
- Resolved overdue warning overlap with fixed sidebar.
- Added four summary cards (total tasks, overdue, due this week, active task groups).
- Ranked Today’s Focus by overdue/due date, pin, and priority; completion checkbox wired to existing toggleDone.
- Upcoming Agenda uses upcoming dated events and supports Google Calendar start objects.
- Suppressed automatic archive prompt on the Home screen (Archive tab remains).
- Light styling refinements for Tasks and Calendar.
- Preserved existing task, schedule, calendar, AI, archive, and backup logic.

## Scope caveats
- Active project groups are task records containing subtasks; not a standalone Projects module.
- This is an incremental improvement, not exact parity with the design image.
- No new Personal/Work isolation or Finance/CRM implementation.
- Browser, Firebase and Google Calendar end-to-end tests still required.

## Testing
1. Extract ZIP, run locally and confirm Home renders.
2. Export a backup before editing any data.
3. Check task counts, overdue list and task completion.
4. Open Tasks, Weekly Calendar, Monthly Calendar and Archive.
5. Check Google Calendar and Firebase only in a safe test environment.
