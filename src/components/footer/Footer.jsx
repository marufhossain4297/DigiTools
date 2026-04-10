import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='bg-[#101727] text-white'>
            <div className='grid md:grid-cols-2 w-10/12 mx-auto pt-30 pb-20 justify-center'>
                <div className='w-87.5'>
                    <h1 className='text-5xl font-bold'>DigiTools</h1>
                    <p className='text-[#CFD1D4] font-extralight mt-4 mb-6'>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with oursuite of powerful tools.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between'>
                    <div className='mb-9'>
                        <h2 className='text-xl font-medium'>Product</h2>
                        <ul className='text-[#CFD1D4] font-extralight space-y-4 mt-4'>
                            <li><a href="/">Features</a></li>
                            <li><a href="/">Pricing</a></li>
                            <li><a href="/">Templates</a></li>
                            <li><a href="/">Integrations</a></li>
                        </ul>
                    </div>
                    <div className='mb-9'>
                        <h2 className='text-xl font-medium'>Company</h2>
                        <ul className='text-[#CFD1D4] font-extralight space-y-4 mt-4'>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Careers</a></li>
                            <li><a href="/">Press</a></li>
                        </ul>
                    </div>
                    <div className='mb-9'>
                        <h2 className='text-xl font-medium'>Resources</h2>
                        <ul className='text-[#CFD1D4] font-extralight space-y-4 mt-4'>
                            <li><a href="/">Documentation</a></li>
                            <li><a href="/">Help Center</a></li>
                            <li><a href="/">Community</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                    <div className='mb-9'>
                        <h2 className='text-xl font-medium mb-4'>Social Links</h2>
                        <div className='flex text-black gap-3'>
                            <span className='btn py-2.5 px-3 shadow-none bg-white rounded-4xl cursor-pointer'>
                                <BsInstagram />
                            </span>
                            <span className='btn py-2.5 px-3 shadow-none bg-white p-2.5 rounded-4xl cursor-pointer'>
                                <FaFacebookSquare />
                            </span>
                            <span className='btn py-2.5 px-3 shadow-none bg-white p-2.5 rounded-4xl cursor-pointer'>
                                <FaXTwitter />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b border-[#3B414E] w-10/12 mx-auto justify-center"></div>
            <div className='grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto pb-8  pt-8 text-[#858890] font-light'>
                <div>
                    <p className='mb-6'>© 2026 Digitools. All rights reserved.</p>
                </div>
                <div className='flex gap-8 flex-wrap lg:justify-end'>
                    <p>Privacy</p>
                    <p>Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;