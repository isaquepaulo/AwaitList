import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";



const NavigationBar = () => {

  const [value, setValue] = useState("");
  const navigate = useNavigate();


  const handleChangeValue = (e: any) => {
    setValue(e.target.value);
    e.target.addEventListener("keypress", (e: any) => {
      if (e?.keyCode === 13) {
        document.getElementById("search")!.click();
        console.log(e)
      }
    });
  };

  const handleSubmit = () => {
    if (value !== "") {
      navigate(`/search/${value}/page/1`);
      setValue("");
    }
  };

  return (
    <Navbar bg="info" expand="lg" className="mb-5">
      <Container>
        <Link to="/" className="div-brand-navigation">
          <Navbar.Brand ><h3>
            a<span className="class-spam">W</span>ait
          </h3></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <div className="div-input-search input-group ">
              <input type="search" className="form-control" placeholder="search manga" aria-label="search manga" aria-describedby="button-addon2" onChange={(e) => handleChangeValue(e)}
                value={value} />
              <button className="btn btn-outline-primary" type="submit" id="search" name="search" onClick={handleSubmit}>Button</button>
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