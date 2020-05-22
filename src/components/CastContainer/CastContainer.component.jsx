import React from 'react';
import CardContainer from '../CardContainer/CardContainer.component';
import { useFetch } from '../../hooks/useFetch';


const CastContainer = ({ apiCall, type, cardType }) => {
    const data = useFetch([...apiCall]);
    
    let results = 'results';

    switch (cardType) {
        case 'cast':
        case 'credits':
            results = 'cast';
            break;
        case 'media':
            results = 'results';
            break;
        default:
            break;
    }
    return (
        <section>
            {data && <CardContainer movies={data[results]} type={type} cardType={cardType}/>}
        </section>
    );
}

export default CastContainer;