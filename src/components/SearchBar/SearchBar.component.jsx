import React, {useState} from 'react';
import {ReactComponent as Lupa } from '../../assets/lupa.svg';
import { StyledLabel } from './SearchBar.styles';
import {useHistory} from 'react-router-dom';

const SearchBar = () => {

    const [search, setSearch] = useState('');

    const history = useHistory();

    const handleChange = e => {
        setSearch(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setSearch('');
        // const searchQuery = search.split(' ').join('%20');
        if(search !== '') history.push(`/multi/${search}/page/1`);
    }


    return(
        <StyledLabel>
        <form onSubmit={handleSubmit}>
            <Lupa className='searchbar-icon' onClick={handleSubmit}/>
            <input type='text' placeholder='Search' className='searchbar-input' value={search} onChange={handleChange} />
        </form>
        </StyledLabel>
    );
}

export default SearchBar;