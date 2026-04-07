import React from 'react';
import bannerImage from '../../../image/banner.png'
import cercleIimage from '../../../image/cercle.png'
import Play from '../../../image/Play.png';

const Banner = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto justify-items-end'>
                <div className='self-center mb-22'>
                    <div className='flex gap-2 text-[#9315FA] font-light items-center bg-[#E1E7FF] px-4 py-2 rounded-4xl mb-4 w-75'>
                        <span><img src={cercleIimage} alt="" /></span>
                        <p>New: AI-Powered Tools Available</p>
                    </div>

                    <h1 className='text-[50px] lg:text-[70px] font-extrabold leading-none mb-4'>Supercharge Your <br className='hidden lg:block'/> <span className='bg-[#662FF7] bg-clip-text text-transparent'>Digital Workflow</span></h1>

                    <p className='text-[#627382] text-[18px] font-extralight leading-6 mb-8'>Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br /> Explore Products</p>

                    <div className='flex gap-4'>
                        <button className='inter hover:bg-transparent btn border-none bg-linear-to-r from-[#6330F7] to-[#9315FA] px-4 py-[12.5px] rounded-[10000px] text-white font-bold'>Explore Products</button>

                        <button className='inter border-2 border-[#662FF7] btn px-4 py-[12.5px] rounded-[10000px] font-bold bg-linear-to-r from-[#6330F7] to-[#9315FA] bg-clip-text text-transparent'> <img src={Play} alt="" /> Watch Demo</button>
                    </div>

                </div>
                <div className="hover-3d cursor-pointer mb-22">
                    <figure className="max-w-100 rounded-2xl">
                        <img src={bannerImage} alt="" />
                    </figure>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;