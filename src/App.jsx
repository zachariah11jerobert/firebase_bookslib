import { useState, useEffect } from "react";
import firebase from "firebase/app";

function App() {
  const db = firebase.firestore();
  const [book, setBook] = useState({
    title: "",
    pages: "",
    publishDate: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      const snapshot = await db.collection("books").get();
      const booksArray = [];
      snapshot.forEach((doc) => {
        booksArray.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setBooks(booksArray);
    })();
  }, []);

  const onChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(book);
    setLoading(true);
    try {
      const docRef = await db.collection("books").add({
        ...book,
        pages: parseInt(book.pages),
        publishDate: new Date(book.publishDate),
      });

      console.log(docRef.id);
      setBook({
        title: "",
        pages: "",
        publishDate: "",
      });
    } catch (e) {
      console.error("An error has occured: ", error);
      setError("An error occured while trying to save the book");
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1> Books library</h1>
      <h2>Add New Books</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="book-title">Title : </label>
          <input
            type="text"
            value={book.title}
            onChange={onChange}
            name="title"
            id="book-title"
          />
        </div>
        <div>
          <label htmlFor="book-pages">Number of pages:</label>
          <input
            type="number"
            value={book.pages}
            onChange={onChange}
            name="pages"
            id="book-pages"
          />
        </div>
        <div>
          <label htmlFor="book-publish-date">Date of publishing:</label>
          <input
            type="date"
            value={book.publishDate}
            onChange={onChange}
            name="publishDate"
            id="book-publish-date"
          />
        </div>
        <div>
          <button type="submit" disabled={loading}>
            {loading ? "Loading" : "Save"}
          </button>
        </div>
        {error && <p className="error">{error}</p>}
      </form>

      <div className="book-list">
        <h2>Book List</h2>
        {books.map((book) => (
          <div className="book-item">
            <h4>{book.title}</h4>
            <span>
              <strong>Pages: </strong>
              {book.pages}
            </span>{" "}
            <span>
              <strong>Published Date: </strong>
              {book.publishDate.toDate().toDateString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
