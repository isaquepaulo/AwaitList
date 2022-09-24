import CardManga from "components/CardManga";
import Pagination from "components/Pagination";
import { getSearchAPI } from "config";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Manga from "types/manga";

import "./styles.css";

const Search = () => {
    const params = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const baseUrl = `/search/${params.value}/page/${params.number}`;

    const [data, setData] = useState<Manga[]>([]);
    const [nextPage, setNextPage] = useState(0);


    const handleClickEvent = (event: any) => {
        event.preventDefault();
        navigate(`/details/${event.currentTarget.id}`);
    };

    useEffect(() => {
        let mounted = true;
        getSearchAPI(
            params.value,
            params.number,
        ).then((result) => {
            if (mounted) {
                setNextPage(result.pagination.last_visible_page);
                setData(result.data);
            } else {
                return;
            }
        });
        return () => {
            mounted = false;
        };
    }, [params]);

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
            {/* <Pagination
                title="search"
                maxPage={nextPage}
            ></Pagination> */}

        </div>
    );
}


export default Search;
