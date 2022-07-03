import api from "../../utils/request";
import CardManga from "components/CardManga";
import "./styles.css";
import { useEffect, useState } from "react";
import { Manga } from "types/manga";

const SearchPage = () => {
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    api.get("top/manga").then(({ data }) => {
      setMangas(data.data);
    });

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-4">
        <h2 className="topico text-center">
          a<span className="class-spam">W</span>aitList
        </h2>
      </div>
      <div className="row mt-5">
        {mangas?.map((manga) => (
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 pb-5">
            <CardManga manga={manga} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
