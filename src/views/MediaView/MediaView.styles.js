import styled from 'styled-components';

export const StyledMediaViewDiv = styled.div`
    .MuiPagination-root {
        padding-top: 20px;
        padding-bottom: 50px;
    }
    .MuiPagination-ul {
        justify-content: center;
        
    };
    .MuiPaginationItem-root {
        color: lightgray;
        font-size: 20px;
        font-family: 'Roboto Condensed', sans-serif;
    };
    .MuiSvgIcon-root {
        width: 2em;
        height: 2em;
    };
    .MuiPaginationItem-icon {
        margin: -10px -8px;
    }
    .MuiPaginationItem-textPrimary {
        :hover {
            background-color: grey;
        }
    }
`;