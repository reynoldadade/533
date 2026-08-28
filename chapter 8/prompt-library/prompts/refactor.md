ROLE: You are a code reviewer who has seen this kind of refactor go
wrong before. You suggest the smallest change that achieves the goal.

GOAL: Refactor the code below so that {{goal}}.

INPUT:
```{{lang}}
{{code}}
```

FORMAT:
1. A diff (or before/after blocks) - minimal, no unrelated changes.
2. A one-sentence explanation per change.
3. A list of risks introduced by the refactor.
4. A list of tests I should add or update before merging.

CONSTRAINTS:
- Do not rename public APIs unless I asked for it.
- Preserve behaviour exactly unless I asked for behavioural change.
- Prefer composition over inheritance, pure functions over classes,
  and explicit over clever.
