import "./styles.css";
import MainImage from "assets/imgs/boruto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faX } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-regular-svg-icons";
import { Manga } from "types/manga";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


type Props = {
  manga: Manga[];
};

const CardManga = ({ manga }: Props) => {
  const texto = JSON.stringify(manga);
  const Manga = JSON.parse(texto);
  return (
    <>
      <div
        className="card card-style"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        <div className="row no-gutters">
          <div className="col-5 col-sm-4 col-md-4 py-3 px-2 d-flex ">
            <img
              className="img-fluid card-img mb-2"
              src={Manga.images.jpg.image_url}
              alt="..."
            />
          </div>
          <div className="col-7 col-sm-8 col-md-8">
            <div className="card-body">
              <h5 className="card-title">{Manga.title}</h5>
              <small className="text-muted">Autor: Masashi Kishimoto</small>
              <br />
              <FontAwesomeIcon icon={faStar} className="estrela" />
              <FontAwesomeIcon icon={faStar} className="estrela" />
              <FontAwesomeIcon icon={faStar} className="estrela" />
              <FontAwesomeIcon icon={faStar} className="estrela" />
              <FontAwesomeIcon icon={faStarHalfAlt} className="estrela" />

              <p className="card-text">
                <span className="status">Status: Lendo</span>
                <br />
                <span className="cap">Cap 20/91</span> <br />{" "}
                <small className="text-muted">
                  Ultima vez visto 23/04/2022
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <button type="button" className=" btn-close" data-dismiss="modal" aria-label="Close">
          <i className="fa-solid fa-x fa-xs"></i>
        </button>
        <div className="modal-dialog modal-lg ">
          <div className="modal-content mt-5">
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-6 mb-2">
                    <img className="img-fluid card-img" src="../img/boruto.jpg" alt="..." />
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="conteudo-modal">
                      <h2>Boruto</h2>
                      <h6 className="text-muted"> Autor: Masashi Kishimoto</h6>
                      <h5 className="mt-3">Informações:</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                      <br />
                      <div className="d-flex justify-content-between">
                        <h5>Ultima atualização:</h5>
                        <p>29/04/2022 </p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h5>Ano de lançamento:</h5>
                        <p>01/12/2018 </p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h5>Avaliação:</h5>
                        <p><i className="fa-solid fa-star" aria-hidden="true"></i><i className="fa-solid fa-star" aria-hidden="true"></i><i className="fa-solid fa-star" aria-hidden="true"></i><i className="fa-solid fa-star" aria-hidden="true"></i><i className="fa-regular fa-star" aria-hidden="true"></i> </p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h5>Status:</h5>
                        <li className="dropdown">
                          <a className="nav-link nav-status dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                            Escolher status
                          </a>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">lendo</a>
                            <a className="dropdown-item" href="#">Para ler</a>
                            <a className="dropdown-item" href="#">Dropado</a>
                            <a className="dropdown-item" href="#">Em espera</a>
                          </div>
                        </li>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h5>capítulo:</h5>
                        <p> 25 / 90</p>
                      </div>
                      <div>
                        <h5>Sinopse</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda libero corporis ut reiciendis quas recusandae accusamus, minus necessitatibus distinctio cupiditate! Sed veniam quasi aspernatur voluptatum voluptates? Fugiat aut ducimus totam!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardManga;
