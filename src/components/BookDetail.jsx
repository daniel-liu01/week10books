import React from "react";
import "./BookDetail.css";

export default function BookDetail({ book, onClose }) {
  if (!book) return null;

  return (
    <div className="book-detail-overlay">
      <div>
        <h3>Books</h3>
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
      <div className="similar-books">
        <h3>Similar Books</h3>
      </div>
    </div>
  );
}
