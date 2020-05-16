import React from 'react';
import { Link } from 'react-router-dom';
import { StyledArticle } from './Card.styles';

const Card = ({ movie: { poster_path, title, subtitle, id, media_type }, type }) => {
    return (
        <StyledArticle>
            <Link to={`/${media_type}/${id}/info`}>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
                <h3>{title}</h3>
                {subtitle && <h4>{subtitle}</h4>}
            </Link>
        </StyledArticle>
    );
}

export default Card;