import React from 'react';
import { FaStar } from 'react-icons/fa';

const Review = () => {
    return (
        <div>
            <div className='text-white bg-linear-to-r from-[#6330F7] to-[#9315FA] py-15 justify-center'>
                <div className='flex justify-center w-10/12 mx-auto'>
                    <div className='justify-items-center'>
                        <h1 className='font-extrabold text-6xl px-31.25 mb-3'>50K+</h1>
                        <p className='text-[24px] text-[#E2D4FE]'>Active Users</p>
                    </div>

                    <div className="border-l-2 border-[#AC7DFB]"></div>

                    <div className='justify-items-center'>
                        <h1 className='font-extrabold text-6xl px-31.25 mb-3'>200+</h1>
                        <p className='text-[24px] text-[#E2D4FE]'>Premium Tools</p>
                    </div>

                    <div className="border-l-2 border-[#AC7DFB]"></div>

                    <div className='justify-items-center'>
                        <h1 className='font-extrabold text-6xl px-31.25 flex gap-2 mb-3'><FaStar /> 4.9</h1>
                        <p className='text-[24px] text-[#E2D4FE]'>Rating</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;