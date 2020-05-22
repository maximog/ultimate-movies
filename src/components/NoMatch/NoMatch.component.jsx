import React from 'react';
import {ErrorImageContainer, ErrorImageText, ErrorImageOverlay} from '../error-boundary/error-boundary.styles';

const NoMatch = props => {
    return (
        <ErrorImageOverlay>
            <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
            <ErrorImageText>Sorry, this page doesn't exist</ErrorImageText>
        </ErrorImageOverlay>
    );
}

export default NoMatch;