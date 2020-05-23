import React from 'react';
import CardContainer from '../CardContainer/CardContainer.component';
import { useFetch } from '../../hooks/useFetch';
import {StyledCastSection} from './CastContainer.styles';


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
        <StyledCastSection>
            {data && <CardContainer movies={data[results]} type={type} cardType={cardType} />}
        </StyledCastSection>
    );
}

export default CastContainer;