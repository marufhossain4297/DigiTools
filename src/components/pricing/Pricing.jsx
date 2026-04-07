import React from 'react';
import { LuCrown } from "react-icons/lu";
const Pricing = ({ pricing }) => {
    console.log(pricing)
    return (
        <div>
            <div className={`card shadow-sm rounded-3xl border border-[#F2F2F2] ${pricing.buyNowButton === 'Start Pro Trial' ? 'bg-linear-to-r from-[#6330F7] to-[#9315FA] text-white' : 'bg-transparent'} relative mb-30`}>
                <div className="card-body">
                    {pricing.tagType === 'Most Popular' ? <span className="badge absolute border-none left-33.5 badge-warning badge-md py-4 -top-4 px-3 bg-[#FEF3C6] rounded-4xl text-[#BB4D00]"> <LuCrown />{pricing.tagType}</span> : ''}
                    <div className="">
                        <h2 className="text-2xl font-bold">{pricing.name}</h2>
                        <p className={`${pricing.buyNowButton === 'Start Pro Trial' ? 'text-white' : 'text-[#627382]'} mt-2 mb-6`}>{pricing.description}</p>
                        <span className="text-xl mb-6"><span className='text-4xl font-semibold'>{pricing.price}</span><span className='font-light ml-1'>{pricing.period}</span></span>
                    </div>
                    <ul className={`mt-6 flex flex-col gap-2 text-xs ${pricing.name === 'Starter'
                        ? 'mb-26' : pricing.name === 'Pro' ? 'mb-7.5' : ''}`}>
                        {pricing.features.map((feature, index) => (
                            <li key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" className={`size-4 me-2 inline-block text-success ${pricing.buyNowButton === 'Start Pro Trial' ? 'text-white' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6">
                        <button className={`btn shadow-none rounded-4xl btn-block ${pricing.buyNowButton === 'Start Pro Trial' ? 'bg-white' : 'bg-linear-to-r from-[#6330F7] to-[#9315FA]'
                            }`}> {pricing.buyNowButton === 'Start Pro Trial' ? <span className='bg-linear-to-r from-[#6130F7] to-[#9315FA] bg-clip-text text-transparent'> {pricing.buyNowButton} </span> :<span className='text-white'>{pricing.buyNowButton}</span>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;