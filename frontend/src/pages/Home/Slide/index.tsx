import "./styles.css";
import Carousel from 'react-bootstrap/Carousel'


import foto1 from './slide-imgs/foto1.jpg'
import foto2 from './slide-imgs/foto2.jpg'
import foto3 from './slide-imgs/foto3.jpg'


const Slide = () => {

    return (
        <Carousel className="">
            <Carousel.Item className="Carousel-item-style">
                <img
                    className="d-block w-100 img-slide"
                    src={foto1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p className="d-none d-sm-block">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="Carousel-item-style">
                <img
                    className="d-block w-100 img-slide"
                    src={foto2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p className="d-none d-sm-block" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="Carousel-item-style">
                <img
                    className="d-block w-100 img-slide"
                    src={foto3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p className="d-none d-sm-block">
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slide;