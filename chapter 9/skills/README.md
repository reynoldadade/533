# Chapter 9 Skills

Three Claude Skills built in "Mini-Project: Turn Your Prompt Library Into Skills," converting pieces of chapter 8's prompt library (`../../chapter 8/prompt-library/`) into skills instead of markdown files you paste by hand.

| Skill | Converted from | What changed in the conversion |
|---|---|---|
| `concept-explainer/` | `prompts/concept-explainer.md` | Removed the fixed cap of three edge cases (list as many as are real, most likely first); softened "do not write production code" into an explanation of why the example stays minimal, with a pointer to ask for the production version separately. |
| `code-review/` | `prompts/code-review.md` | BLOCKING items are now explicitly ranked most to least severe with a concrete failure scenario each, not just a description of the pattern; added a note for when this skill runs unattended in CI, so its output is read as a first pass, not a final answer. |
| `learning-loop/` | The chapter 8 loop itself (Probe, Build, Reflect, Catalogue) | Added a fifth step, Review, between Build and Reflect; Catalogue now checks whether a lesson belongs in a skill's instructions or a CLAUDE.md instead of defaulting to a note file. |

## Installing one

Drop a skill's folder into your project's `.claude/skills/` directory (or your tool's equivalent skills location). The `description` field in its `SKILL.md` frontmatter is what gets matched against what you ask for. You do not need to remember the skill's name or file path: ask for what you want in plain language, and if the description is written well, the assistant finds the right skill on its own.
