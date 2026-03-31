const Contact = () => {
    return (
        <div className="py-10 md:py-16 lg:py-20 bg-white">
            <div className="max-w-screen-xl mx-auto px-3 sm:px-5 lg:px-6">

                {/* Title */}
                <div className="mb-8 md:mb-12">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black uppercase">
                        Contact Us
                    </h2>
                    <div className="w-14 md:w-20 h-[3px] bg-yellow-400 mt-2"></div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

                    {/* LEFT: FORM */}
                    <div className="bg-gray-50 p-5 sm:p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition">

                        <h3 className="text-lg md:text-xl font-semibold mb-5 md:mb-6 text-gray-800">
                            Get In Touch
                        </h3>

                        <form className="space-y-4 md:space-y-5">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />

                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-yellow-400 text-white py-2.5 md:py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-yellow-500 transition"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                    {/* RIGHT: IMAGE */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px]">

                            {/* Main Image */}
                            <img
                                src="https://i.ibb.co.com/0XDYFDC/Frame.png"
                                alt="contact"
                                className="w-full h-auto object-cover rounded-xl shadow-xl"
                            />

                            {/* Decorative Shape */}
                            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-12 md:w-20 h-12 md:h-20 bg-yellow-400 rounded-xl -z-10"></div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;