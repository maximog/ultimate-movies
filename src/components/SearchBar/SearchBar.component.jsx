import React from 'react';
import {ReactComponent as Lupa } from '../../assets/lupa.svg';
import { StyledLabel } from './SearchBar.styles';

const SearchBar = () => {
    return(
        <StyledLabel>
            <Lupa className='searchbar-icon'/>
            <input type='text' placeholder='Search' className='searchbar-input' />
        </StyledLabel>
    );
}

export default SearchBar;