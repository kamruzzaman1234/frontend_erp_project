const Service = () => {
    return (
        <div className="py-10 md:py-16 lg:py-20">
            <div className="max-w-screen-xl mx-auto px-3 sm:px-5 lg:px-6">

                {/* Main Layout */}
                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">

                    {/* LEFT CONTENT */}
                    <div className="w-full lg:w-1/2">
                        <div className="space-y-4">

                            <div>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-bold uppercase">
                                    Service
                                </h2>
                                <div className="w-12 md:w-16 h-[3px] bg-yellow-400 mt-2"></div>
                            </div>

                            <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium leading-snug">
                                Providing exceptional construction services <br className="hidden md:block" />
                                and insight from the start.
                            </p>

                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[420px]">

                            {/* Main Image */}
                            <img
                                src="https://i.ibb.co.com/mhZbQGn/pexels-fotoaibe-1571468.jpg"
                                alt="main"
                                className="w-full h-auto object-cover rounded-xl shadow-xl"
                            />

                            {/* Bottom Right Image */}
                            <img
                                src="https://i.ibb.co.com/99DYZGr7/h5.jpg"
                                alt="overlay"
                                className="w-20 sm:w-28 md:w-36 lg:w-40 h-20 sm:h-28 md:h-36 lg:h-40 object-cover rounded-xl shadow-lg border-4 border-white
                absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-4 sm:-right-6 md:-right-8"
                            />

                            {/* Top Left Image */}
                            <img
                                src="https://i.ibb.co.com/99DYZGr7/h5.jpg"
                                alt="overlay"
                                className="w-20 sm:w-28 md:w-36 lg:w-40 h-20 sm:h-28 md:h-36 lg:h-40 object-cover rounded-xl shadow-lg border-4 border-white
                absolute -top-4 sm:-top-6 md:-top-8 -left-4 sm:-left-6 md:-left-8"
                            />

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;