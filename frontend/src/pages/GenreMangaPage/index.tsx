import { AxiosRequestConfig } from "axios";
import CardManga from "components/CardManga";
import Filter, { MangaFilter } from "components/Filter";
import Pagination from "components/Pagination";
import { requestBackend } from "config";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Manga from "types/manga";
import { SpringPage } from "types/vendor/spring";
import "./styles.css";

type ControlComponentsData = {
    activePage: number;
    filterdata: MangaFilter;
};

const List = () => {
    const navigate = useNavigate();
    const [mangas, setMangas] = useState<Manga[]>([]);
    const [page, setpage] = useState<SpringPage<Manga>>();



    const [ControlComponentsData, setControlComponentsData] =
        useState<ControlComponentsData>({
            activePage: 0,
            filterdata: { genre: null },
        });

    const handlePageChange = (pageNumber: number) => {
        setControlComponentsData({
            activePage: pageNumber,
            filterdata: ControlComponentsData.filterdata,
        });
    };

    // const teste = ControlComponentsData.filterdata.genre?.mal_id
    const handleSubmitFilter = (data: MangaFilter) => {
        setControlComponentsData({
            activePage: 0,
            filterdata: data,
        });
    };

    const getMangasGenre = useCallback(() => {
        const config: AxiosRequestConfig = {
            method: "GET",
            url: "manga",

            params: {
                genres: ControlComponentsData.filterdata.genre?.mal_id,
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
        getMangasGenre()
    }, [getMangasGenre]);

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
};

export default List;
