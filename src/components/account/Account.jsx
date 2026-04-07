import React from 'react';
import user from '../../../image/user.png'
import parcel from '../../../image/package.png'
import rocket from '../../../image/rocket.png'

const Account = () => {
    return (
        <div className='py-30 mx-auto bg-[#F9FAFC]'>
            <div className='w-10/12 mx-auto'>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold mb-4'>Get Started in 3 Steps</h1>
                    <p className='text-[#627382] mb-10'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className='grid grid-cols-3 gap-8'>
                    
                    <div className='bg-white rounded-3xl shadow-sm'>
                        <span className='px-3.5 left-82 top-4 py-2.5 flex float-end mr-4 mt-4 rounded-4xl bg-linear-to-r from-[#6330F7] to-[#9315FA] text-white font-semibold text-right'>01</span>
                        <div>
                            <img className='mt-22 mx-auto bg-[#F4E8FE] p-5 rounded-full' src={user} alt="" />
                            <h1 className='text-center text-2xl font-semibold my-4'>Create Account</h1>
                            <p className='text-[#768492] font-extralight mb-20 text-center'>Sign up for free in seconds. No credit <br /> card required to get started.</p>
                        </div>

                    </div>

                    <div className='bg-white rounded-3xl shadow-sm'>
                        <span className='px-3.5 left-186 top-4 py-2.5 flex float-end mr-4 mt-4 rounded-4xl bg-linear-to-r from-[#6330F7] to-[#9315FA] text-white font-semibold text-right'>02</span>
                        <div>
                            <img className='mt-22 mx-auto bg-[#F4E8FE] p-5 rounded-full' src={parcel} alt="" />
                            <h1 className='text-center text-2xl font-semibold my-4'>Choose Products</h1>
                            <p className='text-[#768492] font-extralight mb-20 text-center'>Browse our catalog and select the <br /> tools that fit your needs.</p>
                        </div>

                    </div>

                    <div className='bg-white rounded-3xl shadow-sm'>
                        <span className='px-3.5 left-290 top-4 py-2.5 flex float-end mr-4 mt-4 rounded-4xl bg-linear-to-r from-[#6330F7] to-[#9315FA] text-white font-semibold text-right'>03</span>
                        <div>
                            <img className='mt-22 mx-auto bg-[#F4E8FE] p-5 rounded-full' src={rocket} alt="" />
                            <h1 className='text-center text-2xl font-semibold my-4'>Start Creating</h1>
                            <p className='text-[#768492] font-extralight mb-20 text-center'>Download and start using your premium <br />tools immediately.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;