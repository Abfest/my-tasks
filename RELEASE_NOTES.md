# TaskFlow Sprint 1.5.22 — Subtask Completion Consistency

- Fix subtask completion when `status=Closed` but `done=false` in existing records.
- Show a native, accessible subtask checkbox in the register and keep it clickable.
- Save a subtask's Closed status and done flag consistently, including when editing from its detail modal.
- Parent completion checks now recognise Closed subtasks, avoiding incorrect "still open" warnings.
- Full task form saves now reconcile parent `status` and `done`, and block closing when subtasks remain open.
- Preserve project classification and Advanced Planning fields when normalising task data loaded from localStorage/Firebase.
- Existing data is retained; this release contains no data-deletion or migration script.

Test: change TEST subtask to Closed and click Save Changes; verify its checkbox is checked, and complete the Test parent. Reopen the subtask and verify the status remains Closed.

Static checks: JavaScript syntax and ZIP extraction. Browser/Firebase interactions not automated.
