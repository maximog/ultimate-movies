import styled from 'styled-components';

export const DetailedStyledSection = styled.section`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 450px) {
        
        
    }
`;

export const DetailedImgDiv = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 600px;
    img {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
    @media screen and (max-width: 800px) {
        height: 300px;
    }
`;

export const DetailedLinks = styled.div`
    margin: 30px;
    p {
        color: lightgray;
        margin: 20px;
        font-weight: 800;
        
        cursor: pointer;
        transition: 0.3s all;
        :hover {
            color: ivory;
            text-decoration: underline;
        }
    }
`;