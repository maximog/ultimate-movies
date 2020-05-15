import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as Movies } from '../../assets/movies.svg';
import { ReactComponent as Series } from '../../assets/series.svg';

import { StyledNav } from './NavBar.styles';
import SearchBar from '../SearchBar/SearchBar.component';

const NavBar = () => {
    return (
        <StyledNav>
            <Link to='/'>
                <Home className='navbar-home-icon' />
            </Link>
            <Link to='/movies'>
                <Movies className='navbar-home-icon' />
            </Link>
            <Link to='/series'>
                <Series className='navbar-home-icon' />
            </Link>
            <SearchBar />

        </StyledNav>
    );
}

export default NavBar;