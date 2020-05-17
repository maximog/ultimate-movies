import React from 'react';
import { Link } from 'react-router-dom';

const InfoLinks = ({media, id}) => {

    const endPoints = media === 'movie' ? ['info', 'cast', 'videos', 'similar'] : ['info', 'seasons/1', 'cast', 'similar'];
    const titles = media === 'movie' ? ['Info', 'Reparto', 'Videos', 'Similares'] : ['Info', 'Episodios', 'Reparto', 'Similares']; 


    return (
        <>
            <Link to={`/${media}/${id}/${endPoints[0]}`}>
                <p>{titles[0]}</p>
            </Link>
            <Link to={`/${media}/${id}/${endPoints[1]}`}>
                <p>{titles[1]}</p>
            </Link>
            <Link to={`/${media}/${id}/${endPoints[2]}`}>
                <p>{titles[2]}</p>
            </Link>
            <Link to={`/${media}/${id}/${endPoints[3]}`}>
                <p>{titles[3]}</p>
            </Link>
        </>
    );
}

export default InfoLinks;