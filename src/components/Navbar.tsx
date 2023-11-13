import "./Navbar.styles.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <Link to="/" className="site-title">
          Site name
        </Link>
        <ul>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
