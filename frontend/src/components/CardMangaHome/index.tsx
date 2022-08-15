import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-regular-svg-icons";
import { Entry } from "types/entry";

type Props = {
  manga: Entry[]
};

const CardMangaHome = ({ manga }: Props) => {
  const texto = JSON.stringify(manga);
  const Manga = JSON.parse(texto);
  return (
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
          <small className="text-muted">{Manga.title}</small>
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
  )



};

export default CardMangaHome;
