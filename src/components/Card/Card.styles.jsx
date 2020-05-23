import styled from 'styled-components';

export const StyledArticle = styled.article`
    color: lightgray;
    display: flex;
    flex-direction: column;
    width: 280px;
    margin: 5px;
    cursor: pointer;
    a {
        text-decoration: none;
        color: lightgray;
    }
    img {
        width: 100%;
        height: 420px;
        transition: all 0.3s;
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
`;