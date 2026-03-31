const Contact = () => {
    return (
        <div className="py-[80px] bg-white">
            <div className="max-w-screen-xl mx-auto px-6">

                {/* Title */}
                <div className="mb-12">
                    <h2 className="text-[20px] md:text-2xl font-bold text-black uppercase">
                        Contact Us
                    </h2>
                    <div className="w-20 h-[3px] bg-yellow-400 mt-2"></div>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT: FORM */}
                    <div className="bg-gray-50 p-8 rounded-xl shadow-md">

                        <h3 className="text-xl font-semibold mb-6 text-gray-800">
                            Get In Touch
                        </h3>

                        <form className="space-y-5">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />

                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-yellow-400 text-white py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                    {/* RIGHT: IMAGE DESIGN */}
                    <div className="flex justify-center">
                        <div className="relative w-[380px] h-[380px]">

                            {/* Main Image */}
                            <img
                                src="https://i.ibb.co.com/0XDYFDC/Frame.png"
                                alt="contact"
                                className="w-full h-full object-cover rounded-xl shadow-2xl"
                            />

                            {/* Overlay Image */}


                            {/* Decorative Shape */}
                            <div className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-400 rounded-xl -z-10"></div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;