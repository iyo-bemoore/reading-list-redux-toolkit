import { useState } from "react";
import { v4 as uuid } from "uuid";
import { addBook } from "../features/bookStore/bookSlice";
import { useDispatch } from "react-redux/es/exports";
const BookForm = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!author || !title) return;
    dispatch(addBook({ title, author, id: uuid() }));
    setAuthor("");
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="enter a title"
        />
        <input
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          type="text"
          placeholder="enter a author"
        />
        <input value="add book" type="submit" />
      </form>
    </div>
  );
};

export default BookForm;
