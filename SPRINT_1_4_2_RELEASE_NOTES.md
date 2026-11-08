# Sprint 1.4.2 — Quick Create and Notification Visibility

## Implemented
- Add Task opens a compact form with Task Name, Category, Priority and Due Date.
- Replaced category chips with a dropdown populated from the existing category registry; Manage remains available.
- Advanced details (start date, owner, status, repeat, notes) and subtasks are collapsed on new tasks; edit mode expands details and expands subtasks when present.
- Existing form field IDs, saveTask(), task model and Firebase sync calls remain unchanged.
- Notification bell is now high-contrast in light and dark modes, larger and keyboard-focusable with accessible label. Badge remains attached.
- No database migration or deployment.

## Test checklist
1. Back up tasks.
2. Add a task with only name, category, priority and due date; confirm save and reload.
3. Expand Additional details, enter fields, save, reopen and verify.
4. Add/edit subtasks; confirm persistence.
5. Check notifications button in light/dark, zero and nonzero badge, dropdown and keyboard focus.
6. Test on narrow browser widths and with Firebase connected.

Static JS syntax and archive integrity verified; live browser and Firebase tests not yet completed.
