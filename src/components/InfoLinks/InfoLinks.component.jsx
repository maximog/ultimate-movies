import React from 'react';
import { Link } from 'react-router-dom';
import { StyledInfoLinkDiv } from './InfoLinks.styles';

const InfoLinks = ({ media, id, match }) => {

    const endPoints = media === 'movie' ? ['info', 'cast', 'videos', 'similar'] : ['info', 'seasons/1', 'cast', 'similar'];
    const titles = media === 'movie' ? ['Info', 'Reparto', 'Videos', 'Similares'] : ['Info', 'Episodios', 'Reparto', 'Similares'];

    console.log(match)
    return (
        <StyledInfoLinkDiv>
            {endPoints.map((each, i) => (
                <Link to={`/${media}/${id}/${each}`} key={`${media}-${id}-${each}`}>
                    <p>{titles[i]}</p>
                </Link>
            ))}
        </StyledInfoLinkDiv>
    );
}

export default InfoLinks;