import React, { useState } from 'react';
import { ReactComponent as Lupa } from '../../assets/lupa.svg';
import { StyledLabel } from './SearchBar.styles';
import { useHistory, useLocation } from 'react-router-dom';

const SearchBar = () => {

    const [search, setSearch] = useState('');

    const history = useHistory();
    const location = useLocation();

    const handleChange = e => {
        setSearch(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setSearch('');
        if (search !== '') history.push(`/multi/${search}/page/1`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <StyledLabel checked={location.pathname.includes('/multi')}>
                <Lupa className='searchbar-icon' onClick={handleSubmit} />
                <input type='text' placeholder='Search' className='searchbar-input' value={search} onChange={handleChange} />
            </StyledLabel>
        </form>
    );
}

export default SearchBar;