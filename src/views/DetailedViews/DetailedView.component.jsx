import React, {useState, useEffect} from 'react';
import { DetailedStyledSection, DetailedImgDiv, DetailedLinks } from './DetailedView.styles';
import { useFetch } from '../../hooks/useFetch';
import DetailedCard from '../../components/DetailedCard/DetailedCard.component';
import CastContainer from '../../components/CastContainer/CastContainer.component';
import InfoLinks from '../../components/InfoLinks/InfoLinks.component';
import { Switch, Route } from 'react-router-dom';
import SeasonContainer from '../../components/SeasonContainer/SeasonContainer.component';

const DetailedView = ({ match }) => {

    const info = useFetch([match.params.media, match.params.id]);

    const [selection, setSelection] = useState('info');

    useEffect(() => {
        setSelection(match.params.section)
    }, [match]);

    const { media, id } = match.params;
    let {section} = match.params;
    return (
        info && <DetailedStyledSection >
            <DetailedImgDiv>
                <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} alt=''/>
            </DetailedImgDiv>
            <DetailedLinks>
                <InfoLinks selection={selection} media={media} id={id} match={match}/>
            </DetailedLinks>
            <Switch>
                <Route exact path={`/${media}/${id}/info`} render={()=> <DetailedCard data={info} />} />
                <Route exact path={`/${media}/${id}/cast`} render={()=> <CastContainer apiCall={[media, id, 'credits']} cardType={'cast'} />} />
                <Route exact path={`/${media}/${id}/similar`} render={()=> <CastContainer apiCall={[media, id, 'similar']} cardType={'media'} type={media}/>} />
                <Route exact path={`/${media}/${id}/seasons/:seasonNumber`} render={(props)=> <SeasonContainer id={id} data={info} {...props}/>} />
            </Switch>
            {section === 'videos' && <p>Videos</p>}
        </DetailedStyledSection>
    );
}

export default DetailedView;