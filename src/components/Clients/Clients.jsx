const Clients = () => {
    return (
        <div className="py-[80px] bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="flex flex-col gap-10">

                    {/* Title */}
                    <div>
                        <h2 className="text-[20px] md:text-2xl font-bold text-black uppercase">
                            Our Client
                        </h2>
                        <div className="w-20 h-[3px] bg-yellow-400 mt-2"></div>
                    </div>

                    {/* Clients Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                        {/* Card */}
                        <div className="bg-white py-8 shadow-xl rounded-lg transition duration-300 text-center">

                            {/* Image */}
                            <div className="flex justify-center mb-4">
                                <img
                                    src="https://i.ibb.co.com/5xrN7r6n/pexels-simon-robben-55958-614810.jpg"
                                    alt="client"
                                    className="w-34 h-34 rounded-full object-cover border-4 border-yellow-400"
                                />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-semibold text-gray-800">
                                Labib Rahman
                            </h3>
                            <p className="text-gray-500 text-sm">
                                CEO, ABC Company
                            </p>

                        </div>

                        <div className="bg-white py-8 shadow-xl rounded-lg transition duration-300 text-center">

                            {/* Image */}
                            <div className="flex justify-center mb-4">
                                <img
                                    src="https://i.ibb.co.com/5xrN7r6n/pexels-simon-robben-55958-614810.jpg"
                                    alt="client"
                                    className="w-34 h-34 rounded-full object-cover border-4 border-yellow-400"
                                />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-semibold text-gray-800">
                                Labib Rahman
                            </h3>
                            <p className="text-gray-500 text-sm">
                                CEO, ABC Company
                            </p>

                        </div>

                        <div className="bg-white py-8 shadow-xl rounded-lg transition duration-300 text-center">

                            {/* Image */}
                            <div className="flex justify-center mb-4">
                                <img
                                    src="https://i.ibb.co.com/5xrN7r6n/pexels-simon-robben-55958-614810.jpg"
                                    alt="client"
                                    className="w-34 h-34 rounded-full object-cover border-4 border-yellow-400"
                                />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-semibold text-gray-800">
                                Labib Rahman
                            </h3>
                            <p className="text-gray-500 text-sm">
                                CEO, ABC Company
                            </p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;