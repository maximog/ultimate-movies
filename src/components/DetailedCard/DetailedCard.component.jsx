import React from 'react';
import {DetailedCardArticle, DetailedCardImgDiv, DetailedCardContent} from './DetailedCard.styles';

const DetailedCard = ({movie}) => {
    return (
        <DetailedCardArticle>
            <DetailedCardImgDiv>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
            </DetailedCardImgDiv>
            <DetailedCardContent>
                <h2>{movie.original_title}</h2>
                <p>Rating: {movie.vote_average}</p>
                <p>{movie.overview}</p>
                <p>Duracion: {movie.runtime} min</p>
                <p>Generos: {movie.genres.map(genre => genre.name)}</p>
                <p>Presupuesto: ${movie.budget}</p>
                <p>Recaudacion: ${movie.revenue}</p>
                <p>Produccion: {movie.production_companies.map(comp => comp.name)}</p>
            </DetailedCardContent>
        </DetailedCardArticle>
    );
}

export default DetailedCard;