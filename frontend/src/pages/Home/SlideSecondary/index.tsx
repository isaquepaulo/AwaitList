import Slider from "react-slick";
import { MangaSecondarySlide } from "types/mangaSecondarySlide";
import CardMangaHome from "components/CardMangaHome";

type Props = {
    Arrymangas: MangaSecondarySlide[]
};

const SlideSecondary = ({ Arrymangas }: Props) => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <Slider {...settings}>
                {Arrymangas.map(mangas => (
                    <CardMangaHome manga={mangas.entry} key={0} />
                ))}
            </Slider>
        </div>
    )
}

export default SlideSecondary;
