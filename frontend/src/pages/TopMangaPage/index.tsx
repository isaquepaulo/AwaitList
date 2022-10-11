import CardManga from "components/CardManga";
import "./styles.css";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SpringPage } from "types/vendor/spring";
import Manga from "types/manga";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "config";
import Pagination from "components/Pagination";

type ControlComponentsData = { 
  activePage: number;
};


const TopMangaPage = () => {
  const navigate = useNavigate();
  const [page, setpage] = useState<SpringPage<Manga>>();
  const [mangas, setMangas] = useState([]);
  const [ControlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
    });


  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
    });
  };
  const getTopManga = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: "top/manga",
      params: {
        page: ControlComponentsData.activePage,
        limit: 24
      },
    };
    requestBackend(config).then((response) => {
      setpage(response.data);
      setMangas(response.data.data);
    });
  }, [ControlComponentsData]);


  useEffect(() => {
    getTopManga()
  }, [getTopManga]);




  console.log(page)




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
      <Pagination
        forcePage={0}
        pageCount={page ? page.pagination.last_visible_page : 1}
        range={3}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default TopMangaPage;
