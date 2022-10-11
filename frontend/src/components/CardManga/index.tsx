import "./styles.css";
import Manga from "types/manga";

type Props = {
  manga: Manga;
};

const CardManga = ({ manga }: Props) => {
  const texto = JSON.stringify(manga);
  const Manga = JSON.parse(texto);


  return (
    <>
      <div className="card card-style ">
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


              {/* <div className="text-muted card-autor-text">{Manga.authors[0].name}</div> */}
              <div className="text-muted card-autor-text">

                <span className="chapter">Autor: </span>{Manga.authors[0] ? Manga.authors[0].name : 'not author'}
              </div>



              <p className="card-text">
                <span className="chapter">Capitulos: </span>{Manga.chapters}
                <br />
                <span className="chapter">Score: </span>{Manga.score}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardManga;
