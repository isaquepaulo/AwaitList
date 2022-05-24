import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav-main">
      <div className="container">
        <a className="navbar-brand mr-5" href="#">
          <h3>
            a<span className="class-spam">W</span>ait
          </h3>
        </a>
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
            <li className=" dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Descubra mais
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Procurar Manga
                </a>
                <a className="dropdown-item" href="#">
                  Top Mangas
                </a>
                <a className="dropdown-item" href="#">
                  Recomendações
                </a>
                <a className="dropdown-item" href="#">
                  Reviews
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link ">
                Bem Vindo <span className="">Isaque</span>
              </a>
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
