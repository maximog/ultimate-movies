import React from 'react';
import Card from '../Card/Card.component';
import { StyledSection, StyledTitleDiv, StyledMoviesDiv } from './CardContainer.styles';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { Link } from 'react-router-dom';

const CardContainer = ({ title, movies, link, type, cardType }) => {
    return (
        <StyledSection>
            {link ?
                <StyledTitleDiv>
                    <Link to={link}>
                        <h2>{title}<Arrow className='cardcontainer-arrow-icon' /></h2>
                    </Link>
                </StyledTitleDiv>
                :
                title && <h2>{title}</h2>
            }
            <StyledMoviesDiv noWrap={link ? 1 : 0}>
                {movies && movies.map((movie, i) => {
                    if (link && i < 5) {
                        return <Card key={movie.id + title} movie={movie} type={type} />
                    } else if (!link) {
                        return <Card key={movie.id + i} movie={movie} type={type} cardType={cardType} />
                    }
                    return null;
                })}
            </StyledMoviesDiv>
        </StyledSection>
    );
}

export default CardContainer;
