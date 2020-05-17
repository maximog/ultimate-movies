import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledNav = styled.nav`
background-color: #141414;
display: flex;
height: 60px;
align-items: center;
`;

export const StyledLink = styled(Link)`
.navbar-icon{
    height: 28px;
    width: auto;
    margin: 20px;
    fill: ${props => props.checked ? 'grey' : 'white'};
    cursor: pointer;
    :hover {
        fill: grey;
    }
}
`;