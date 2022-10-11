import "./styles.css";
import Carousel from 'react-bootstrap/Carousel'
import { useEffect, useState } from "react";
import { SlideApi } from "utils/request";
import { MangaSlide } from "types/mangaSlide";
import Button from "components/Button"

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
                <Carousel.Item className="Carousel-item-style d-flex justify-content-center" key={manga.mal_id}>
                    <img
                        className=" w-100 img-slide"
                        src={manga.image}
                        alt="First slide"
                    />
                    <Carousel.Caption className="d-flex flex-column align-items-start">
                        <h3 className="title-slide-home">{manga.title}</h3>
                    </Carousel.Caption>
                    <Carousel.Caption>
                        <p className="text-synopsis d-none d-md-block  p-3">{manga.synopsis}</p>
                        <div className="d-none d-lg-block">
                            <div className="d-flex button-slide">
                                <Button text={"Ver Sobre"} id={manga.mal_id} />
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Slide;