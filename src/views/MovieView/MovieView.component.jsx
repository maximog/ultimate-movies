import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import CardContainer from '../../components/CardContainer/CardContainer.component';

const MovieView = ({match}) => {
    const popular = useFetch(['movie', 'popular']);
    const topRated = useFetch(['movie', 'top_rated']);
    const upcoming = useFetch(['movie', 'upcoming']);
    const nowPlaying = useFetch(['movie', 'now_playing']);
 
    return(
        <div>
            {popular && <CardContainer title={"Peliculas Populares"} movies={popular.results} link='/movie/popular/page/1' type='movie'/>}
            {topRated && <CardContainer title={"Peliculas con Mejores Criticas"} movies={topRated.results} link='/movie/top_rated/page/1' type='movie'/>}
            {upcoming && <CardContainer title={"Peliculas a Estrenarse"} movies={upcoming.results} link='/movie/upcoming/page/1' type='movie'/>}
            {nowPlaying && <CardContainer title={"Peliculas En Cines"} movies={nowPlaying.results} link='/movie/now_playing/page/1' type='movie'/>}
        </div>
    );
};

export default MovieView;

