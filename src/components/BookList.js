import BookDetails from "./BookDetails";
import { books } from "../features/bookStore/bookSlice";
import { useSelector } from "react-redux";
const BookList = () => {
  const booksCount = useSelector(books);

  return booksCount && booksCount.length ? (
    <div className="book-list">
      <ul>
        {booksCount.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No Books to read at this moment.</div>
  );
};

export default BookList;
