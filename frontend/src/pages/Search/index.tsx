import CardManga from "components/CardManga";
import Pagination from "components/Pagination";
import { getSearchAPI } from "config";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Manga from "types/manga";
import { SpringPage } from "types/vendor/spring";
import "./styles.css";

type ControlComponentsData = {
  activePage: number;
};

const Search = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<Manga[]>([]);
  const [page, setpage] = useState<SpringPage<Manga>>();
  const [ControlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
    });
  }; 

  const handleClickEvent = (event: any) => {
    event.preventDefault();
    navigate(`/details/${event.currentTarget.id}`);
  };

  let num = ControlComponentsData.activePage
  const limit = 24
  useEffect(() => {
    let mounted = true;
    getSearchAPI(
      params.value,
      num,
      limit
    ).then((result) => {
      if (mounted) {
        setpage(result)
        setData(result.data);
      } else {
        return;
      }
    });
    return () => {
      mounted = false;
    };
  }, [params, num]);

  return (
    <div className="container_Search container ">
      <h1 className="mb-5 d-flex justify-content-center">
        Resultados para
        <span className="result_name_search"> {params.value}</span>
      </h1>
      <div className="row d-flex">
        {data?.map((manga: any) => (
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
}
export default Search;
