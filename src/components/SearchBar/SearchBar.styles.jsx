import styled from 'styled-components';

export const StyledLabel = styled.label`
form {
    display: flex;
    align-items: center;
    .searchbar-icon {
        height: 22px;
        width: auto;
        margin: 20px 10px 20px 30px;
        /* fill: grey; */
        cursor: pointer;
        fill: ${props => props.checked ? 'white' : 'grey'};
}
    .searchbar-input {
        background-color: #141414;
        border: none;
        height: 40px;
        width: 300px;
        color: ivory;
        font-size: 18px;
        padding-left: 10px;
        font-weight: 400;
    }
}
`;