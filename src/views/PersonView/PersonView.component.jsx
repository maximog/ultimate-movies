import React, { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Switch, Route } from 'react-router-dom';
import InfoLinks from '../../components/InfoLinks/InfoLinks.component';
import { DetailedStyledSection, DetailedLinks } from '../DetailedViews/DetailedView.styles'
import DetailedCard from '../../components/DetailedCard/DetailedCard.component';
import CastContainer from '../../components/CastContainer/CastContainer.component';

const PersonView = ({ match }) => {
    const info = useFetch(['person', match.params.id]);

    const [selection, setSelection] = useState('info');

    useEffect(() => {
        setSelection(match.params.section)
    }, [match]);

    const { id } = match.params;
    
    return (
        info && <DetailedStyledSection >
            <DetailedLinks>
                <InfoLinks selection={selection} media={false} id={id} match={match} />
            </DetailedLinks>
            <Switch>
                <Route 
                    exact 
                    path={`/person/${id}/info`} 
                    render={() => <DetailedCard data={info} type={'person'} />} 
                />
                <Route
                    exact
                    path={`/person/${id}/credits`}
                    render={() => <CastContainer apiCall={['person', id, 'combined_credits']} cardType={'credits'} />}
                />
            </Switch>
        </DetailedStyledSection>
    );
};

export default PersonView;