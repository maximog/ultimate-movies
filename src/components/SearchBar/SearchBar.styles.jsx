import styled from 'styled-components';

export const StyledLabel = styled.label`
form {
    display: flex;
    align-items: center;
    .searchbar-icon {
        height: 28px;
        width: auto;
        margin: 20px 20px 20px 30px;
        fill: white;
        cursor: pointer;
}
    .searchbar-input {
        background-color: #141414;
        border: none;
        height: 40px;
        width: 300px;
        color: white;
        font-size: 15px;
        padding-left: 10px;
    }
}
`;