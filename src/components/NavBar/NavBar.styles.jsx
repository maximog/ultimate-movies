import styled from 'styled-components';

export const StyledNav = styled.nav`
background-color: #141414;
display: flex;
height: 60px;
align-items: center;
.navbar-home-icon {
    height: 28px;
    width: auto;
    margin: 20px;
    fill: white;
    cursor: pointer;
    :hover {
        fill: yellow;
    }
}
`;