import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-regular-svg-icons";
import { DetailedHTMLProps, HTMLAttributes, ReactNode, RefObject, useEffect, useState } from "react";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";
import { Modal, ModalProps } from "react-bootstrap";
import CardGenre from "components/CardGenre";
import api from "utils/request";
import { Manga } from "types/manga";


type Props = {
  manga: any
};


const CardMangaHome = ({ manga }: Props) => {
  const [modalShow, setModalShow] = useState(false);
  const [MangaM, setMangaM] = useState<Manga>();

  useEffect(() => {
    api.get(`manga/${manga.mal_id}`).then(({ data }) => {
      setMangaM(data.data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function ModalCard(props: JSX.IntrinsicAttributes & Omit<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode; }) {
    let genres = MangaM?.genres;
    let themes = MangaM?.themes;
    let demographics = MangaM?.demographics;




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
                  src={MangaM?.images.jpg.image_url}
                  alt="..."
                />
              </div>
              <div className="container-genres d-flex justify-content-center mb-3">
                {genres?.map((genre, x) => (
                  <CardGenre genre={genre.name} key={genre.mal_id} />
                ))}

                {themes?.map((themes, x) => (
                  <CardGenre genre={themes.name} key={themes.mal_id} />
                ))}
                {demographics?.map((demographics, x) => (
                  <CardGenre genre={demographics.name} key={demographics.mal_id} />
                ))}
              </div>
            </div>
            <div className=" col-lg-7">
              <div className="content-modal-text">
                <h1 className="modal-card-title">{MangaM?.title}</h1>
                <h1 className="author-name-modal">Autor: {MangaM?.authors[0].name}</h1>

                <h3 className="synopsi-name-modal">Sinopse:</h3>
                <p className="synopsi-text-modal">{MangaM?.synopsis}</p>
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
      <div className="card card-style-home" onClick={() => setModalShow(true)}>
        <div className="row">
          <div className=" col-5 col-sm-4 col-md-4 teste">
            <div className="container-card-manga">
              <img
                className="img-fluid card-img mb-2"
                src={MangaM?.images.jpg.image_url}
                alt="..."
              />
            </div>
          </div>
          <div className="col-7 col-sm-8 col-md-8">
            <div className="card-body">
              <h5 className="card-title">{MangaM?.title}</h5>

              <div className="text-muted card-autor-text">{MangaM?.authors[0].name}</div>
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

    </>)


};

export default CardMangaHome;
