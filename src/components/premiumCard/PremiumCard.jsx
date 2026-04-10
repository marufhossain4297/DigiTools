
import Cards from './Cards';

const PremiumCard = ({setProduct, product, cart}) => {
    return (
        <div>
            <div className='pt-30 w-10/12 mx-auto mb-10'>
            
                <div className='text-center items-center'>
                    <h1 className='md:text-[48px] text-[40px] font-extrabold'>Premium Digital Tools</h1>
                    <p className='align-center my-4 text-[#627382] font-extralight'>Choose from our curated collection of premium digital products designed <br className='hidden lg:block' /> to boost your productivity and creativity.</p>
                </div>
                <div className='flex justify-self-center justify-center border border-[#F5F5F6] rounded-[60px] w-70 py-1.5'>
                    <button onClick={() => setProduct('product')} className={`border border-[#F5F5F6] ${product === 'product' ? 'bg-linear-to-r from-[#6330F7] to-[#9315FA] text-white font-semibold' : 'bg-transparent'} cursor-pointer  rounded-4xl px-9 py-3.5 transition-all duration-300 ease-in-out`}>Product</button>

                    <button onClick={() => setProduct('cart')} className={`border border-[#F5F5F6] cursor-pointer ${product === 'cart' ? 'bg-linear-to-r from-[#6330F7] to-[#9315FA] text-white font-semibold' : 'bg-transparent'} rounded-4xl px-9 py-3.5 transition-all duration-300 ease-in-out`}>Cart({cart.length})</button>
                </div>

            </div>
        </div>
    );
};

export default PremiumCard;