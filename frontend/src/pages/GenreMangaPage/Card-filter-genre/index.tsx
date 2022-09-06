import "./styles.css"
import { Genres } from "types/genres";

type Props = {
    genre: Genres
}


const CardGenreFilter = ({ genre }: Props) => {
    return (
        <div className="filter-button d-flex justify-content-center align-items-center">
            <button>{genre.name}</button>
        </div>
    )


}

export default CardGenreFilter