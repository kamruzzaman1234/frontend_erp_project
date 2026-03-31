const Service = () => {
    return (
        <div className="py-[80px]">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-row justify-between items-center gap-8">
                    <div className="w-[45%]">
                        <div className="flex flex-col gap-4">
                            <div>
                                <h2 className="text-[18px] md:text-2xl font-bold text-black uppercase">service</h2>
                                <div className="w-16 h-[3px] bg-yellow-400 mt-2"></div>
                            </div>
                            <p className="text-5xl font-medium "> Providing exceptional construction services <br /> and insight from the start.</p>
                        </div>
                    </div>
                    <div className="w-[45%] flex justify-center items-center">
                        <div className="relative w-[380px] h-[380px]">

                           
                            <img
                                src="https://i.ibb.co.com/mhZbQGn/pexels-fotoaibe-1571468.jpg"
                                alt="main"
                                className="w-full h-full object-cover rounded-xl shadow-2xl"
                            />

                           
                            <img
                                src="https://i.ibb.co.com/99DYZGr7/h5.jpg"
                                alt="overlay"
                                className="w-[180px] h-[180px] object-cover rounded-xl shadow-xl border-4 border-white
                       absolute -bottom-8 -right-8"
                            />

                            <img
                                src="https://i.ibb.co.com/99DYZGr7/h5.jpg"
                                alt="overlay"
                                className="w-[180px] h-[180px] object-cover rounded-xl shadow-xl border-4 border-white
                       absolute -top-8 -left-8"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;