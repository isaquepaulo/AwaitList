import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const NavigationBar = () => {
  return (
    <Navbar bg="info" expand="lg">
      <Container>
        <Link to="/" className="div-brand-navigation">
          <Navbar.Brand ><h3>
            a<span className="class-spam">W</span>ait
          </h3></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>

            <div className="div-input-search ">
              <input type="email" className="form-control" />
            </div>


            <div className="d-flex justify-content-around align-items-center">


              <Dropdown>
                <Dropdown.Toggle className="div-dropdown-navigation-text" variant="success">Descubra Mangás</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item className="div-dropdown-navigation-text" href="/search">
                    Top Mangás
                  </Dropdown.Item>

                  <Dropdown.Item className="div-dropdown-navigation-text" href="/genrePage">
                    Generos
                  </Dropdown.Item>


                  <Dropdown.Item className="div-dropdown-navigation-text">Logout</Dropdown.Item>

                </Dropdown.Menu>

              </Dropdown>

              <div className="div-name-user">
                Bem Vindo <span className="span-name-user">Isaque</span>
              </div>

              <div>
                <button className="btn btn-mode-dark mr-2" type="button">
                  <FontAwesomeIcon icon={faMoon} />
                </button>
                <button className="btn btn-exit" type="button">
                  <FontAwesomeIcon icon={faArrowRightToBracket} />
                </button>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;