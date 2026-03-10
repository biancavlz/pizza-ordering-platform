import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <Link to="/">Pizza Ordering</Link>
      <p>User Name</p>
    </header>
  );
}

export default Header;
