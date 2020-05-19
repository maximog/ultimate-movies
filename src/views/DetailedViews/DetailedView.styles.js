import styled from 'styled-components';

export const DetailedStyledSection = styled.section`
display: flex;
flex-direction: column;
`;

export const DetailedImgDiv = styled.div`
box-sizing: border-box;
width: 100%;
height: 600px;
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`;

export const DetailedLinks = styled.div`
display: flex;
margin: 30px;
justify-content: center;
p {
    color: grey;
    margin: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 800;
    
    cursor: pointer;
    transition: 0.3s all;
    :hover {
        color: ivory;
        text-decoration: underline;
    }
}
`;