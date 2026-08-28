# Chapter 8 Mini-Project — Library System

The chapter's closing mini-project, "Mini-Project: Prompt a Library System,"
built out as a real running app instead of the four separate code blocks
the chapter shows. Vue 3, Pinia, Vue Router.

## Running it

```bash
npm install
npm run dev
```

## What's from the chapter, and what's new

The domain model (`src/domain/schema.js`), the store's read side and its
`lend`/`returnLoan` actions (`src/stores/library.js`), the `Books.vue`
listing table, and `Overdue.vue` with the `useClock` fix are all from the
chapter text, close to verbatim (see the comment at the top of each file
for exactly which section).

The chapter names four screens — "a book list, a member list, a 'lend'
dialog, and an overdue report" — and shows full code for only the first and
last. `Members.vue` and `Lend.vue` are new, built to complete the other two,
along with `addBook` and `addMember` on the store (the chapter's own store
code only ever initializes `books` and `members` as empty arrays; nothing
in the text populates or grows them, even though "register a member" and
"register a book" are named as part of the minimum feature set).

One more small departure: the store seeds a handful of starter books and
members instead of starting from `[]`, purely so the app isn't empty on
first load. The lending, returning, and overdue logic are all exactly as
the chapter describes.

## Verified

Build passes (`npm run build`) and a full click-through (register a book,
register a member, lend a book, confirm it shows up under "Currently on
loan," return it, confirm the Overdue page loads cleanly) was run against
a preview server with a headless browser before this was committed.
