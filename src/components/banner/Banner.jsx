import React from 'react';
import bannerImage from '../../../image/banner.png'
import cercleIimage from '../../../image/cercle.png'
import Play from '../../../image/Play.png';

const Banner = () => {
    return (
        <div>
            <div className='flex w-10/12 mx-auto gap-15 justify-center'>
                <div className='self-center'>
                    <div className='flex gap-2 text-[#851DF9] font-light items-center bg-[#e1e7ffFF] px-4 py-2 rounded-4xl mb-4 w-75'>
                        <span><img src={cercleIimage} alt="" /></span>
                        <p>New: AI-Powered Tools Available</p>
                    </div>

                    <h1 className='text-[72px] font-extrabold leading-none mb-4'>Supercharge Your <br /> <span className='bg-[#662FF7] bg-clip-text text-transparent'>Digital Workflow</span></h1>

                    <p className='text-[#627382] text-[18px] font-extralight leading-6 mb-8'>Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br /> Explore Products</p>

                    <div className='flex gap-4'>
                        <button className='inter hover:bg-transparent btn border-none bg-linear-to-r from-[#6330F7] to-[#9315FA] px-4 py-[12.5px] rounded-[10000px] text-white font-bold'>Explore Products</button>

                        <button className='inter border-2 border-[#662FF7] btn px-4 py-[12.5px] rounded-[10000px] font-bold bg-linear-to-r from-[#6330F7] to-[#9315FA] bg-clip-text text-transparent'> <img src={Play} alt="" /> Watch Demo</button>
                    </div>

                </div>
                <div className="hover-3d cursor-pointer mb-21.25">
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