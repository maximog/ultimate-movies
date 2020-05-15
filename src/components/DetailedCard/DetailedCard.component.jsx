import React from 'react';
import {DetailedCardArticle, DetailedCardImgDiv, DetailedCardContent} from './DetailedCard.styles';

const DetailedCard = ({movie}) => {
    return (
        <DetailedCardArticle>
            <DetailedCardImgDiv>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
            </DetailedCardImgDiv>
            <DetailedCardContent>
                <h2>Nombre Pelicula</h2>
                <p>Rating de estrellas</p>
                <p>Descripcion</p>
                <p>Duracion: XXX min</p>
                <p>Generos: ADASD, aDASDA</p>
                <p>Presupuesto: $340923049</p>
                <p>Recaudacion: $1329129319239</p>
                <p>Produccion: asdaskdadkajsd</p>
            </DetailedCardContent>
        </DetailedCardArticle>
    );
}

export default DetailedCard;