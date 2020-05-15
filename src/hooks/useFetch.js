import { useState, useEffect } from 'react';

export const useFetch = (type) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const apiKey = process.env.REACT_APP_API_KEY;
        fetch(`https://api.themoviedb.org/3/trending/${type}/week?api_key=${apiKey}`)
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    console.log(data);
    return data;
};