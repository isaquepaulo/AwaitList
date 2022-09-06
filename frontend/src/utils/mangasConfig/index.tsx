import axios from "axios"

export const MangasUrls = () => {

    const getTop = (tier: any) => {
        return axios({
            method: 'GET',
            url: `/top/manga/1/${tier}`,
        })
    }

    const getGenre = (type: any) => {
        return axios({
            method: 'GET',
            url: `search/manga?genre=${type}`,
        })
    }

    const getSearchMangaByName = (mangaName: any) => {
        return axios({
            method: 'GET',
            url: `search/manga?q=${mangaName}&limit=5`,
        })
    }
    return {
        getTop,
        getGenre,
        getSearchMangaByName
    }
}