import "./styles.css";
import Carousel from 'react-bootstrap/Carousel'
import { useEffect, useState } from "react";
import { SlideApi } from "utils/request";
import { MangaSlide } from "types/mangaSlide";


const Slide = () => {
    const [mangas, setMangas] = useState([]);
    useEffect(() => {
        SlideApi.get("").then((response) => {
            setMangas(response.data.data);

        });
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Carousel fade={true} controls={false}>
            {mangas.map((manga: MangaSlide) => (
                <Carousel.Item className="Carousel-item-style" key={manga.mal_id}>
                    <img
                        className=" w-100 img-slide"
                        src={manga.image}
                        alt="First slide"
                    />
                    <Carousel.Caption className="d-flex flex-column align-items-start">
                        <h3 className="title-slide-home">{manga.title}</h3>
                    </Carousel.Caption>
                    <Carousel.Caption className="">
                        <p className="d-none d-md-block">{manga.synopsis}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>

    );


}

export default Slide;