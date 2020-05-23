import styled from 'styled-components';

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    
    .title {
        width: 450px;
    }
    a {
        text-decoration: none;
        cursor: pointer;
        h2:hover {
            color: ivory;
        }
    }
    .container-movies {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    h2 {
        display: flex;
        align-items: center;
        margin: 30px 10px;
        font-weight: lighter;
        color: lightgray;
        font-size: 28px; 
    }
    margin-left: 20px;
    .cardcontainer-arrow-icon {
        height: 28px;
        width: auto;
        margin: 0px 0px 0px 10px;
        padding-top: 5px;
        fill: lightblue;
}
`;

export const StyledTitleDiv = styled.div`
    width: 450px;
`;

export const StyledMoviesDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: ${props => props.noWrap ? 'no-wrap' : 'wrap'};
`;