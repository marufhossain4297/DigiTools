import { ShoppingCart } from 'lucide-react';
import React from 'react';

const NavBar = () => {
    return (
        <div className='border-b border-[#F2F2F2] mb-21.25'>
            <div className='flex justify-between items-center w-10/12 mx-auto my-5 manrope'>
                <div>
                    <h1 className='text-4xl bg-linear-to-r from-[#6130F7] to-[#9315FA] bg-clip-text text-transparent font-bold'>DigiTools</h1>
                </div>
                <div>
                    <ul className='flex gap-8'>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">Features</a></li>
                        <li><a href="/">Pricing</a></li>
                        <li><a href="/">Testimonials</a></li>
                        <li><a href="/">FAQ</a></li>
                    </ul>
                </div>
                <div className='flex gap-4 items-center'>
                    <span className='btn rounded-full'><ShoppingCart/></span>
                    <button><a href="/">Login</a></button>
                    <button className='inter btn border-none bg-linear-to-l from-[#6330F7] to-[#9315FA] px-4 py-[12.5px] rounded-[10000px] text-white font-semibold'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;