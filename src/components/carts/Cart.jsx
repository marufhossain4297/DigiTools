import React from 'react';
import { toast } from 'react-toastify/unstyled';

const Cart = ({ cart, carty, setCart }) => {
    const handleDelete = () => {
        const filterCart = cart.filter(filterdCart => filterdCart.name !== carty.name)
        setCart(filterCart)
        toast.info('delete')
    }
    return (
        <div className='bg-[#F9FAFC] mb-7 p-5 rounded-2xl manrope flex flex-wrap justify-between items-center'>
            <div className='flex items-center gap-5'>
                <img className="px-3.5 py-3.5 rounded-full bg-white border border-[#F2F2F2]" src={carty.icon} alt="" />
                <div>
                    <h1 className='text-[20px] font-medium'>{carty.name}</h1>
                    <p className='text-[#627382]'>{carty.price}</p>
                </div>
            </div>
            <div>
                <p onClick={() => handleDelete()} className='text-[#FF3980] font-[600] cursor-pointer'>Remove</p>
            </div>
        </div>
    );
};

export default Cart;