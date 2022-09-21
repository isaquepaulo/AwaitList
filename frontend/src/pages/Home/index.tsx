import "./styles.css";
import Slide from "./Slide/index";
import { getRecommendationsAPI } from "store/recomendationsContent";
import SlideHome from "components/SlideHome";

import { useParams } from "react-router-dom";
import { getAiringAPI, getAiringAPI2, getAiringAPI3 } from "config";

const Home = () => {
  return (
    <div className="container">
      <div className="container-slide">
        <Slide />
      </div>
      <div className="div_Slide_home">
        <SlideHome api={getAiringAPI()} title={"Populares"} key={"1"} />
      </div>

      <div className="div_Slide_home">
        <SlideHome api={getAiringAPI2()} title={"Adicionados Recentemente"} key={"2"} />
      </div>

      <div className="div_Slide_home">
        <SlideHome api={getAiringAPI3()} title={"Mais Pesquisados"} key={"3"} />
      </div>
    </div>
  );
}


export default Home;
