import api from "../../utils/request";
import CardManga from "components/CardManga";
import "./styles.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [mangas, setMangas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("top/manga").then(({ data }) => {
      setMangas(data.data);
    });

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(mangas)

  const handleClickEvent = (event: any) => {
    event.preventDefault();
    navigate(`/details/${event.currentTarget.id}`);
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-4">
        <h2 className="topico text-center">
          a<span className="class-spam">W</span>aitList
        </h2>
      </div>
      <div className="row mt-5">
        {mangas?.map((manga: any) => (
          <div onClick={handleClickEvent} id={manga.mal_id} className="col-12 col-sm-12 col-md-6 col-lg-3 pb-5" key={manga.mal_id} >
            <CardManga manga={manga} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
