import React from 'react';
import { FaStar } from 'react-icons/fa';

const Review = () => {
    return (
        <div>
            <div className='text-white bg-linear-to-r from-[#6330F7] to-[#9315FA] py-15 justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center w-8/12 mx-auto'>
                    <div className='justify-items-center text-center flex flex-col md:border-r-2 border-[#AC7DFB] pr-30'>
                        <h1 className='font-extrabold text-6xl px-31.25 mb-3 self-center'>50K+</h1>
                        <p className='text-[24px] text-[#E2D4FE] font-light mb-10 lg:mb-0'>Active Users</p>
                    </div>

                    <div className='justify-items-center flex text-center flex-col lg:border-r-2 border-[#AC7DFB]'>
                        <h1 className='font-extrabold text-6xl px-31.25 mb-3 self-center'>200+</h1>
                        <p className='text-[24px] text-[#E2D4FE] font-light mb-10 lg:mb-0'>Premium Tools</p>
                    </div>

                    <div className='justify-items-center flex text-center flex-col'>
                        <h1 className='font-extrabold text-6xl px-31.25 flex gap-2 mb-3 self-center'><FaStar /> 4.9</h1>
                        <p className='text-[24px] text-[#E2D4FE] font-light'>Rating</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;