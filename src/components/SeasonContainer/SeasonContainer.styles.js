import styled from 'styled-components';

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const StyledSelectorDiv = styled.div`
    margin-bottom: 30px;
    margin-left: 30px;
    select {
        width: 200px;
        height: 50px;
        font-size: 20px;
        font-weight: lighter;
        line-height: 30px;
        color: rgb(220, 221, 222);
        background-color: rgb(35, 39, 42);
        cursor: pointer;
        border-radius: 6px;
        padding: 3px 31px 3px 16px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(220, 221, 222);
        border-image: initial;
        cursor: pointer;
    }
    @media screen and (max-width: 768px) {
        select {
            width: 150px;
            height: 30px;
            font-size: 14px;
        }
    }
`;

export const StyledEpisodesDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 30px;
    @media screen and (max-width: 500px) {
        padding-left: 20px;
    }
`;