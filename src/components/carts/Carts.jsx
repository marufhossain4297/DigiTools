import React, { use } from 'react';
import Cart from './Cart';

const Carts = ({data}) => {
    const datas = use(data)
    return (
        <div className='w-10/12 mx-auto'>
            <p className='p-50 border rounded-4xl'></p>
            {
                datas.map(cartDetails => <Cart cartDetails={cartDetails}></Cart>)
            }
        </div>
    );
};

export default Carts;