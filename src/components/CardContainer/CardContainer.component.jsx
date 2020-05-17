import React from 'react';
import Card from '../Card/Card.component';
import { StyledSection } from './CardContainer.styles';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { Link } from 'react-router-dom';

const CardContainer = ({ title, movies, link, type, cast }) => {
    return (
        <StyledSection>
            {link ? 
                <Link to={link}>
                    <h2>{title}<Arrow className='cardcontainer-arrow-icon' /></h2>
                </Link>
                :
                <h2>{title}</h2>
            }
            <div className='container-movies'>
                {movies && movies.map((movie, i) => {
                    if (link && i < 5) {
                        return <Card key={movie.id} movie={movie} type={type} cast={cast}/>
                    } else if (!link) {
                        return <Card key={movie.id} movie={movie} type={type} cast={cast}/>
                    }
                }
                )}
            </div>
        </StyledSection>
    );
}

export default CardContainer;