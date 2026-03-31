import video from "./video.mp4";

const Banner = () => {
    return (
        <div className="relative w-full h-[500px] sm:h-[550px] md:h-[700px] overflow-hidden">

            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src={video} type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-12">

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase mb-4 leading-snug">
                    Welcome to ERP Project
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 max-w-xl sm:max-w-2xl">
                    Monitor projects, track budgets, manage tasks, and approvals all in one place.
                </p>

                <button className="border border-yellow-400 hover:bg-yellow-400 hover:text-black py-3 px-6 sm:px-8 rounded-lg uppercase text-yellow-400 text-sm sm:text-base transition">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Banner;