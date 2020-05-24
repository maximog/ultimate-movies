import styled from 'styled-components';

export const StyledInfoLinkDiv = styled.div`
    justify-content: center;
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
    @media screen and (max-width: 500px) {
        flex-direction: column;
        justify-content: left;
        a {
            p {
                margin-left: 0;
            }
        }
    }
`;