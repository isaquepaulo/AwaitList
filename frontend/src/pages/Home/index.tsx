import "./styles.css";
import Slide from "./Slide/index";
import SlideSecondary from "./SlideSecondary";
import { useEffect, useState } from "react";
import api from "utils/request";




const Home = () => {

  const [mangas, setMangas] = useState([]);
  const [mangas2, setMangas2] = useState([]);
  const [mangas3, setMangas3] = useState([]);

  useEffect(() => {
    api.get("manga/98/recommendations").then(({ data }) => {
      setMangas(data.data);
    });

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    api.get("manga/70/recommendations").then(({ data }) => {
      setMangas2(data.data);
    });

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    api.get("manga/45/recommendations").then(({ data }) => {
      setMangas3(data.data);
    });

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <div className="container-home container  ">

      <div className="container-slide">
        <Slide />
      </div>

      <div className="container-AddRecently">
        <div className="title-container">
          <h2 className="titles-home">

            Adicionados Recentemente
          </h2>
          <hr className="hr-home" />
        </div>
        <SlideSecondary Arrymangas={mangas} key={0} />
      </div>


      <div className="container-MostPopular">
        <div className="title-container">
          <h2 className="titles-home">
            Mais Populares
          </h2>
          <hr className="hr-home" />
        </div>
        <SlideSecondary Arrymangas={mangas2} key={1} />
      </div>


      <div className="container-MostPopular">
        <div className="title-container">
          <h2 className="titles-home">
            Recomendados
          </h2>
          <hr className="hr-home" />
        </div>
        <SlideSecondary Arrymangas={mangas3} key={1} />
      </div>




    </div>
  );
}


export default Home;
