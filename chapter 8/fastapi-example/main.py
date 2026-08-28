# main.py --- minimal FastAPI service
# From "Backend Frameworks Fit the Same Mould" -- the example used to
# show the loop applied to a non-frontend, non-JavaScript framework.
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()


class Book(BaseModel):
    id: int
    title: str
    author: str


BOOKS: dict[int, Book] = {}


@app.get("/books")
def list_books() -> list[Book]:
    return list(BOOKS.values())


@app.post("/books", status_code=201)
def create_book(book: Book) -> Book:
    if book.id in BOOKS:
        raise HTTPException(409, "id already exists")
    BOOKS[book.id] = book
    return book
