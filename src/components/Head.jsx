import "../css/header.css";
import { Link } from "react-router";

const Head = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">Logo</div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/todo">ToDo</Link>
          <Link to="/">Contact</Link>
        </nav>
      </header>
    </div>
  );
};

export default Head;
