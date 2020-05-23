import styled from 'styled-components';

export const StyledArticle = styled.article`
    
    color: lightgray;
    display: flex;
    flex-direction: column;
    width: 450px;
    margin: 5px;
    img {
        width: 100%;
        height: 253px;
    }
    h3 {
        margin: 20px 0px;
    }
    p {
        margin: 0px 0px 10px 0px;
    }
    @media screen and (max-width: 1024px) {
        width: 300px;
        img {
            height: 168px;
        }
    }
`;