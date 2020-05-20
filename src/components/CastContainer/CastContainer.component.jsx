import React from 'react';
import CardContainer from '../CardContainer/CardContainer.component';
import { useFetch } from '../../hooks/useFetch';


const CastContainer = ({ apiCall, cast, type, cardType }) => {
    const data = useFetch([...apiCall]);
    const results = cast ? 'cast' : 'results';
    console.log(data)
    return (
        <section>
            {data && <CardContainer movies={data[results]} cast={cast} type={type} cardType={cardType}/>}
        </section>
    );
}

export default CastContainer;