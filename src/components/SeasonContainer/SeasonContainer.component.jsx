import React, { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useHistory } from 'react-router-dom';
import Episode from '../Episode/Episode.component';
import { StyledSection, StyledEpisodesDiv, StyledSelectorDiv } from './SeasonContainer.styles';

const SeasonContainer = ({ match, id, data }) => {

    const [season, setSeason] = useState(match.params.seasonNumber)
    const apiCall = ['tv', id, 'season', season];
    const info = useFetch([...apiCall]);
    const history = useHistory();

    useEffect(() => {
        setSeason(match.params.seasonNumber);
    }, [match]);

    const handleChange = (e) => {
        history.push(`/tv/${id}/seasons/${e.target.value}`)
    };

    return (
        <StyledSection>
            <StyledSelectorDiv>
                <select name="seasons" id="seasons" value={season} onChange={handleChange}>
                    {data.seasons.map(season => (
                        <option
                            key={season.id}
                            value={`${season.season_number}`}
                        >
                            Temporada {season.season_number}
                        </option>
                    ))}
                </select>
            </StyledSelectorDiv>
            <StyledEpisodesDiv>
                {info && info.episodes.map(each => <Episode info={each} key={each.id} />)}
            </StyledEpisodesDiv>
        </StyledSection>
    );
}

export default SeasonContainer;