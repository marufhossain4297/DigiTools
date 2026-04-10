import { ShoppingCart } from 'lucide-react';
import React from 'react';

const NavBar = ({cart}) => {
    return (
        <div className='mb-21.25 sticky bg-white z-50 top-0 overflow-hidden shadow-sm'>
            <div className='flex justify-between items-center w-10/12 mx-auto my-5 manrope'>
                <div>
                    <h1 className='text-4xl bg-linear-to-r from-[#6130F7] to-[#9315FA] bg-clip-text text-transparent font-bold'>DigiTools</h1>
                </div>
                <div className=' bg-[#ffffff30]'>
                    <ul className='lg:flex gap-8 hidden'>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">Features</a></li>
                        <li><a href="/">Pricing</a></li>
                        <li><a href="/">Testimonials</a></li>
                        <li><a href="/">FAQ</a></li>
                    </ul>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className='flex relative'>
                        <span><ShoppingCart /></span>
                        {
                            cart.length === 0 ? '' :<span className={`h-5 w-5 left-3.5 -top-2 absolute rounded-4xl bg-red-600 text-center text-white flex justify-center items-center`}>{cart.length}</span>
                        }
                    </div>
                    <button className='hidden md:block'><a href="/">Login</a></button>
                    <button className='hidden md:block inter btn lg:flex border-none bg-linear-to-l from-[#6330F7] to-[#9315FA] px-4 py-[12.5px] rounded-[10000px] text-white font-semibold'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;