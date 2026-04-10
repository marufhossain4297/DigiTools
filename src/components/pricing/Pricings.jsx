import React, { use } from 'react';
import Pricing from './Pricing';

const Pricings = ({ pricingData }) => {
    const data = use(pricingData)
    return (
        <div>
            <div>
                <h1 className='md:text-5xl text-[43px] font-bold mt-30 text-center mb-4'>Simple, Transparent Pricing</h1>
                <p className='text-center text-[#627382] font-light mb-10'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-10/12 mx-auto'>
                {
                    data.map(pricing => <Pricing key={pricing.id} pricing={pricing}></Pricing>)
                }
            </div>
        </div>
    );
};

export default Pricings;