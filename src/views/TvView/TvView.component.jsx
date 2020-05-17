import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import CardContainer from '../../components/CardContainer/CardContainer.component';

const TvView = () => {
    const popular = useFetch(['tv', 'popular']);
    const topRated = useFetch(['tv', 'top_rated']);
    const onTheAir = useFetch(['tv', 'on_the_air']);
    return(
        <div>
            {popular && <CardContainer title={"Series Populares"} movies={popular.results} link='/tv/popular/page/1' type='tv'/>}
            {topRated && <CardContainer title={"Series con Mejores Criticas"} movies={topRated.results} link='/tv/top_rated/page/1' type='tv'/>}
            {onTheAir && <CardContainer title={"Series al Aire"} movies={onTheAir.results} link='/tv/on_the_air/page/1' type='tv'/>}
        </div>
    );
};

export default TvView;