import React from 'react';
import CardContainer from '../CardContainer/CardContainer.component';
import { useFetch } from '../../hooks/useFetch';


const CastContainer = ({ apiCall, cast, type }) => {
    const data = useFetch([...apiCall]);
    const results = cast ? 'cast' : 'results';
    return (
        <section>
            {data && <CardContainer movies={data[results]} cast={cast} type={type}/>}
        </section>
    );
}

export default CastContainer;