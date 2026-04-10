import React, { use } from 'react';
import Card from './Card';

const Cards = ({data,cart, setCart}) => {
    const datas = use(data)
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 max-w-7xl gap-6 mx-auto w-10/12 pb-30'>
            {
                datas.map(dataDetails => <Card key={dataDetails.id} cart={cart} setCart={setCart} dataDetails={dataDetails}></Card> )
            }
        </div>
    );
};

export default Cards;