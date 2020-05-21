import { useState, useEffect } from 'react';

export const useFetch = (arr, obj = { query: '', page: '', with_genres: '' }) => {

    const [data, setData] = useState(null);

    const getApiUrl = () => {
        const urlBase = 'https://api.themoviedb.org/3/';
        let urlApi = new URL(urlBase);
        urlApi.pathname = [3, ...arr].join("/");
        urlApi.search = new URLSearchParams({
            api_key: process.env.REACT_APP_API_KEY,
            language: "EN",
            ...(obj.query && { query: obj.query }),
            ...(obj.page && { page: obj.page }),
            ...(obj.with_genres && { with_genres: obj.with_genres }),            
        });
        return urlApi;
    }
    useEffect(() => {
        fetch(getApiUrl())
            .then(res => res.json())
            .then(data => setData(data));
    }, [...arr, obj.query]);
    console.log(arr, obj)
    return data;
};
