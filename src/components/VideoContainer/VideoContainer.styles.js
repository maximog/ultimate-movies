import styled from 'styled-components';

export const StyledVideoSection = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 70px;
    iframe {
        margin: 10px 10px 10px 10px;
    }
    @media screen and (max-width: 600px) {
        margin-left: 10px;
}
`;