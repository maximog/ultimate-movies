import React from 'react';
import {useFetch} from '../../hooks/useFetch';
import ExternalId from '../ExternalId/ExternalId.component';

const ExternalIdContainer = ({match}) => {
    const extIds = useFetch([match.params.media, match.params.id, 'external_ids']);
    const table = extIds && Object.entries(extIds);
    const people = match.params.media === 'person' ? true : false;
    return(
        <>
        {table && 
            table.map((elem, i) => <ExternalId data={elem} key={i} people={people} />)
        }
        </>
    );
}

export default ExternalIdContainer;