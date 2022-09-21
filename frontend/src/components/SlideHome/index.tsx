import Slider from "react-slick";
import "./styles.css";
import CardMangaHome from "components/CardMangaHome";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

const SlideHome = (props: any) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("false");
  const [all, setAll] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    let mounted = true;
    if (props.all === true) { 
      setAll(true);
    }
    if (props.haveData) {
      setData(props.data);
    } else {
      dispatch({ type: "LOADING_CARD_TRUE" });
      props.api
        .then((result: any) => {
          if (mounted) {
            if (result.error) {
            } else {
              setData(result.data);
            }
            if (props.firstCard) {
              dispatch({ type: "LOADING_CARD_FALSE" });
            } else {
              return;
            }
          } else {
            return;
          }
        })
        .catch((error: any) => {
          if (mounted) {
            setError(error);
            if (props.firstCard) {
              dispatch({ type: "LOADING_CARD_FALSE" });
            } else {
              return;
            }
          } else {
            return;
          }
        });
    }
    return () => {
      mounted = false
    }
  }, [
    params,
    dispatch,
    error,
    props.all,
    props.api,
    props.firstCard,
    props.data,
    props.haveData,
  ]);
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

export default SlideHome;
