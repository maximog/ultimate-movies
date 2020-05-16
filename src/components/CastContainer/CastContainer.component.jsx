import React from 'react';
import Card from '../Card/Card.component';


const CastContainer = ({cast, each, link}) => {
    return (
        <section>
            <div className='cast-container'>
            {cast.map((each, i) => {
                if(link && i<5) {
                    return <Card key={each.id} movie={each} />
                } else if (!link) {
                    return <Card key={each.id} movie={each} />
                }
            }
            )}
            </div>
        </section>
    );
}

export default CastContainer;