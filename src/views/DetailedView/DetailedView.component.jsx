import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { DetailedStyledSection, DetailedImgDiv, DetailedLinks } from './DetailedView.styles';
import DetailedCard from '../../components/DetailedCard/DetailedCard.component';
import CardContainer from '../../components/CardContainer/CardContainer.component';
import CastContainer from '../../components/CastContainer/CastContainer.component';

const DetailedView = ({ history, match, location }) => {

    const [movie, setMovie] = useState('');
    const apiKey = process.env.REACT_APP_API_KEY;
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${apiKey}&language=en-US`)
            .then(res => res.json())
            .then(data => setMovie(data));
    }, []);

    const { id, type } = match.params;
    console.log(movie, 'movie')
    console.log(match, 'match')
    console.log(history, 'history')
    console.log(location, 'location')
    return (
        movie && <DetailedStyledSection>
            <DetailedImgDiv>
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
            </DetailedImgDiv>
            <DetailedLinks>
                <Link to={`/${type}/${id}/info`}>
                    <p>Info</p>
                </Link>
                <Link to={`/${type}/${id}/cast`}>
                    <p>Reparto</p>
                </Link>
                <Link to={`/${type}/${id}/videos`}>
                    <p>Videos</p>
                </Link>
                <Link to={`/${type}/${id}/similar`}>
                    <p>Similares</p>
                </Link>
            </DetailedLinks>
            <Switch>
                <Route path={`/${type}/${id}/info`} >                    
                    <DetailedCard movie={movie} />
                </Route>
                <Route path={`/${type}/${id}/cast`} >                    

                    <CastContainer id={id} />
                </Route>
            </Switch>
        </DetailedStyledSection>
    );
}

export default DetailedView;