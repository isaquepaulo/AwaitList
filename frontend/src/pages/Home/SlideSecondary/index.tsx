import Slider from "react-slick";
import "./styles.css";
import CardMangaHome from "components/CardMangaHome";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, } from "react-redux";



const SlideSecondary = (props: any) => {

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
              console.log(error);
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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleClickEvent = (event: any) => {
    event.preventDefault();
    navigate(`/details/${event.currentTarget.id}`);
    console.log(event)
  };

  return (
    <div >
      <div className="flex items-center justify-between mb-3 px-7 md:px-0">
        <h1 className="text-lg font-bold lg:text-2xl md:text-xl">
          {props.title}
        </h1>
        <div className="lg:w-2/3 h-0.5 w-1/6 sm:w-1/2 bg-gray-200 dark:bg-gray-500"></div>
        {props?.link === true ? (
          <button
            onClick={() => navigate(props.navigate)}
            className="text-lg font-extrabold md:text-xl text-light_secondary dark:text-dark_secondary"
          >
            {all ? "VIEW LESS" : "VIEW ALL"}
          </button>
        ) : (
          <button
            onClick={() => setAll(!all)}
            className="text-lg font-extrabold md:text-xl text-light_secondary dark:text-dark_secondary"
          >
            {all ? "VIEW LESS" : "VIEW ALL"}
          </button>
        )}
      </div>
      <Slider {...settings}>
        {all ?
          data?.map((data: any) => (
            <div onClick={handleClickEvent}>
              <p>Titulo{data.entry.title}</p>
              <div>
                <img
                  src={data.entry.images.webp.image_url}
                  alt=""
                  className="object-cover w-full h-32 md:h-80 lg:h-60 xl:h-80 rounded-xl"
                />
              </div>
            </div>

          ))
          : data?.slice(0, 5).map((data: any) => (
            <div onClick={handleClickEvent}>
              <p>Titulo{data.entry.title}</p>
              <div>
                <img
                  src={data.entry.images.webp.image_url}
                  alt=""
                  className="object-cover w-full h-32 md:h-80 lg:h-60 xl:h-80 rounded-xl"
                />
              </div>
            </div>
          ))}
      </Slider>
    </div>
  )
}

export default SlideSecondary;
