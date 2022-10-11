import CardCharacter from "components/CardCharacter";
import LoaderCharacter from "components/Loader/LoaderCharacter";
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

  if (loading) return <div><LoaderCharacter /></div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="container ">
      <div className="row">
        {data?.length !== 0 ? (
          data?.map((data) => (
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2 " key={data.character.mal_id}>
              <CardCharacter character={data} />
            </div>
          ))
        ) : (<h1 className=" ">Not Available Charaters</h1>
        )}
      </div>
    </div>
  )
}

export default Characters;