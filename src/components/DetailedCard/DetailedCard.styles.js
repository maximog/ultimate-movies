import styled from 'styled-components';

export const DetailedCardArticle = styled.article`
    display: flex;
    flex-direction: row;
    margin: 50px;
    @media screen and (max-width: 600px) {
        flex-direction: column;
        justify-content: left;
        margin: 20px;
        margin-top: 5px;
    }
`;

export const DetailedCardImgDiv = styled.div`
    
    img {
        width: 300px;
        height: auto;
    }
`;

export const DetailedCardContent = styled.div`
    margin-left: 20px;
    width: 40%;
    color: lightgray;
    h2 {
        margin: 0px 0px 20px 0px;
        font-size: 30px;
        font-weight: 400;
    }
    
    p {
        margin: 10px 0px;
        a {
            margin-right: 5px;
            margin-left: 5px;
            text-decoration: none;
            color: blueviolet;
        }
    }
    @media screen and (max-width: 600px) {
        margin-left: 0;
        width: 80%;
        h2 {
            margin-top: 20px;
        }
    }
`;

export const StyledGenreP = styled.p`
    display: flex;
    flex-wrap: wrap;
`;

export const DetailedExternalIds = styled.div`
    .ext-id {
        color: lightgray;
        font-size: 28px;
    }
`;