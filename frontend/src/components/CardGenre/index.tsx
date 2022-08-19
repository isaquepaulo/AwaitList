import "./styles.css"
import Button from "components/Button"


type Props = {
    genre: string, 
    id: number
}

const CardGenre = ({ genre, id }: Props) => {
    return (
        <div className="btn-genre card-genre d-flex justify-content-center align-items-center">
            <p className="text-genre">{genre}</p>
        </div>
    )


}

export default CardGenre