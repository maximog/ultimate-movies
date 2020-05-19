import React from 'react';
import { useLocation } from 'react-router-dom';

import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as Movies } from '../../assets/movies.svg';
import { ReactComponent as Series } from '../../assets/series.svg';

import { StyledNav, StyledLink } from './NavBar.styles';
import SearchBar from '../SearchBar/SearchBar.component';


const NavBar = () => {

    const location = useLocation();

    return (
        <StyledNav>
            <StyledLink to='/' checked={location.pathname === '/'}>
                <Home className='navbar-icon' />
            </StyledLink>
            <StyledLink to='/movie' checked={location.pathname === '/movie'}>
                <Movies className='navbar-icon' />
            </StyledLink>
            <StyledLink to='/tv' checked={location.pathname === '/tv'}>
                <Series className='navbar-icon' />
            </StyledLink>
            <SearchBar />

        </StyledNav>
    );
}

export default NavBar;