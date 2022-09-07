import "./styles.css";
import Slide from "./Slide/index";
import SlideSecondary from "./SlideSecondary";
import { getAiringAPI } from "config";
import { getAiringAPI2 } from "config";
import { getAiringAPI3 } from "config";


const Home = () => {
  return (
    <div className="container">
      <div className="container-slide">
        <Slide />
      </div>

      <div className="div_Slide_home">
        <SlideSecondary api={getAiringAPI()} title={"Populares"} key={"1"} />
      </div>

      <div className="div_Slide_home">
        <SlideSecondary api={getAiringAPI2()} title={"Adicionados Recentemente"} key={"2"} />
      </div>

      <div className="div_Slide_home">
        <SlideSecondary api={getAiringAPI3()} title={"Mais Pesquisados"} key={"3"} />
      </div>





    </div>
  );
}


export default Home;
