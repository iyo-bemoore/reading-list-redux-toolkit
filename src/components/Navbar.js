import { useSelector } from "react-redux";

const NavBar = () => {
  const booksCollectionAmmount = useSelector(
    (state) => state.books.books.length
  );
  return (
    <div className="navbar">
      <h1>Reading List </h1>
      <p> Currently you have {booksCollectionAmmount} item(s) to read </p>
    </div>
  );
};
export default NavBar;
