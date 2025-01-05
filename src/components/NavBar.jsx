import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavBar = ({ isOpen }) => {
  return (
    <nav
      style={{
        marginLeft: isOpen ? "0" : "-210px",
        transitionDuration: "800ms",
      }}
    >
      <div className="p-4 pt-5">
        <ul className="list-unstyled components mb-5">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Goals/Today">
              Today
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              About
            </Link>
          </li>
        </ul>
        <div className="footer">
          <p>
            Hello
          </p>
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default NavBar;
