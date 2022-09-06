import { MangasUrls } from '../utils/mangasConfig';
import { types } from '../types/types';


const { getTop, getGenre, getSearchMangaByName } = MangasUrls();


const actGetTop = (tier: any) => async (dispatch: any) => {
    try {
        const res = await getTop(tier);
        const { top } = res.data;
        dispatch({
            type: types.getListTopMangas,
            payload: top
        });
    } catch (e) {
        console.log(e)
    }
}


const actGetGenre = (type: any) => async (dispatch: any) => {
    try {
        const res = await getGenre(type);
        const { results } = res.data;
        dispatch({
            type: types.getListWithGenre,
            payload: results
        });
    } catch (e) {
        console.log(e)
    }
}
const actGetSearchMangaByName = (mangaName: any) => async (dispatch: any) => {
    try {
        const res = await getSearchMangaByName(mangaName);
        const { results } = res.data;
        dispatch({
            type: types.getSearchAnime,
            payload: results
        });
    } catch (e) {
        console.log(e)
    }
}

export const animeActions = () => {
    return {
        actGetTop,
        actGetGenre,
        actGetSearchMangaByName
    }
}