import styled from 'styled-components';

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    margin-left: 70px;
`;

export const StyledEpisodesDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const StyledSelectorDiv = styled.div`
    margin-bottom: 30px;
    select {
        border-radius: 5px;
        border: 0.5px solid grey;
        
        background-color: rgb(35, 39, 21);
        height: 30px;
        color: grey;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
    
    cursor: pointer;
    }
`;