import React, { useState, useEffect } from "react";
import "./BookDetail.css";
import Book from "../Book";

export default function BookDetail({ book, onClose }) {
  const [similarBooks, setSimilarBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!book) return;

    const query = encodeURIComponent(book.author || book.title || "book");
    const apiUrl = `https://api.itbook.store/1.0/search/${query}`;

    setLoading(true);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.books) {
          // filter out the current book by title
          const filtered = data.books.filter(
            (b) => b.title.toLowerCase() !== (book.title || "").toLowerCase()
          );
          setSimilarBooks(filtered);
        }
      })
      .catch((err) => console.error("Error fetching similar books:", err))
      .finally(() => setLoading(false));
  }, [book]);

  if (!book) return null;

  return (
    <div className="book-detail-overlay">
      <div className="book-detail-header">
        <h3>Book Details</h3>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
      </div>

      <div className="book-detail-content">
        <div className="book-detail-left">
          <img
            src={
              book.url || "https://via.placeholder.com/200x300?text=No+Image"
            }
            alt={book.title}
            className="book-detail-img"
          />
        </div>

        <div className="book-detail-right">
          <h2>{book.title}</h2>
          <p>
            <strong>Author:</strong> {book.author || "Unknown"}
          </p>
          <p>
            <strong>Publisher:</strong> {book.publisher || "N/A"}
          </p>
          <p>
            <strong>Published:</strong> {book.publicationYear || "N/A"}
          </p>
          <p>
            <strong>Language:</strong> {book.language || "N/A"}
          </p>
          <p>
            <strong>Pages:</strong> {book.pages || "N/A"}
          </p>
          {book.status === "On Loan" && (
            <div className="status-tag">On Loan</div>
          )}
        </div>
      </div>

      <div className="similar-books">
        <h3>Similar Books</h3>

        {loading && <p>Loading...</p>}

        {!loading && similarBooks.length === 0 && (
          <p>No similar books found.</p>
        )}

        <div className="similar-books-list">
          {similarBooks.map((b) => (
            <div
              key={b.isbn13}
              className="similar-book-card"
              onClick={() => window.open(b.url, "_blank")} // open book details in new tab
            >
              <img
                src={
                  b.image || "https://via.placeholder.com/120x180?text=No+Image"
                }
                alt={b.title}
                className="similar-book-img"
              />
              <p className="similar-book-title">{b.title}</p>
              <p className="similar-book-author">{b.subtitle || b.authors}</p>
              <p className="similar-book-price">{b.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
