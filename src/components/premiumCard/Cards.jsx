import React, { use } from 'react';
import Card from './Card';

const Cards = ({data}) => {
    const datas = use(data)
    return (
        <div className='grid grid-cols-3 max-w-7xl gap-6 mx-auto w-full pb-30'>
            {
                datas.map(dataDetails => <Card key={dataDetails.id} dataDetails={dataDetails}></Card> )
            }
        </div>
    );
};

export default Cards;