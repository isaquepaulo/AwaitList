import "./styles.css";
import Slide from "./Slide/index";
import SlideSecondary from "./SlideSecondary";
import { useEffect, useState } from "react";
import api from "utils/request";
import { MangaSecondarySlide } from "types/mangaSecondarySlide";

import { getAiringAPI } from "config";
import CardList from "components/CardList";

const Home = () => {

  // const [mangas, setMangas] = useState<MangaSecondarySlide[]>([]);
  // const [mangas2, setMangas2] = useState<MangaSecondarySlide[]>([]);
  // const [mangas3, setMangas3] = useState<MangaSecondarySlide[]>([]);

  // useEffect(() => {
  //   api.get("manga/98/recommendations").then(({ data }) => {
  //     setMangas(data.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   api.get("manga/70/recommendations").then(({ data }) => {
  //     setMangas2(data.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   api.get("manga/45/recommendations").then(({ data }) => {
  //     setMangas3(data.data);
  //   });
  // }, []);



  return (
    <div className=" container  ">
      <div className="container-slide">
        <Slide />
      </div>

      {/* <div className="container-AddRecently">
        <div className="title-container">
          <h2 className="titles-home">
            Adicionados Recentemente
          </h2>
          <hr className="hr-home" />
          <br />
        </div>
        <SlideSecondary Arrymangas={mangas} key={0} />
      </div>


      <div className="container-MostPopular">
        <div className="title-container">
          <h2 className="titles-home">
            Mais Populares
          </h2>
          <hr className="hr-home" />
          <br />
        </div>
        <SlideSecondary Arrymangas={mangas2} key={1} />
      </div>


      <div className="container-MostPopular">
        <div className="title-container">
          <h2 className="titles-home">
            Recomendados
          </h2>
          <hr className="hr-home" />
          <br />
        </div>
        <SlideSecondary Arrymangas={mangas3} key={2} />
      </div> */}

      <SlideSecondary api={getAiringAPI()} title={"Airing"}></SlideSecondary>



    </div>
  );
}


export default Home;
