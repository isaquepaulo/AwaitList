import Slider from "react-slick";
import "./styles.css";
import CardMangaHome from "components/CardMangaHome";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "hooks/useTypeSelector";
import { useAppDispatch } from "hooks/useTypeDispatch";
import { getRecommendationsAPI } from "store/recomendationsContent";

const SlideSecondary = (props: any) => {
  const [all, setAll] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getRecommendationsAPI(params.id));
  }, [dispatch, params.id]);

  const { data, loading, error } = useSelector((state) => state.reducer.recomendationsContent);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
    ]
  };

  const handleClickEvent = (event: any) => {
    event.preventDefault();
    navigate(`/details/${event.currentTarget.id}`);
  };
  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div >
      <h1 className="">
        {props.title}
      </h1>
      <hr className="w-100 hr_SlideSecondary  border  border-2 border-primary" />
      <div className="d-flex justify-content-end">
        {props?.link === true ? (
          <button
            onClick={() => navigate(props.navigate)}
            className="button_SlideSecondary"
          >
            {all ? "Ver Menos" : "Ver Mais"}
            <FontAwesomeIcon icon={faArrowRight} className="arrow-button" />
          </button>
        ) : (
          <button
            onClick={() => setAll(!all)}
            className="button_SlideSecondary"
          >
            {all ? "Ver Menos" : "Ver Mais"}
            <FontAwesomeIcon icon={faArrowRight} className="arrow-button" />
          </button>
        )}
      </div>

      <Slider {...settings}>
        {all ?
          data?.map((data: any) => (
            <div onClick={handleClickEvent} id={data.entry.mal_id} key={1}>
              <CardMangaHome manga={data} />
            </div>
          ))
          : data?.slice(0, 5).map((data: any) => (
            <div onClick={handleClickEvent} id={data.entry.mal_id} key={2}>
              <CardMangaHome manga={data} />
            </div>
          ))}
      </Slider>
    </div>
  )
}

export default SlideSecondary;
