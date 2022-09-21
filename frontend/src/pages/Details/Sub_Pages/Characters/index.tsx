import { useAppDispatch } from "hooks/useTypeDispatch";
import { useSelector } from "hooks/useTypeSelector";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getCharactersAPI } from "store/charactersContent";

import './styles.css'

const Characters = () => {
  const params = useParams();

  const dispatch = useAppDispatch(); 

  useEffect(() => {
    dispatch(getCharactersAPI(params.id));
  }, [dispatch, params.id]);

  const { data, loading, error } = useSelector((state) => state.reducer.charactersContent);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="div_container_chacters mt-5">
      <div className="row justify-content-center">
        {data?.length !== 0 ? (
          data?.map((data) => (
            <div className="col-10 col-sm-6 col-md-4 container_character card_characters mb-3" key={data.character.mal_id}>
              <div className="row g-1 ">
                <div className="col-5">
                  <img
                    className="img_character"
                    src={data.character.images.jpg.image_url}
                    alt={data?.character.name}
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="">Nome: {data.character.name}</h5>
                    <p className="card-text">Função: {data.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (<h1 className="text-3xl ">Not Available Charaters</h1>
        )}
      </div>
    </div>
  )
}

export default Characters;