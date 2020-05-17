import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { DetailedStyledSection, DetailedImgDiv, DetailedLinks } from './DetailedView.styles';
import { useFetch } from '../../hooks/useFetch';
import DetailedCard from '../../components/DetailedCard/DetailedCard.component';
import CardContainer from '../../components/CardContainer/CardContainer.component';
import CastContainer from '../../components/CastContainer/CastContainer.component';
import InfoLinks from '../../components/InfoLinks/InfoLinks.component';

const DetailedView = ({ history, match, location }) => {

    const info = useFetch([match.params.media, match.params.id]);
    
    const { media, id } = match.params;
    let {section} = match.params;

    return (
        info && <DetailedStyledSection>
            <DetailedImgDiv>
                <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} />
            </DetailedImgDiv>
            <DetailedLinks>
                <InfoLinks media={media} id={id}/>
            </DetailedLinks>
    

            {section === 'info' && <DetailedCard data={info} />}
            {section === 'cast' && <CastContainer id={id} media={media}/>}
            {section === 'videos' && <p>Videos</p>}
            {section === 'similar' && <p>Similares</p>}
            {section === 'seasons' && <p>Temporadas</p>}

        </DetailedStyledSection>
    );
}

export default DetailedView;