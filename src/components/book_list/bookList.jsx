import React, { useState } from "react";

const BookList = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    isbn: "",
  });
  const [allBooks, setAllBooks] = useState([]);

  const submit = (event) => {
    event.preventDefault();
    if ([book.title, book.author, book.isbn].indexOf("") === -1) {
      setAllBooks((prev) => [...prev, book]);
      setBook({
        title: "",
        author: "",
        isbn: "",
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const deleteBook = (event, id) => {
    event.preventDefault();
    setAllBooks(allBooks.filter((item, i) => i !== id));
  };

  return (
    <div className="BookList">
      <div className="container mt-4">
        <h1 className="display-4 text-center">
          <i className="fas fa-book-open text-primary"></i> My
          <span className="text-primary">Book</span>List
        </h1>
        <form id="book-form" onSubmit={(e) => submit(e)}>
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
        <a
          href="#"
          className="btn btn-danger btn-sm delete"
          onClick={(e) => props.deleteBook(e, props.id)}
        >
          X
        </a>
      </td>
    </tr>
  );
};

export default BookList;
