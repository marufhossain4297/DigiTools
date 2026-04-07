
const Card = ({ dataDetails }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 border border-[#F2F2F2] shadow-sm rounded-3xl">
                <div className="card-body justify-center">
                    <div className="flex justify-between">
                        <img className="px-3.5 py-3.5 z-50 rounded-full border border-[#F2F2F2]" src={dataDetails.icon} alt="" />

                        {dataDetails.tagType === 'Best Seller'

                            ? <div className="badge bg-[#FEF3C6] text-[#BB4D00] rounded-3xl">{dataDetails.tagType} </div>

                            : dataDetails.tagType === 'New' ? <div className="badge bg-[#DBFCE7] text-[#0A883E] rounded-3xl">{dataDetails.tagType}</div>

                                : <div className="badge bg-[#E1E7FF] text-[#7824F9] rounded-3xl">{dataDetails.tagType}</div>}
                    </div>
                    <div className="">
                        <h2 className="text-2xl font-bold">{dataDetails.name}</h2>
                        <p className="text-[#627382] mt-4 mb-4 font-light">{dataDetails.description}</p>
                        <p><span className="text-2xl font-bold">{dataDetails.price}</span> {dataDetails.period}</p>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        {
                            dataDetails.features.map((feature, index) => (
                                <li key={index}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>{feature}</span>
                                </li>
                            ))
                        }

                    </ul>
                    <div className="mt-6">
                        <button className="btn bg-linear-to-r from-[#6330F7] to-[#9315FA] text-semibold text-white rounded-4xl btn-block">{dataDetails.buyNowButton}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;