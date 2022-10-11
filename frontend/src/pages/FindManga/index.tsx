import { AxiosRequestConfig } from "axios";
import CardManga from "components/CardManga";
import Filter, { FilterFind } from "components/FilterFindManga"
import Pagination from "components/Pagination";
import { requestBackend } from "config";
import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Manga from "types/manga";
import { SpringPage } from "types/vendor/spring";

type ControlComponentsData = {
  activePage: number;
  filterdata: FilterFind;
};
const FindManga = () => {
  const navigate = useNavigate();
  const [page, setpage] = useState<SpringPage<Manga>>();
  const [mangas, setMangas] = useState<Manga[]>([]);
  const [ControlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterdata: { type: null, minScore: null, status: null },
    });
  const handleSubmitFilter = (data: FilterFind) => {
    setControlComponentsData({
      activePage: 0,
      filterdata: data,
    });
  };
  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterdata: ControlComponentsData.filterdata,
    });
  };

  const getMangasFilters = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: "manga",
      params: {
        type: ControlComponentsData.filterdata.type?.name,
        status: ControlComponentsData.filterdata.status?.status,
        min_score: ControlComponentsData.filterdata.minScore?.score,
        page: ControlComponentsData.activePage,
        limit: 24
      },
    };
    requestBackend(config).then((response) => {
      // setpage(response.data);
      setpage(response.data);
      setMangas(response.data.data);
    });
  }, [ControlComponentsData]);

  useEffect(() => {
    getMangasFilters()
  }, [getMangasFilters]);

  const handleClickEvent = (event: any) => {
    event.preventDefault();
    navigate(`/details/${event.currentTarget.id}`);
  };

  return (


    <div className="container mb-3">
      <Filter onSubmitFilter={handleSubmitFilter} />
      <div className="row mb-4">
        {mangas?.map((manga: any) => (
          <div onClick={handleClickEvent} id={manga.mal_id} key={manga.mal_id} className="col-sm-6 col-md-4 col-lg-3">
            <CardManga manga={manga} />
          </div>
        ))}

      </div>
      <Pagination
        forcePage={0}
        pageCount={page ? page.pagination.last_visible_page : 0}
        range={3}
        onChange={handlePageChange}
      />
    </div>
  );

}



export default FindManga