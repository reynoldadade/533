# Chapter 7 Mini-Project Exercise — RecipeBox

This is a separate mini-project for the "Mini-Project Exercise: Architecture
and Scalability Audit" at the end of chapter 7. It's a small Vue 3 app, not
ShopVue: the chapter already walks through ShopVue's own audit and refactor
in the body text (see `../ecommerce-app-legacy` and
`../ecommerce-app-refactored`), so working through the same file a second
time here wouldn't give you much practice. RecipeBox is unaudited and
untouched by this chapter, built the way a working app gets built when
nobody's yet stopped to ask the architecture questions this chapter covers.

It's a recipe browser: a searchable, filterable grid of recipes, and a
Favorites page. It runs and works. Whether it's built well is exactly what
the exercise below asks you to find out.

## Running it

```bash
npm install
npm run dev
```

## The exercise

This follows the same four steps the chapter lays out.

### Step 1 — Provide the Project Structure

Share this project's folder structure and key files with an AI assistant.
`src/pages/RecipePage.vue`, `src/pages/FavoritesPage.vue`,
`src/components/NavBar.vue`, and `src/components/HomePageRecipeCard.vue`
are the ones worth including in full; `src/data/recipes.js` is just seed
data and can be summarized instead of pasted in full.

### Step 2 — Request an Architectural Review

Use the chapter's own review prompt:

```
Act as a senior frontend engineer.

Review this Vue 3 project and identify:

- scaling risks
- performance bottlenecks
- maintainability concerns
- state management issues
- component boundary problems

Provide detailed recommendations for improvement.
```

### Step 3 — Evaluate the Feedback

Go through what the AI comes back with and decide, for each point: is this
actually a problem in this project, is it worth fixing given how small the
app currently is, and does the suggested fix match a pattern from this
chapter (extracting a composable, splitting a component, centralizing
state) or is it something else entirely. Not every suggestion an AI makes
will be worth acting on, that's the point of this step.

### Step 4 — Refactor the Project

Pick the recommendations you judged most valuable and implement them.
Chapter 7's own refactor of ShopVue is a useful reference for the kind of
moves available to you: extracting composables for logic that's currently
inline in a component, splitting an overloaded component into smaller
focused ones, reorganizing folders by feature, and giving components names
that describe what they do rather than where they're currently used.

There's no answer key checked in here on purpose. If you want a sanity
check on your own audit or refactor afterward, that's a good follow-up
prompt for the same AI assistant: ask it to compare your before and after
versions and explain what actually improved.
