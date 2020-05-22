import React from 'react';
import { FaImdb, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { StyledA } from './ExternalId.styles';

const ExternalId = ({data, people}) => {

    let url = '';
    const [id, value] = data;

    const title = people ? 'name' : 'title';

    switch (id) {
        case 'imdb_id':
            url = `https://www.imdb.com/${title}`;
            break;
        case 'facebook_id':
            url = 'https://www.facebook.com';
            break;
        case 'twitter_id':
            url = 'https://www.twitter.com';
            break;
        case 'instagram_id':
            url = 'https://www.instagram.com';
            break;
        default:
            break;
    }

    return (
        value && <StyledA href={`${url}/${value}`}>
            {id === 'imdb_id' && <FaImdb className='ext-id' />}
            {id === 'facebook_id' && <FaFacebookSquare className='ext-id' />}
            {id === 'twitter_id' && <FaTwitterSquare className='ext-id' />}
            {id === 'instagram_id' && <GrInstagram className='ext-id' />}
        </StyledA>
    );
}

export default ExternalId;