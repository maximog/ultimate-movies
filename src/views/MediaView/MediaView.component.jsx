import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import CardContainer from '../../components/CardContainer/CardContainer.component';

const MediaView = ({ match = { params: '' } }) => {

    let search = (match.params.type === "trending") ? [match.params.type, match.params.media, 'week'] : [match.params.media, match.params.type];

    search = match.params.media === 'multi' ? ['search', 'multi'] : search;

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
            title = `Resultados para: ${match.params.type}`;
            break;
    }

    const data = useFetch(search, {
        page: match.params.pageNumber,
        ...(match.params.media === 'multi' && { query: match.params.type })
    });
    return (
        <div>
            {data && <CardContainer title={title} movies={data.results} type={match.params.media} cardType='media' />}
        </div>
    );
};

export default MediaView;