# Chapter 8 — FastAPI Example

From "Backend Frameworks Fit the Same Mould," under "Applying the Model
Across Frameworks." A minimal FastAPI books service, used to show the
Probe/Build/Reflect/Catalogue loop applied outside the frontend, outside
JavaScript entirely.

## Running it

```bash
pip install -r requirements.txt
uvicorn main:app --reload
```

Then `POST /books` with a JSON body of `{id, title, author}`, and `GET
/books` to list what's been added.

## Verified

`test_main.py` (not in the chapter text — added so this isn't just code
that looks plausible) covers the three behaviors the endpoints actually
have: an empty list on startup, a successful create-then-list round trip,
and the 409 conflict on a duplicate id. Run it with `pytest`. Also
confirmed by hand against a live `uvicorn` server with real HTTP requests,
not just the in-process test client.
