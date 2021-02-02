import React, { useState } from "react";
import { useEffect } from "react";

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }
}

const BookList = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    isbn: "",
  });
  const [allBooks, setAllBooks] = useState([]);
  const [alert, setAlert] = useState();

  const showAlert = (message, className) => {
    setAlert(
      <div className={`text-center alert alert-${className}`}>{message}</div>
    );
  };

  useEffect(() => {
    setTimeout(() => setAlert(), 5000);
  }, [alert]);

  useEffect(() => {
    const books = Store.getBooks();

    books.forEach((b) => setAllBooks((prev) => [...prev, b]));
  }, []);

  const submit = (event) => {
    event.preventDefault();
    if ([book.title, book.author, book.isbn].indexOf("") === -1) {
      setAllBooks((prev) => [...prev, book]);
      setBook({
        title: "",
        author: "",
        isbn: "",
      });
      Store.addBook(book);
      showAlert("Book Added", "success");
    } else {
      showAlert("Please fill in all fields", "danger");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const deleteBook = (event, id, isbn) => {
    event.preventDefault();
    setAllBooks(allBooks.filter((item, i) => i !== id));
    Store.removeBook(isbn);
    showAlert("Book Removed", "success");
  };

  return (
    <div className="BookList">
      <div className="container mt-4">
        <h1 className="display-4 text-center">
          <i className="fas fa-book-open text-primary"></i> My
          <span className="text-primary">Book</span>List
        </h1>
        {alert}
        <form
          style={alert ? {} : { marginTop: "74px" }}
          id="book-form"
          onSubmit={(e) => submit(e)}
        >
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              className="form-control"
              name="title"
              value={book.title}
              onChange={(e) => handleChange(e)}
            />
            <h3>{book.title}</h3>
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              className="form-control"
              name="author"
              value={book.author}
              onChange={(e) => handleChange(e)}
            />
            <h3>{book.author}</h3>
          </div>
          <div className="form-group">
            <label htmlFor="isbn">ISBN#</label>
            <input
              type="text"
              id="isbn"
              className="form-control"
              name="isbn"
              value={book.isbn}
              onChange={(e) => handleChange(e)}
            />
            <h3>{book.isbn}</h3>
          </div>
          <input
            type="submit"
            value="Add Book"
            className="btn btn-primary btn-block"
          />
        </form>
        <table className="table table-striped mt-5">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN#</th>
              <th></th>
            </tr>
          </thead>
          <tbody id="book-list">
            {allBooks.map((item, i) => (
              <Book
                title={item.title}
                author={item.author}
                isbn={item.isbn}
                id={i}
                deleteBook={deleteBook}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Book = (props) => {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.author}</td>
      <td>{props.isbn}</td>
      <td>
        <button
          className="btn btn-danger btn-sm delete"
          onClick={(e) => props.deleteBook(e, props.id, props.isbn)}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default BookList;
