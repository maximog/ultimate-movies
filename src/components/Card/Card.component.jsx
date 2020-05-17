import React from 'react';
import { Link } from 'react-router-dom';
import { StyledArticle } from './Card.styles';

const Card = ({ movie: { poster_path, title, subtitle, id, media_type, name, profile_path, character }, type, cast }) => {
    const media = media_type ? media_type : type;
    const dest = cast ? "person" : media;
    const cardName = name ? name : title;
    const img = cast ? profile_path : poster_path;
    const sub = cast ? character : subtitle;
    return (
        <StyledArticle>
            {<Link to={`/${dest}/${id}/info`}>
                <img src={`https://image.tmdb.org/t/p/w500${img}`} />
                <h3>{cardName}</h3>
                {sub && <h4>{sub}</h4>}
            </Link>}
        </StyledArticle>
    );
}

export default Card;