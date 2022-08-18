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
    <div className="card-teste row">
      <div className="card-img-container col-5 col-sm-4 col-md-4">
        <img
          className="img-fluid card-img "
          src={Manga.images.jpg.image_url}
          alt="..."
        />
      </div>
      <div className="card-text-container col-7 col-sm-7 col-md-7">
        <div className="card-body">
          <div className="text-muted">{Manga.title}</div>
          <div className="star-container">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} className="star_half_main" />
            <span className="cap d-none d-lg-block"> Cap: 91</span>
          </div>

          <div className="card-text">
            <div className="text-data">
              Data: 23/04/2022
            </div>
          </div>
        </div>
      </div>
    </div>
  )



};

export default CardMangaHome;
