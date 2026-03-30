const Banner = () => {
    return (
        <div className="py-[180px] relative" style={{backgroundImage: "url('https://i.ibb.co.com/J6H4BFC/bs.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment:"fixed"}}>
                <div className="">
                    <div className="max-w-screen-xl mx-auto px-4 text-center">
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white uppercase mb-4 drop-shadow-md">
                    Welcome to ERP Project
                </h1>
                <p className="text-lg md:text-xl text-white mb-6 max-w-2xl drop-shadow-sm">
                    Monitor projects, track budgets, manage tasks, and approvals all in one place.
                </p>
                <button className="border-[1.5px] border-yellow-400 hover:bg-yellow-400 hover:text-white py-2 px-6 text-yellow-400 btn-lg rounded-lg uppercase tracking-wide transition-all duration-300">
                    Get Started
                </button>
            </div>
                </div>
                </div>
        </div>
    );
};

export default Banner;