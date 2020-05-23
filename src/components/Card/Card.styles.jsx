import styled from 'styled-components';

export const StyledArticle = styled.article`
    color: lightgray;
    display: flex;
    flex-direction: column;
    width: 280px;
    margin: 20px 10px;
    cursor: pointer;
    a {
        text-decoration: none;
        color: lightgray;
    }
    img {
        width: 100%;
        height: 420px;
        transition: all 0.3s;
        margin-bottom: 20px;
    }
    :hover {
        img {
            transform: scale(1.05);
        }
        h3 {
            color: ivory;
        }
        h4 {
            color: ivory;
        }
    }
    h3 {
        font-weight: lighter;
        font-size: 22px;
    }
    h4 {
        font-weight: lighter;
    }
    
    @media screen and (max-width: 630px) {
        width: 100px;
        img {
            height: 150px;
        }
        h3 {
            font-size: 18px;
        }
        h4 {
            font-size: 14px;
        }
    }
    @media screen and (max-width: 450px) {
    }
`;