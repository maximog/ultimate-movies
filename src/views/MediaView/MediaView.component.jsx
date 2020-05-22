import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import CardContainer from '../../components/CardContainer/CardContainer.component';
import Pagination from '@material-ui/lab/Pagination';
import { useHistory } from 'react-router-dom';
import { StyledMediaViewDiv } from './MediaView.styles';

const MediaView = ({ match }) => {

    //When fetching for 'trending' media, the apicall words have to be rearranged
    let search = (match.params.type === "trending") ?
        [match.params.type, match.params.media, 'week']
        :
        [match.params.media, match.params.type];
    //If fetching for a search query, apicall words are set. If not, check if it's fetching for genres, if not, leave search unchanged.
    search = match.params.media === 'multi' ?
        ['search', 'multi']
        :
        (match.params.genreName ?
            ['discover', `${match.params.media}`]
            :
            search
        );

    const history = useHistory();
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
            title = match.params.media === 'multi' ? `Resultados para: "${match.params.type}"` : `Genero: ${match.params.genreName}`;
            break;
    }

    const data = useFetch(search, {
        page: match.params.pageNumber,
        ...(match.params.media === 'multi' && { query: match.params.type }),
        ...(match.params.genreNumber && { with_genres: match.params.genreNumber })
    });

    const handleChange = (e, page) => {
        !match.params.genreName ?
            history.push(`/${match.params.media}/${match.params.type}/page/${page}`)
            :
            history.push(`/${match.params.media}/${match.params.genreName}/${match.params.genreNumber}/page/${page}`);
    };
    
    return (
        <StyledMediaViewDiv>
            {data && <CardContainer title={title} movies={data.results} type={match.params.media} cardType='media' />}
            {data && <Pagination count={data.total_pages} color="primary" page={data.page} onChange={handleChange} showFirstButton showLastButton />}
        </StyledMediaViewDiv>
    );
};

export default MediaView;