import React from 'react';
import NoImage from '../../assets/noimage280.jpg';
import {StyledArticle} from './Episode.styles';

const Episode = ({info}) => {
    return (
        <StyledArticle>
            <img src={info.still_path ? `https://image.tmdb.org/t/p/w500${info.still_path}` : NoImage} alt='' />
            <h3>EP {info.episode_number} - {info.name && info.name}</h3>
            <p>{info.overview}</p>
        </StyledArticle>
    );
}

export default Episode;