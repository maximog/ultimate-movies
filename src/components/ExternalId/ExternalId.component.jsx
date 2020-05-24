import React from 'react';
import { FaLink, FaImdb, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { StyledA } from './ExternalId.styles';

const ExternalId = ({ data, people }) => {

    const [id, value] = data;

    const title = people ? 'name' : 'title';
    const knownIcons = ['imdb_id', 'facebook_id', 'twitter_id', 'instagram_id'];
    const allowed = [...knownIcons, 'tvdb_id'];

    let url = '';
    switch (id) {
        case 'imdb_id':
            url = `https://www.imdb.com/${title}/`;
            break;
        case 'facebook_id':
            url = 'https://www.facebook.com/';
            break;
        case 'twitter_id':
            url = 'https://www.twitter.com/';
            break;
        case 'instagram_id':
            url = 'https://www.instagram.com/';
            break;
        case 'tvdb_id':
            url = `https://thetvdb.com/search?query=`;
            break;
        default:
            break;
    }

    return (
        (allowed.includes(id) && value) ?
            <StyledA href={`${url}${value}`}>
                {id === 'imdb_id' && <FaImdb className='ext-id' />}
                {id === 'facebook_id' && <FaFacebookSquare className='ext-id' />}
                {id === 'twitter_id' && <FaTwitterSquare className='ext-id' />}
                {id === 'instagram_id' && <GrInstagram className='ext-id' />}
                {!knownIcons.includes(id) && <FaLink className='ext-id'/>}
            </StyledA>
            :
            null
    );
}

export default ExternalId;