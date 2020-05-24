import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Switch, Route } from 'react-router-dom';
import InfoLinks from '../../components/InfoLinks/InfoLinks.component';
import { DetailedStyledSection, DetailedImgDiv, DetailedLinks } from './DetailedView.styles';

const DetailedCard = lazy(() => import('../../components/DetailedCard/DetailedCard.component'));
const CastContainer = lazy(() => import('../../components/CastContainer/CastContainer.component'));
const SeasonContainer = lazy(() => import('../../components/SeasonContainer/SeasonContainer.component'));
const VideoContainer = lazy(() => import('../../components/VideoContainer/VideoContainer.component'));

const DetailedView = ({ match }) => {

    const info = useFetch([match.params.media, match.params.id]);
    const [selection, setSelection] = useState('info');

    useEffect(() => {
        setSelection(match.params.section)
    }, [match]);

    const { media, id } = match.params;

    return (
        info && <DetailedStyledSection >
            {info.backdrop_path &&
                <DetailedImgDiv>
                    <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} alt='main' />
                </DetailedImgDiv>}
            <DetailedLinks>
                <InfoLinks selection={selection} media={media} id={id} match={match} />
            </DetailedLinks>
            <Suspense fallback={<div style={{ color: 'white' }}>Loading....</div>}>
                <Switch>
                    <Route exact path={`/:media/:id/info`} render={(props) => <DetailedCard data={info} {...props} />} />
                    <Route exact path={`/${media}/${id}/cast`} render={() => <CastContainer apiCall={[media, id, 'credits']} cardType={'cast'} />} />
                    <Route exact path={`/${media}/${id}/similar`} render={() => <CastContainer apiCall={[media, id, 'similar']} cardType={'media'} type={media} />} />
                    <Route exact path={`/${media}/${id}/seasons/:seasonNumber`} render={(props) => <SeasonContainer id={id} data={info} {...props} />} />
                    <Route exact path={`/:media/:id/videos`} render={(props) => <VideoContainer {...props} />} />
                </Switch>
            </Suspense>
        </DetailedStyledSection>
    );
}

export default DetailedView;