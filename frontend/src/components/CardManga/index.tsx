import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-regular-svg-icons";
import Modal, { ModalProps } from 'react-bootstrap/Modal';
import { Manga } from "types/manga";
import { Genres } from "types/genres";
import { Themes } from "types/themes";
import { Demographics } from "types/demographics"; 
import { DetailedHTMLProps, HTMLAttributes, ReactNode, RefObject, useState } from "react";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";
import CardGenre from "components/CardGenre";



type Props = {
  manga: Manga[];
};


const CardManga = ({ manga }: Props) => {
  const [modalShow, setModalShow] = useState(false);
  const texto = JSON.stringify(manga);
  const Manga = JSON.parse(texto);




  function ModalCard(props: JSX.IntrinsicAttributes & Omit<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode; }) {

    let genres: Genres[] = Manga.genres;
    let themes: Themes[] = Manga.themes;
    let demographics: Demographics[] = Manga.demographics;



    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton />

        <Modal.Body>
          <div className="row">
            <div className="col-12 col-lg-5">
              <div className="modal-card-img">
                <img
                  className="img-fluid-modal card-img-modal mb-2"
                  src={Manga.images.jpg.image_url}
                  alt="..."
                />
              </div>
              <div className="container-genres d-flex justify-content-center mb-3">
                {genres?.map((genre, x) => (
                  <CardGenre genre={genre.name} id={genre.mal_id} key={genre.mal_id} />
                ))}

                {themes?.map((themes, x) => (
                  <CardGenre genre={themes.name} id={themes.mal_id} key={themes.mal_id} />
                ))}
                {demographics?.map((demographics, x) => (
                  <CardGenre genre={demographics.name} id={demographics.mal_id} key={demographics.mal_id} />
                ))}
              </div>
            </div>
            <div className=" col-lg-7">
              <div className="content-modal-text">
                <h1 className="modal-card-title">{Manga.title}</h1>
                <h1 className="author-name-modal">Autor: {Manga.authors[0].name}</h1>

                <h3 className="synopsi-name-modal">Sinopse:</h3>
                <p className="synopsi-text-modal">{Manga.synopsis}</p>
              </div>
            </div>

          </div>
        </Modal.Body>

      </Modal >
    );
  }



  return (
    <>
      <ModalCard
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="card card-style " onClick={() => setModalShow(true)}>

        <div className="row">
          <div className=" col-5 col-sm-4 col-md-4 teste">
            <div className="container-card-manga">
              <img
                className="img-fluid card-img mb-2"
                src={Manga.images.jpg.image_url}
                alt="..."
              />
            </div>
          </div>
          <div className="col-7 col-sm-8 col-md-8">
            <div className="card-body">
              <h5 className="card-title">{Manga.title}</h5>

              <div className="text-muted card-autor-text">{Manga.authors[0].name}</div>
              <br />
              <div className="container-stars">
                <FontAwesomeIcon icon={faStar} className="estrela" />
                <FontAwesomeIcon icon={faStar} className="estrela" />
                <FontAwesomeIcon icon={faStar} className="estrela" />
                <FontAwesomeIcon icon={faStar} className="estrela" />
                <FontAwesomeIcon icon={faStarHalfAlt} className="estrela" />
              </div>

              <p className="card-text">
                <span className="cap">Cap 20/91</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardManga;
