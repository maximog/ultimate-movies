import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav`
background-color: #141414;
display: flex;
align-items: center;
width: 100%;
flex-wrap: wrap;
@media screen and (max-width: 430px) {
    justify-content: space-around;
}
`;

export const StyledLink = styled(Link)`
.navbar-icon{
    height: 28px;
    width: auto;
    margin: 20px;
    fill: ${props => props.checked ? 'white' : 'grey'};
    cursor: pointer;
    :hover {
        fill: white;
    }
}
.movie {
    height: 33px;
    margin-bottom: 15px;
}
`;