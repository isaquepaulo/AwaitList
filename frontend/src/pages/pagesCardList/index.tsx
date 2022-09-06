import { useState, useEffect } from "react";
import Pagination from "components/Pagination";
import { useParams } from "react-router-dom";
import CardList from "components/CardList";
import React from "react";



const PagesCard = (props: any) => {
    const [nextPage, setNextPage] = useState([]);
    const params = useParams();

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const isMonted = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        let mounted = React.useRef(true);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            let mounted = React.useRef(true);
            scrollTop();
            props?.api(1).then((result: any) => {
                if (mounted) {
                    setNextPage(result.pagination.last_visible_page);
                } else {
                    return;
                }
            });
            mounted.current = false;

            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [props]);
        return mounted
    }
    isMonted()

    useEffect(() => {
        scrollTop();
    }, [params]);


    return (
        <div className="min-h-screen py-10">
            <CardList
                title={`${props.title} Manga`}
                api={props?.api(params.number)}
                all={true}
                rank={props.rank}
                firstCard={true}
            ></CardList>

            <Pagination title={props.title} maxPage={nextPage}></Pagination>
        </div>
    );
}

export default PagesCard;