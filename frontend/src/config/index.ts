import axios, { AxiosRequestConfig } from "axios";

export const getAiringAPI = () => {
    return fetch(`https://api.jikan.moe/v4/manga/7/recommendations`).then((res) =>
        res.json().then((results) => Promise.resolve(results))
    );
};
export const getAiringAPI2 = () => {
    return fetch(`https://api.jikan.moe/v4/manga/98/recommendations`).then((res) =>
        res.json().then((results) => Promise.resolve(results))
    );
};
export const getAiringAPI3 = () => {
    return fetch(`https://api.jikan.moe/v4/manga/99/recommendations`).then((res) =>
        res.json().then((results) => Promise.resolve(results))
    );
};

export const getTopAPI = (num: any) => {
    return fetch(`https://api.jikan.moe/v4/top/anime?page=${num}`)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("Something went wrong");
            }
        })
        .then((results) => Promise.resolve(results));
};
export const getSearchAPI = (
    keyword: any,
    num: any,
    limit: any
) => {
    return fetch(
        `https://api.jikan.moe/v4/manga?${keyword ? `q=${keyword}` : ""}${num ? `&page=${num}` : ""}${limit ? `&limit=${limit}` : ""}`
    )
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("Something went wrong");
            }
        })
        .then((results) => Promise.resolve(results));
};


export const getGenreAPI = (
    mal_id: any
) => {
    return fetch(
        `https://api.jikan.moe/v4/manga?genres${mal_id}`
    )
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("Something went wrong");
            }
        })
        .then((results) => Promise.resolve(results));
};

export const BASE_URL = 'https://api.jikan.moe/v4';

export const requestBackend = (config: AxiosRequestConfig) => {

    return axios({ ...config, baseURL: BASE_URL })
}






// export const getSearchAPI = (
//     keyword: any,
//     num: any,
//     order_by: any,
//     sort: any,
//     type: any,
//     status: any,
//     rating: any
// ) => {
//     return fetch(
//         `https://api.jikan.moe/v4/manga?${keyword ? `q=${keyword}` : ""}${num ? `&page=${num}` : ""
//         }&sfw${order_by ? `&order_by=${order_by}` : ""}${sort ? `&sort=${sort}` : ""
//         }${type ? `&type=${sort}` : ""}${status ? `&status=${status}` : ""}${rating ? `&rating=${rating}` : ""
//         }`
//     )
//         .then((res) => {
//             if (res.ok) {
//                 return res.json();
//             } else {
//                 throw new Error("Something went wrong");
//             }
//         })
//         .then((results) => Promise.resolve(results));
// };

export const getTodayAPI = () => {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const d = new Date();
    let day = weekday[d.getDay()];
    return fetch(`https://api.jikan.moe/v4/schedules?filter=${day}`).then(
        (res) => res.json().then((results) => Promise.resolve(results))
    );
};

export const getScheduleAPI = (day: any, num: any) => {
    return fetch(
        `https://api.jikan.moe/v4/schedules?filter=${day}&page=${num}&sfw`
    ).then((res) => res.json().then((results) => Promise.resolve(results)));
};

export const getDetailsAPI = (id: any) => {
    return fetch(`https://api.jikan.moe/v4/manga/${id}`).then((res) =>
        res.json().then((results) => Promise.resolve(results))
    );
};

export const getPicturesAPI = (id: any) => {
    return fetch(`https://api.jikan.moe/v4/manga/${id}/pictures`).then((res) =>
        res.json().then((results) => Promise.resolve(results))
    );
};

export const getEpisodesAPI = (id: any) => {
    return fetch(`https://api.jikan.moe/v4/anime/${id}/episodes`).then((res) =>
        res.json().then((results) => Promise.resolve(results))
    );
};

export const getReviewsAPI = (id: any) => {
    return fetch(`https://api.jikan.moe/v4/anime/${id}/reviews`).then((res) =>
        res.json().then((results) => Promise.resolve(results))
    );
};

export const getRecommendationsAPI = (id: any) => {
    return fetch(`https://api.jikan.moe/v4/manga/${id}/recommendations`).then(
        (res) => res.json().then((results) => Promise.resolve(results))
    );
};

export const getCharactersAPI = (id: any) => {
    return fetch(`https://api.jikan.moe/v4/manga/${id}/characters`).then(
        (res) => res.json().then((results) => Promise.resolve(results))
    );
};



