import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { StyledVideoSection } from './VideoContainer.styles';

const VideoContainer = ({ match }) => {
    const info = useFetch([match.params.media, match.params.id, 'videos']);
    return (
        <StyledVideoSection>
            {info && info.results.map(each => (
                <iframe
                    id="player"
                    type="text/html"
                    width="640"
                    height="360"
                    src={`https://www.youtube.com/embed/${each.key}`}
                    frameBorder="0"
                    title={each.name}
                    key={each.id}
                />
            ))}
            {info && !info.results.length && <div style={{color: 'white'}}>No hay videos</div>}
        </StyledVideoSection>
    );
}

export default VideoContainer;