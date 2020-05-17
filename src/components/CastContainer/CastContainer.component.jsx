import React from 'react';
import Card from '../Card/Card.component';
import CardContainer from '../CardContainer/CardContainer.component';
import { useFetch } from '../../hooks/useFetch';


const CastContainer = ({media, id}) => {
    const data = useFetch([media, id, 'credits']);
    console.log(data)
    return (
        <section>
           {/* {data && data.cast.map(each=>(
               <Card key={each.id} movie={each} cast={true}/>
               ))} */}

        {data && <CardContainer movies={data.cast} cast={true}/>}
        </section>
    );
}

export default CastContainer;