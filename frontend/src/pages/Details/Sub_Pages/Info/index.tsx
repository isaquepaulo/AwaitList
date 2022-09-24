import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'hooks/useTypeSelector'
import { useAppDispatch } from "hooks/useTypeDispatch";
import { getDetailsAPI } from "store/infoContent";
import './styles.css'


const Info = () => {
    const dispatch = useAppDispatch();
    const params = useParams();



    useEffect(() => {
        dispatch(getDetailsAPI(params.id));
    }, [dispatch, params.id]);

    const { data, loading, error } = useSelector((state) => state.reducer.mangaContent);

    if (loading) return <div>caregando...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div className='container_info mt-5 mb-5'>
            <div className='d-flex justify-content-around' >
                <p>tipo: {data?.type}</p>
                <p>Capitulos: {data?.chapters}</p>
                <p>Volumes: {data?.volumes}</p>
                <p>Status: {data?.status}</p>
            </div>
            <hr className='w-100' />

            <div className='d-flex justify-content-around mt-4'>
                <p>Data de Lançamento: {data?.published.prop.from.day}/{data?.published.prop.from.month}/{data?.published.prop.from.year}</p>
                <p>Data de Termino: {data?.published.prop.to.day}/{data?.published.prop.to.month}/{data?.published.prop.to.year}</p>
            </div>

        </div>
    )
}

export default Info;