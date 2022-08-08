import "./styles.css";
import Slide from "./Slide/index";




const Home = () => {



  return (
    <div className="container-home container  ">
      <div className="container-slide">
        <Slide />
      </div>


      <div className="title-container">
        <h2 className="titles-home">
          Adicionados Recentemente
        </h2>
        <hr className="hr-home" />
      </div>




    </div>
  );
}

export default Home;
