# Chapter 8 — Beyond a Single Framework

Every piece of code from chapter 8, moved out of the Word document and into
real, runnable files. The chapter builds its examples one at a time across a
lot of ground — a loop framework, prompt templates, a DataTable, a
reactivity bug, a code review, a five-framework comparison, a FastAPI
service, and a closing mini-project — so rather than one folder, this is
five, each README-ed on its own.

| Folder | What it is |
|---|---|
| `prompt-library/` | The five reusable prompt templates plus the loader script from "Prompt Template Creation." |
| `vue-snippets/` | Every other Vue 3 worked example: the loop's CartTotal, the DataTable build, the reactivity bug, the debounced-ref code review, the Pinia cart walkthrough. Buildable and test-covered. |
| `library-system/` | The chapter's closing mini-project, built out as a real running app (see that folder's README for what's from the text and what's new). |
| `cross-framework-counter/` | The five-framework counter comparison from "Applying the Model Across Frameworks" — reference files, not a build. |
| `fastapi-example/` | The FastAPI books service from "Backend Frameworks Fit the Same Mould," with a test suite the chapter didn't include. |

Every buildable project here (`prompt-library`, `vue-snippets`,
`library-system`, `fastapi-example`) was actually installed, built, and
tested before being committed — not just written and assumed correct. See
each folder's own README for what was verified and how.
