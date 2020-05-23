import React from 'react';
import { Link } from 'react-router-dom';
import { DetailedCardArticle, DetailedCardImgDiv, DetailedCardContent, DetailedExternalIds } from './DetailedCard.styles';
import Rating from '@material-ui/lab/Rating';
import NoImage from '../../assets/noimage280.jpg';
import ExternalIdContainer from '../ExternalIdContainer/ExternalIdContainer.component';
import ExternalId from '../ExternalId/ExternalId.component';

const DetailedCard = ({ data, type, match }) => {

    const img = type ? data.profile_path : data.poster_path;
    const title = data.original_title ? data.original_title : data.name;
    const content = type ? data.biography : data.overview;

    return (
        <DetailedCardArticle>
            <DetailedCardImgDiv>
                <img src={img ? `https://image.tmdb.org/t/p/original${img}` : NoImage} alt='' />
            </DetailedCardImgDiv>
            <DetailedCardContent>
                <h2>{title}</h2>
                {
                    !type &&
                    <p><Rating
                        name="half-rating-read"
                        value={data.vote_average / 2}
                        precision={0.5}
                        readOnly={true}
                        size='small'
                        style={{ color: 'ivory' }}
                    />
                    </p>}
                <p>{content}</p>
                {
                    !type &&
                    <>
                        {match.params.media === 'tv' ?
                            <>
                                <p>Temporadas: {data.number_of_seasons}</p>
                                <p>Episodios: {data.number_of_episodes}</p>
                                {data.episode_run_time[0] && <p>Duracion: {data.episode_run_time[0]} min</p>}
                            </> :
                            <p>Duracion: {data.runtime} min</p>
                        }
                        {!!data.genres.length && <p>Generos: {data.genres.map(genre => (
                            <Link
                                to={`/${match.params.media}/${genre.name}/${genre.id}/page/1`}
                                key={genre.id}
                            >
                                {genre.name}
                            </Link>
                        ))}
                        </p>}
                        {match.params.media === 'movie' ?
                            <>
                                {!!data.budget && <p>Presupuesto: ${data.budget.toLocaleString('en')}</p>}
                                {!!data.revenue && <p>Recaudacion: ${data.revenue.toLocaleString('en')}</p>}
                            </> :
                            null
                        }
                        {!!data.production_companies.length && <p>Produccion: {data.production_companies.map(comp => comp.name).join(', ')}</p>}
                    </>
                }
                {<DetailedExternalIds>
                    {type !== 'person' && <ExternalIdContainer match={match} />}
                    {type === 'person' && <ExternalId data={['imdb_id', data.imdb_id]} people={true} />}
                </DetailedExternalIds>}
            </DetailedCardContent>
        </DetailedCardArticle>
    );
}

export default DetailedCard;