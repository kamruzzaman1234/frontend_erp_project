const Clients = () => {
    const clients = [
        {
            name: "Labib Rahman",
            role: "CEO, ABC Company",
            image:
                "https://i.ibb.co.com/5xrN7r6n/pexels-simon-robben-55958-614810.jpg",
        },
        {
            name: "Labib Rahman",
            role: "CEO, ABC Company",
            image:
                "https://i.ibb.co.com/5xrN7r6n/pexels-simon-robben-55958-614810.jpg",
        },
        {
            name: "Labib Rahman",
            role: "CEO, ABC Company",
            image:
                "https://i.ibb.co.com/5xrN7r6n/pexels-simon-robben-55958-614810.jpg",
        },
    ];

    return (
        <div className="py-10 md:py-16 lg:py-20 bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-3 sm:px-5 lg:px-6">

                {/* Title */}
                <div className="mb-8 md:mb-12">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold uppercase">
                        Our Clients
                    </h2>
                    <div className="w-14 md:w-20 h-[3px] bg-yellow-400 mt-2"></div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="bg-white py-6 md:py-8 px-4 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 text-center group"
                        >
                            {/* Image */}
                            <div className="flex justify-center mb-4">
                                <img
                                    src={client.image}
                                    alt={client.name}
                                    className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-yellow-400 group-hover:scale-105 transition"
                                />
                            </div>

                            {/* Content */}
                            <h3 className="text-base md:text-lg font-semibold text-gray-800">
                                {client.name}
                            </h3>

                            <p className="text-xs md:text-sm text-gray-500">
                                {client.role}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Clients;