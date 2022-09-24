import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'hooks/useTypeSelector'
import { useAppDispatch } from "hooks/useTypeDispatch";
import { getPicturesAPI } from 'store/picturesContent';
import './styles.css'
import LoaderPictures from 'components/Loader/LoaderPictures';


const Pictures = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getPicturesAPI(params.id));
    }, [dispatch, params.id]);
    const { data, loading, error } = useSelector((state) => state.reducer.picturesContent);
    let i = 0;

    if (loading) return <div><LoaderPictures /></div>;
    if (error) return <div>{error}</div>;
    return (
        <div>
            <div className="">
                {data?.length !== 0 ? (
                    data?.map((data) => (
                        <div key={i++}>
                            <img
                                className="img_character"
                                src={data.jpg.image_url}
                                alt="img"
                            />
                        </div>
                    ))
                ) : (<h1 className="text-3xl ">Not Available Pictures</h1>
                )}
            </div>
        </div>
    )
}

export default Pictures;