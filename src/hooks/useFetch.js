import { useState, useEffect } from 'react';

export const useFetch = (arr, obj = { query: '', page: '' }) => {

    const [data, setData] = useState(null);

    // const {query, page} = obj;
    // const [media, type, extra, seasonNumber] = arr;


    const getApiUrl = () => {
        const urlBase = 'https://api.themoviedb.org/3/';
        let urlApi = new URL(urlBase);
        urlApi.pathname = [3, ...arr].join("/");
        urlApi.search = new URLSearchParams({
            api_key: process.env.REACT_APP_API_KEY,
            language: "EN",
            ...(obj.query && {query: obj.query}),
            ...(obj.page && {page: obj.page}),
        });
        console.log(urlApi)
      

        return urlApi;
    }

    console.log(getApiUrl(), "GETAPIURL")

    //     const getApiUrl = (endpoint, language) =>
    //   `${URL_BASE}${endpoint}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`



    useEffect(() => {
        // const apiKey = process.env.REACT_APP_API_KEY;
        // fetch(`https://api.themoviedb.org/3/trending/${arr[1]}/week?api_key=${apiKey}`, {
        //     method: 'GET',
        //     headers: {
        //         'Authorization': `Bearer ${process.env.REACT_APP_API_BEARER_TOKEN}`,
        //         'Content-Type': 'application/json;charset=utf-8'
        //     }
        // })
        fetch(getApiUrl())
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    console.log(data);
    return data;
};


// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US