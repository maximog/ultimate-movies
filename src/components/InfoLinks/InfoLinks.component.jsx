import React from 'react';
import { Link } from 'react-router-dom';
import { StyledInfoLinkDiv } from './InfoLinks.styles';

const InfoLinks = ({ media, id, match, selection }) => {
    
    let type = media ? media : 'person';
    let endPoints = media === 'movie' ? ['info', 'cast', 'videos', 'similar'] : ['info', 'seasons/1', 'cast', 'similar'];
    let titles = media === 'movie' ? ['Info', 'Reparto', 'Videos', 'Similares'] : ['Info', 'Episodios', 'Reparto', 'Similares'];

    endPoints = media ? endPoints : ['info', 'credits'];
    titles = media ? titles : ['Informacion', "Creditos"]

    return (
        <StyledInfoLinkDiv>
            {endPoints.map((each, i) => (
                <Link to={`/${type}/${id}/${each}`} key={`${type}-${id}-${each}`} className={each.includes(selection)? 'selected' : ''}>
                    <p>{titles[i]}</p>
                </Link>
            ))}
        </StyledInfoLinkDiv>
    );
}

export default InfoLinks;