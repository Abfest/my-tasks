# TaskFlow Sprint 1.5.12 — Month click-to-create reliability fix

- Month day cells now have explicit grid positions to avoid interference from spanning multi-day bars.
- Clicking blank space in a month cell opens Quick Create for that exact date.
- Each month cell includes a small **+** action with keyboard focus and descriptive label.
- Clicking the date number still navigates to Day view; clicking an existing entry still opens that entry.
- Existing day/week creation and saved task/calendar data are unchanged.
- This is a local testing build; no live deployment.

**Test:** Calendar > Month > click blank space on a date, then click the +. Check the hint uses the clicked date, create an event, verify it appears on that date. Repeat in dark mode.
