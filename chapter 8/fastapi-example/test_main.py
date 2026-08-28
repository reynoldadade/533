from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_list_books_starts_empty():
    response = client.get("/books")
    assert response.status_code == 200
    assert response.json() == []


def test_create_and_list_book():
    book = {"id": 1, "title": "Refactoring", "author": "Martin Fowler"}
    response = client.post("/books", json=book)
    assert response.status_code == 201
    assert response.json() == book

    response = client.get("/books")
    assert response.json() == [book]


def test_create_duplicate_id_conflicts():
    book = {"id": 2, "title": "Clean Code", "author": "Robert Martin"}
    client.post("/books", json=book)
    response = client.post("/books", json=book)
    assert response.status_code == 409
