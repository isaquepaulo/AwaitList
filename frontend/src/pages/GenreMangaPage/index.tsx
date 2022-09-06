import { AxiosRequestConfig } from "axios";
import CardManga from "components/CardManga";
import Filter, { MangaFilterData } from "components/Filter";
import { useCallback, useEffect, useState } from "react";
import { Genres } from "types/genres";
import { Manga } from "types/manga";
import api, { requestBackend } from "utils/request";

import "./styles.css";

type ControlComponentsData = {
    filterdata: MangaFilterData;
};


const GenrePage = () => {
    const [mangas, setMangas] = useState<Manga[]>([]);
    const [controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>({
        filterdata: { name: "", genre: null }
    })



    const handleSubmitFilter = (data: MangaFilterData) => {
        setControlComponentsData({
            filterdata: data,
        });
    };

    const getMangas = useCallback(() => {
        const config: AxiosRequestConfig = {
            method: "GET",
            url: `/top/manga&limit=5`,
            params: {

            },
        };

        requestBackend(config).then((response) => {
            setMangas(response.data.data);
        });
    }, []);


    useEffect(() => {
        getMangas();
    }, [getMangas]);




    return (
        <div className="container">
            <div className="title-container">
                <h2 className="titles-Genre-text mt-4">
                    Generos
                </h2>
                <hr className="hr-Genre" />
                <br />
            </div>

            <div className="row">
                <Filter onSubmitFilter={handleSubmitFilter} />

            </div>
            <hr className="hr-Genre mt-4" />

            <div className="row mt-5">
                {mangas?.map((manga, x) => (
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 pb-5" key={x + 1}>
                        <CardManga manga={manga} />
                    </div>
                ))}
            </div>


        </div>

    );
};

export default GenrePage;
