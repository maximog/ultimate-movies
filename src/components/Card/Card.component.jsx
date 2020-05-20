import React from 'react';
import { Link } from 'react-router-dom';
import { StyledArticle } from './Card.styles';
import NoImage from '../../assets/noimage280.jpg';


const Card = ({ movie: { poster_path, title, subtitle, id, media_type, name, profile_path, character }, type, cast, cardType }) => {
    const media = media_type ? media_type : type;
    const dest = cast ? "person" : media;
    const img = cast ? profile_path : poster_path;
    const cardName = name ? name : title;
    let sub = cast ? character : subtitle;
    sub = cardType ? character : sub;

    console.log('hola')
    // let params = {
    //     cardName: name,
    //     dest: media,
    //     img: poster_path,
    //     sub: subtitle
    // };

    // switch (cardType) {
    //     case 'cast':
    //         params = {
    //             cardName: title,
    //             dest: 'person',
    //             img: profile_path,
    //             sub: character
    //         }
    //         break;
    //     case 'media':
    //         params = {
    //             cardName: title,
    //             dest: media,
    //             img: poster_path,
    //             sub: subtitle
    //         }
    //         break;
    //     case 'person':
    //         params = {
    //             cardName: title,
    //             dest: media,
    //             img: poster_path,
    //             sub: character 
    //         }
    //     default:
    //         break;
    // }
   
    return (
        <StyledArticle>
            {<Link to={`/${dest}/${id}/info`}>
                <img src={img ? `https://image.tmdb.org/t/p/w500${img}` : NoImage} alt=''/>
                <h3>{cardName}</h3>
                {sub && <h4>{sub}</h4>}
            </Link>}
        </StyledArticle>
    );
}

export default Card;