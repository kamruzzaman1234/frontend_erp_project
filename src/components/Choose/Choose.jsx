const Choose = () => {
    const features = [
        {
            title: "Expert Technicians",
            description: "Our certified experts provide top-quality construction services with precise planning and execution.",
            icon: "🏗️",
        },
        {
            title: "Affordable Pricing",
            description: "High-quality services at competitive rates. No hidden costs and full transparency.",
            icon: "💰",
        },
        {
            title: "Fast Turnaround",
            description: "Efficient project completion without compromising quality. We respect your timelines.",
            icon: "⏱️",
        },
        {
            title: "All-Inclusive Services",
            description: "From design to build, we offer complete construction solutions in one place.",
            icon: "🛠️",
        },
    ];

    return (
        <section className="py-16 md:py-20 bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-20 text-center">

                {/* Title */}
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black uppercase">
                    Why Choose Us
                </h2>
                <div className="w-16 h-[3px] bg-yellow-400 mt-2 mx-auto"></div>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    From small renovations to major projects, we provide reliable and professional construction services.
                </p>

                {/* Features & Image */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                    {/* Left Features */}
                    <div className="flex flex-col gap-6 md:items-end order-2 md:order-1">
                        {features.slice(0, 2).map((feature, index) => (
                            <div key={index} className="text-right md:max-w-xs">
                                <div className="flex items-center justify-end gap-3 text-2xl">
                                    <span>{feature.icon}</span>
                                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                                </div>
                                <p className="text-gray-600 mt-1">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Center Image */}
                    <div className="flex justify-center order-1 md:order-2">
                        <img
                            src="https://i.ibb.co.com/sqdrtYM/pexels-jvdm-1457842.jpg"
                            alt="Construction"
                            className="rounded-xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                        />
                    </div>

                    {/* Right Features */}
                    <div className="flex flex-col gap-6 md:items-start order-3">
                        {features.slice(2, 4).map((feature, index) => (
                            <div key={index} className="text-left md:max-w-xs">
                                <div className="flex items-center gap-3 text-2xl">
                                    <span>{feature.icon}</span>
                                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                                </div>
                                <p className="text-gray-600 mt-1">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-12">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-8 rounded-lg transition">
                        Get a Free Quote
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Choose;