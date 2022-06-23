import { removeBook } from "../features/bookStore/bookSlice";
import { useDispatch } from "react-redux";

const BookDetails = ({ book }) => {
  const dispatch = useDispatch();
  const deleteBook = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <li onClick={() => deleteBook(book.id)}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
