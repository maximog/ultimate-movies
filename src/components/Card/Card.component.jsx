import React from 'react';
import { Link } from 'react-router-dom';
import { StyledArticle } from './Card.styles';
import NoImage from '../../assets/noimage280.jpg';


const Card = ({ movie: { poster_path, title, subtitle, id, media_type, name, profile_path, character }, type, cardType }) => {
    
    const media = media_type ? media_type : type;

    let params = {
        cardName: name,
        dest: media,
        img: poster_path,
        sub: subtitle
    };

    switch (cardType) {
        case 'cast':
            params = {
                cardName: name,
                dest: 'person',
                img: profile_path,
                sub: character
            }
            break;
        case 'media':
            params = {
                cardName: name ? name : title,
                dest: media,
                img: poster_path,
                sub: subtitle
            }
            break;
        case 'credits':
            params = {
                cardName: title,
                dest: media,
                img: poster_path,
                sub: character
            }
            break;
        default:
            break;
    }
    const { cardName, dest, img, sub } = params;
    return (
        <StyledArticle>
            {<Link to={`/${dest}/${id}/info`}>
                <img src={img ? `https://image.tmdb.org/t/p/w500${img}` : NoImage} alt='' />
                <h3>{cardName}</h3>
                {sub && <h4>{sub}</h4>}
            </Link>}
        </StyledArticle>
    );
}

export default Card;