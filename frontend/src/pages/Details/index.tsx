import "./styles.css";
import { Key, useCallback, useEffect, useState } from "react";
import CardGenre from "components/CardGenre";
import Info from "./Sub_Pages/Info";
import Character from "./Sub_Pages/Characters";
import 'react-loading-skeleton/dist/skeleton.css';
import Pictures from "./Sub_Pages/Pictures";
import Recomendations from "./Sub_Pages/Recomendations";
import { useSelector } from 'hooks/useTypeSelector'
import { useAppDispatch } from "hooks/useTypeDispatch";
import { getDetailsAPI } from "store/mangaContent";
import { useNavigate, useParams } from "react-router-dom";
import LoaderDetails from "components/Loader/LoaderDetails";


const Details = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [content, setContent] = useState(0);
  const [contentNav, setContentNav] = useState(true);

  const [isVisible, setIsVisible] = useState(true);
  const params = useParams();

  const switchContent = useCallback((index: any) => {
    setContent(index);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const listenToScroll = () => {
      let heightToShowFrom = 200;
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (winScroll > heightToShowFrom) {
        // to limit setting state only the first time
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    setIsVisible(false);
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);




  useEffect(() => {
    dispatch(getDetailsAPI(params.id));
    switchContent(1);

  }, [dispatch, params.id, switchContent]);




  // eslint-disable-next-line no-empty-pattern
  const { data, loading, error } = useSelector((state) => state.reducer.mangaContent);


  const genres = data?.genres
  const themes = data?.themes
  const demographics = data?.demographics




  const handleClickEventGenre = (event: any) => {
    event.preventDefault();
    navigate(`/genrePage/`);
  };


  if (loading) return <div><LoaderDetails /></div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="container_detail container">
        <div className="row">
          <div className="container_img_detail col-12 col-md-4  col-lg-3 d-flex flex-column justify-content-center mb-4">
            <img
              className="img_detail"
              src={data?.images.jpg.image_url}
              alt=""
            />
            <div className="container-genres d-flex justify-content-center mb-3">

              {genres?.map((genre: { name: string; mal_id: Key | null | undefined; }, x: any) => (
                <div onClick={handleClickEventGenre} key={genre.mal_id}>
                  <CardGenre genre={genre.name} />
                </div>
              ))}

              {themes?.map((theme: { name: string; mal_id: Key | null | undefined; }, x: any) => (
                <div onClick={handleClickEventGenre} key={theme.mal_id}>
                  <CardGenre genre={theme.name} key={theme.mal_id} />
                </div>
              ))}
              {demographics?.map((demographic: { name: string; mal_id: Key | null | undefined; }, x: any) => (
                <div onClick={handleClickEventGenre} key={demographic.mal_id}>
                  <CardGenre genre={demographic.name} key={demographic.mal_id} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-9">
            <h1>{data?.title}</h1>
            <h5><span className="authors">Autor:</span>{data?.authors[0].name}</h5>
            <div className="container_text_details d-flex flex-column-reverse flex-md-row mb-3">
              <h4>Synopsis:</h4>
              <div className="container_rank d-flex flex-wrap ">
                <p className=""><span>Rank:</span>#{data?.rank}</p>
                <p className=""><span>Popularity:</span>#{data?.popularity}</p>
                <p className=""><span>Members:</span>#{data?.members}</p>
              </div>
            </div>
            <p>{data?.synopsis}</p>
            <div className={`div_score d-flex flex-column align-items-center ms-auto mt-3 ${data?.score
              ? data?.score > 7.5
                ? 'green'
                : data?.score > 6
                  ? 'yellow'
                  : 'bg-danger'
              : 'bg-info'}`}>

              <p className="text_score">Score</p>
              <div className="d-flex align-items-end ">
                <p className="text_score_first">
                  {data?.score
                    ? Math.floor(data?.score)
                    : "NA"}
                </p>
                <p className="text_score_secondary">
                  {data?.score
                    ? (
                      data?.score - Math.floor(data?.score)
                    )
                      .toFixed(2)
                      .toString()
                      .replace("0", "")
                    : ""}
                </p>
              </div>
              <p className="text_score_members">{data?.members
                ? `${data?.members
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ","
                  )} users`
                : "NA"}</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" container_sub_pages pt-3 mt-4">
        <div className="container container_buttom_sub mb-4">
          <div className=" d-flex flex-column flex-md-row justify-content-around">
            <button
              onClick={() => switchContent(1)}
              className={`${contentNav ? "active" : "notActive"
                } ${content === 1
                  ? "active"
                  : "notActive"
                }`}>
              <p>Informações</p>
            </button>
            <button
              onClick={() => switchContent(2)}
              className={`${contentNav ? "active" : "notActive"
                } ${content === 2
                  ? "active"
                  : "notActive"
                } `}
            >
              <p>Personagens</p>
            </button>
            <button
              onClick={() => switchContent(3)}
              className={` ${contentNav ? "active" : "notActive"
                }  ${content === 3
                  ? "active"
                  : "notActive"
                } `}
            >
              <p>Galeria</p>
            </button>
            <button
              onClick={() => switchContent(4)}
              className={` ${contentNav ? "active" : "notActive"
                }  ${content === 4
                  ? "active"
                  : "notActive"
                } `}
            >
              <p>Recomendações</p>
            </button>
          </div>
        </div>
        <div className="container flex flex-col mx-auto min-h-[500px]">
          <div>{content === 1 && <Info />}</div>
          <div>{content === 2 && <Character />}</div>
          <div>{content === 3 && <Pictures />}</div>
          <div>{content === 4 && <Recomendations />}</div>
          {isVisible && (
            <div className="div_Button_backToTop d-flex justify-content-center align-items-end">
              <button
                onClick={scrollTop}
                className="button_backToTop"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="img_backToTop"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>Back To Top ?</p>
              </button>
            </div>
          )}
        </div>
      </div>

    </>

  );
}


export default Details;

