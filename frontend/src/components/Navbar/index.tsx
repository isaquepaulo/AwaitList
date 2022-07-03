import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav-main">
      <div className="container">
        <Link to="/" className="navbar-brand mr-5">
          <h3>
            a<span className="class-spam">W</span>ait
          </h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <input
            className="form-control mr-sm-2 w-50"
            type="search"
            placeholder="Procure por Manga ou Autor"
            aria-label="Search"
          />
          <ul className="navbar-nav mr-auto">
            <Dropdown>
              <Dropdown.Toggle variant="success">Open Menu</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/search">Top Mangas</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#">Settings</Dropdown.Item>
                <Dropdown.Item href="#">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <li className="nav-item">
              Bem Vindo <span className="">Isaque</span>
            </li>
          </ul>
          <div className="Button-nav">
            <button className="btn btn-daark mr-2" type="button">
              <FontAwesomeIcon icon={faMoon} />
            </button>
            <button className="btn btn-exit" type="button">
              <FontAwesomeIcon icon={faArrowRightToBracket} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
