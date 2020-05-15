import styled from 'styled-components';

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    .container-movies {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    h2 {
        display: flex;
        align-items: center;
        margin: 30px 10px;
        color: ivory;
        cursor: pointer;
        
    }
    margin-left: 20px;
    .cardcontainer-arrow-icon {
        height: 28px;
        width: auto;
        margin: 0px 0px 0px 10px;
        padding-top: 5px;
        fill: lightblue;
        
        :hover {
            fill: yellow;
        }
}
`;

