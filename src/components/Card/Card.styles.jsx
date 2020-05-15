import styled from 'styled-components';

export const StyledArticle = styled.article`
    a {
        text-decoration: none;
        color: ivory;
    }
    color: ivory;
    display: flex;
    flex-direction: column;
    width: 280px;
    height: auto;
    margin: 5px;
    img {
        width: 100%;
        height: auto;
        transition: all 0.3s;
       
    }
    cursor: pointer;
    :hover{
            img {
            transform: scale(1.05);
            }
        }
    
`;