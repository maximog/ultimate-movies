import React from 'react';
import {DetailedCardArticle, DetailedCardImgDiv, DetailedCardContent} from './DetailedCard.styles';

const DetailedCard = ({data}) => {
    const title = data.original_title ? data.original_title : data.name;
    return (
        <DetailedCardArticle>
            <DetailedCardImgDiv>
            <img src={`https://image.tmdb.org/t/p/original${data.poster_path}`} />
            </DetailedCardImgDiv>
            <DetailedCardContent>
                <h2>{title}</h2>
                <p>Rating: {data.vote_average}</p>
                <p>{data.overview}</p>
                <p>Duracion: {data.runtime} min</p>
                <p>Generos: {data.genres.map(genre => genre.name)}</p>
                <p>Presupuesto: ${data.budget}</p>
                <p>Recaudacion: ${data.revenue}</p>
                <p>Produccion: {data.production_companies.map(comp => comp.name)}</p>
            </DetailedCardContent>
        </DetailedCardArticle>
    );
}

export default DetailedCard;