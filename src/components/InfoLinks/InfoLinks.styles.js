import styled from 'styled-components';

export const StyledInfoLinkDiv = styled.div`
    display: flex;
    a {
        text-decoration: none;
        text-transform: uppercase;
        font-size: 24px;
        color: lightgray;
    }

    .selected {
        p {
            color: ivory;
            text-decoration: underline;
        }
    }
    
`;