import { FaUniversity, FaHospitalAlt, FaWater } from "react-icons/fa";

const WorkingArea = () => {
    return (
        <div className="py-10 md:py-16 lg:py-20 bg-gray-100">
            <div className="max-w-screen-xl mx-auto px-3 sm:px-5 lg:px-6">

                {/* Section Title */}
                <div className="mb-10 md:mb-12">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black uppercase">
                        U.S. Certified Contractors
                    </h2>
                    <div className="w-12 md:w-16 h-[3px] bg-yellow-400 mt-2"></div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">

                    {/* Card 1 */}
                    <div className="group bg-white rounded-2xl p-5 md:p-6 text-center shadow-sm hover:shadow-lg transition duration-300">
                        <FaUniversity className="text-4xl sm:text-5xl md:text-6xl text-gray-400 mb-4 md:mb-6 group-hover:text-yellow-500 transition" />

                        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
                            Government Building
                        </h3>

                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            We understand you need a building that works for you and your organization, and it must function well.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group bg-white rounded-2xl p-5 md:p-6 text-center shadow-sm hover:shadow-lg transition duration-300">
                        <FaHospitalAlt className="text-4xl sm:text-5xl md:text-6xl text-gray-400 mb-4 md:mb-6 group-hover:text-yellow-500 transition" />

                        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
                            Health Care Construction
                        </h3>

                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            We are very familiar with the challenges of creating high-quality, cost-effective health care environments.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group bg-white rounded-2xl p-5 md:p-6 text-center shadow-sm hover:shadow-lg transition duration-300">
                        <FaWater className="text-4xl sm:text-5xl md:text-6xl text-gray-400 mb-4 md:mb-6 group-hover:text-yellow-500 transition" />

                        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
                            Water Treatment
                        </h3>

                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            The most powerful things we do is help improve water quality for millions of people each year.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WorkingArea;