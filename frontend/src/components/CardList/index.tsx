import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch, } from "react-redux";
import CardLoading from "components/CardLoading";
import CardMangaHome from "components/CardMangaHome";

const CardList = (props: any) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("false");
  const [all, setAll] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const handleClickEvent = (event: any) => {
    event.preventDefault();
    navigate(`/details/${event.currentTarget.id}`);
  };
  

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

  return (
    <div className="w-full px-3 pt-2 transition-all duration-300 bg-white md:px-5 dark:bg-black min-h-fit">
      <div className="container mx-auto text-gray-700 dark:text-gray-200">
        {" "}
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



        <div className="row">
          <div className="d-flex">
            {all ?
              data?.map((data: any) => (
                <CardMangaHome manga={data} key={data.mal_id} />
              ))
              : data?.slice(0, 5).map((data: any) => (
                <CardMangaHome manga={data} key={data.mal_id} />
              ))}
          </div>
        </div>
      </div>


    </div>

  );

}


export default CardList
