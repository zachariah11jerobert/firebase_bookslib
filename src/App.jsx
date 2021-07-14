import { useState } from "react";

function App() {
  const [book, setBook] = useState({
    title: "",
    pages: "",
    publishDate: "",
  });

  const onTitleChange = (e) => {
    setBook({
      ...book,
      title: e.target.value,
    });
  };

  const onPagesChange = (e) => {
    setBook({
      ...book,
      pages: e.target.value,
    });
  };

  const onPublishDateChange = (e) => {
    setBook({
      ...book,
      publishDate: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(book);
  };

  return (
    <div className="App">
      <h1> Books library</h1>

      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="book-title">Title : </label>
          <input
            type="text"
            value={book.title}
            onChange={onTitleChange}
            name="title"
            id="book-title"
          />
        </div>
        <div>
          <label htmlFor="book-pages">Number of pages:</label>
          <input
            type="number"
            value={book.pages}
            onChange={onPagesChange}
            name="pages"
            id="book-pages"
          />
        </div>
        <div>
          <label htmlFor="book-publish-date">Date of publishing:</label>
          <input
            type="date"
            value={book.publishDate}
            onChange={onPublishDateChange}
            name="publish-date"
            id="book-publish-date"
          />
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}

export default App;
