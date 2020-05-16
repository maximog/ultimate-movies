import React from 'react';
import Card from '../Card/Card.component';
import { StyledSection } from './CardContainer.styles';
import {ReactComponent as Arrow} from '../../assets/arrow.svg';

const CardContainer = ({title, movies, link}) => {
    return (
        <StyledSection>
            <h2>{title}{link && <Arrow className='cardcontainer-arrow-icon' />}</h2>
            
            <div className='container-movies'>
            {movies.map((movie, i) => {
                if(link && i<5) {
                    return <Card key={movie.id} movie={movie} />
                } else if (!link) {
                    return <Card key={movie.id} movie={movie} />
                }
            }
            )}
            </div>
        </StyledSection>
    );
}

export default CardContainer;