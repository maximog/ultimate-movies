import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import CardContainer from '../../components/CardContainer/CardContainer.component';


const HomeView = props => {
    const movies = useFetch(['trending', 'movie', 'week']);
    const series = useFetch(['trending', 'tv', 'week']);
    return(
            <>
        {   movies && series &&
            <>
              <CardContainer title={"Peliculas que son Tendencia"} movies={movies.results} link={'movie/trending/page/1'} type='movie'/>
              <CardContainer title={"Series que son Tendencia"} movies={series.results} link={'tv/trending/page/1'} type='tv'/>
            </>
          }
          </>
    );
}


export default HomeView;


