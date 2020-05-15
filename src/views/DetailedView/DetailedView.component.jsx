import React from 'react';
import {DetailedStyledSection, DetailedImgDiv, DetailedLinks} from './DetailedView.styles';
import DetailedCard from '../../components/DetailedCard/DetailedCard.component';

const DetailedView = ({movie}) => {
    return(
        <DetailedStyledSection>
            <DetailedImgDiv>
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
            </DetailedImgDiv>
            <DetailedLinks>
                <p>Info</p>
                <p>Reparto</p>
                <p>Video</p>
                <p>Similares</p>
            </DetailedLinks>
            <div className='detailedview-cardinfo'>
                <DetailedCard movie={movie} />
            </div>
        </DetailedStyledSection>
    );
}

export default DetailedView;