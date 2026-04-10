import { ShoppingCart } from 'lucide-react';
import Cart from './Cart';

const Carts = ({cart, setCart}) => {
    return (
        <div className='w-10/12 manrope mx-auto border border-[#d3d3d3] p-[40px] mb-[120px] rounded-4xl'>
            <h1 className='text-2xl font-bold mb-[24px]'>Your Cart</h1>
            {
                cart.length === 0 
                ? 
                <div className='justify-self-center my-10 text-[#454545]'>
                    <ShoppingCart className='w-[150px] h-auto'/>
                    <p className='font-semibold text-2xl'>Your cart is empty</p>
                </div> 
                : ''
            }
            {
                cart.map(carty => <Cart key={carty.id} cart={cart} carty={carty} setCart={setCart}></Cart>)
            }
            {/* <div className='flex justify-between'>
                <p className='text-[#627382] font-extralight'>Total:</p>
                <p className='text-[24px] font-bold'>{cart.price}</p>
            </div> */}
            <div>
                <button className='btn w-full mt-[30px] bg-linear-to-r from-[#6130F7] to-[#9315FA] text-white border-none rounded-4xl'>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Carts;