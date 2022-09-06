import "./styles.css"

type Props = {
    genre: string,
}

const CardGenre = ({ genre }: Props) => {
    return (
        <div className="btn-genre card-genre d-flex justify-content-center align-items-center">
            <p className="text-genre">{genre}</p>
        </div>
    )


}

export default CardGenre