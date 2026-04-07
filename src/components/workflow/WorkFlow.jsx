import React from 'react';

const WorkFlow = () => {
    return (
        <div>
            <div className='bg-linear-to-r from-[#6330F7] to-[#9315FA] text-center text-white py-30'>
                <div className='w-10/12 mx-auto'>
                    <div>
                        <h1 className='text-[40px] font-bold'>Ready to Transform Your Workflow?</h1>
                        <p className='text-[#F2E9FE] font-extralight mb-10'>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
                    </div>
                    <div>
                        <div className='mb-4 flex gap-4 justify-center'>
                            <button className='btn rounded-4xl bg-white shadow-none'>
                                <span className='bg-linear-to-r from-[#6130F7] to-[#9315FA] bg-clip-text text-transparent font-medium'> Explore Products </span>
                            </button>

                            <button className='btn rounded-4xl bg-transparent shadow-none text-white'>View Pricing</button>
                        </div>
                        <p className='text-[#F2E9FE] font-extralight'>14-day free trial • No credit card required • Cancel anytime</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkFlow;