import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { DetailedStyledSection, DetailedImgDiv, DetailedLinks } from './DetailedView.styles';
import DetailedCard from '../../components/DetailedCard/DetailedCard.component';
import CardContainer from '../../components/CardContainer/CardContainer.component';
import CastContainer from '../../components/CastContainer/CastContainer.component';
import { useFetch } from '../../hooks/useFetch';

const DetailedTv = ({ history, match, location }) => {

    const info = useFetch(['tv', match.params.id]);

    const {id } = match.params;
    let {section} = match.params;

    return (
        info && <DetailedStyledSection>
            <DetailedImgDiv>
                <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} />
            </DetailedImgDiv>
            <DetailedLinks>
                <Link to={`/tv/${id}/info`}>
                    <p>Info</p>
                </Link>
                <Link to={`/tv/${id}/cast`}>
                    <p>Reparto</p>
                </Link>
                <Link to={`/tv/${id}/videos`}>
                    <p>Videos</p>
                </Link>
                <Link to={`/tv/${id}/similar`}>
                    <p>Similares</p>
                </Link>
            </DetailedLinks>
    
            {section === 'info' && <DetailedCard data={info} />}
            {section === 'cast' && <CastContainer id={id} media='tv'/>}
            {section === 'videos' && "Videos"}
            {section === 'similar' && "Similares"}

          
        </DetailedStyledSection>
    );
}

export default DetailedTv;