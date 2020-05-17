import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import CardContainer from '../../components/CardContainer/CardContainer.component';

const MediaView = ({match = {params: ''}}) => {
    console.log(match)
    // const [media, type] = match.params;
    
    const search = (match.params.type === "trending") ? [match.params.type, match.params.media, 'week'] : [match.params.media, match.params.type];
    
    let title = '';
    switch (match.params.type) {
        case 'trending':
            title = (match.params.media === 'tv' ? "Series en Tendencia" : "Peliculas en Tendencia");
            break;
        case 'popular':
            title = (match.params.media === 'tv' ? "Series Populares" : "Peliculas Populares");
            break;
        case 'top_rated':
            title = (match.params.media === 'tv' ? "Series con Mejores Criticas" : "Peliculas con Mejores Criticas");
            break;
        case 'upcoming':
            title = 'Peliculas a Estrenarse';
            break;
        case 'now_playing':
            title = 'Peliculas en Cines';
            break;
        case 'on_the_air':
            title = 'Series al Aire';
            break;
        default:
            title = "Resultados";
            break;
    }


    const data = useFetch(search, {page: match.params.pageNumber});
    return(
        <div>
            {data && <CardContainer title={title} movies={data.results} type={match.params.media}/>}
        </div>
    );
};

export default MediaView;