import React from "react";
import "./BookDetail.css";
import Book from "../Book";

export default function BookDetail({ book, allBooks = [], onClose }) {
  if (!book) return null;

  // ✅ Find similar books (same author or language)
  const similarBooks = allBooks.filter(
    (b) =>
      b.id !== book.id && // exclude current book
      (b.author === book.author || b.language === book.language)
  );

  return (
    <div className="book-detail-overlay">
      <div className="book-detail-header">
        <h3>Book Details</h3>
      </div>

      <div className="book-detail-content">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

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

      {/* ✅ Similar books section */}
      <div className="similar-books">
        <h3>Similar Books</h3>
        <div className="similar-books-list">
          {similarBooks.length > 0 ? (
            similarBooks.map((b) => (
              <div
                key={b.id}
                className="similar-book-card"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <img
                  src={
                    b.url || "https://via.placeholder.com/120x180?text=No+Image"
                  }
                  alt={b.title}
                  className="similar-book-img"
                />
                <p className="similar-book-title">{b.title}</p>
                <p className="similar-book-author">{b.author}</p>
              </div>
            ))
          ) : (
            <p>No similar books found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
