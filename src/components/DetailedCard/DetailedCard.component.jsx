import React from 'react';
import {DetailedCardArticle, DetailedCardImgDiv, DetailedCardContent} from './DetailedCard.styles';

const DetailedCard = ({data, type}) => {
    const img = type ? data.profile_path : data.poster_path;
    const title = data.original_title ? data.original_title : data.name;
    const content = type ? data.biography : data.overview;
    return (
        <DetailedCardArticle>
            <DetailedCardImgDiv>
            <img src={`https://image.tmdb.org/t/p/original${img}`} alt=''/>
            </DetailedCardImgDiv>
            <DetailedCardContent>
                <h2>{title}</h2>
                {
                !type && 
                <p>Rating: {data.vote_average}</p>}
                <p>{content}</p>
                {
                !type && 
                <>
                <p>Duracion: {data.runtime} min</p>
                <p>Generos: {data.genres.map(genre => genre.name)}</p>
                <p>Presupuesto: ${data.budget}</p>
                <p>Recaudacion: ${data.revenue}</p>
                <p>Produccion: {data.production_companies.map(comp => comp.name)}</p>
                </>
                }
            </DetailedCardContent>
        </DetailedCardArticle>
    );
}

export default DetailedCard;