import "./styles.css";
import { useParams } from "react-router-dom";
import { getDetailsAPI } from "../../config";
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import Manga from "types/manga";
import { Genres } from "types/genres";
import { Themes } from "types/themes";
import { Demographics } from "types/demographics";
import CardGenre from "components/CardGenre";


const Details = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [data, setData] = useState<Manga>();
  const [content, setContent] = useState(0);


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
    let mounted = true;
    scrollTop();
    dispatch({ type: "LOADING_DETAILS_TRUE" });
    getDetailsAPI(params.id).then((result) => {
      if (mounted) {
        setData(result.data);
        switchContent(1);
        dispatch({ type: "LOADING_DETAILS_FALSE" });
      } else {
        return;
      }
    });
    return () => {
      mounted = false
    }
  }, [params.id, dispatch, switchContent]);





  const genres = data?.genres
  const themes = data?.themes
  const demographics = data?.demographics

  console.log(data?.score)




  return (
    <div className="container_detail container">
      <div className="row">
        <div className="container_img_detail col-12 col-md-4  col-lg-3 d-flex flex-column justify-content-center mb-4">
          <img
            className="img_detail"
            src={data?.images.jpg.image_url}
            alt=""
          />
          <div className="container-genres d-flex justify-content-center mb-3">
            {genres?.map((genre, x) => (
              <CardGenre genre={genre.name} key={genre.mal_id} />
            ))}
            {themes?.map((theme, x) => (
              <CardGenre genre={theme.name} key={theme.mal_id} />
            ))}
            {demographics?.map((demographic, x) => (
              <CardGenre genre={demographic.name} key={demographic.mal_id} />
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
  );
}


export default Details;
