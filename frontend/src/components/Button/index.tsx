import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


type Props = {
    text: string,
    id: number
};


const Button = ({ text, id }: Props) => {

    console.log(id)
    return (
        <div className="btn container-button d-flex justify-content-center align-items-center">
            <h3>{text}</h3>
            <FontAwesomeIcon icon={faArrowRight} className="arrow-button" />
        </div>
    )


}


export default Button;