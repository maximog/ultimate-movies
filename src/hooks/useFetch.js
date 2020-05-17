import { useState, useEffect } from 'react';

export const useFetch = (arr, obj = { query: '', page: '' }) => {

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
        });
        console.log(urlApi)
        return urlApi;
    }
    useEffect(() => {
        fetch(getApiUrl())
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    console.log(data)
    return data;
};
