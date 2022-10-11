import "./styles.css";
import Character from "types/character";

type Props = {
  character: Character;
};

const CardCharacter = ({ character }: Props) => {
  const texto = JSON.stringify(character);
  const Character = JSON.parse(texto);


  return (
    <div className="card_character">
      <div className="row">
        <div className="col-6">
          <img
            className="img_character"
            src={Character.character.images.jpg.image_url}
            alt={Character?.character.name}
          />
        </div>
        <div className="col-6">
          <h5 className="">Nome: {Character.character.name}</h5>
          <p className="card-text">Função: {Character.role}</p>
        </div>
      </div>
    </div>




  );
};

export default CardCharacter;
