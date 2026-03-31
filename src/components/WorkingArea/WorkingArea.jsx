import { FaUniversity, FaHospitalAlt, FaWater } from "react-icons/fa";

const WorkingArea = () => {
    return (
        <div className="py-[80px] bg-gray-100">
            <div className="max-w-screen-xl mx-auto px-4 text-center">

                {/* Section Title */}
                <div className="mb-12 text-left">
                    <h2 className="text-[18px] md:text-2xl font-bold text-black uppercase">U.S. Certified Contractors</h2>
                    <div className="w-16 h-[3px] bg-yellow-400 mt-2"></div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Card 1 */}
                    <div className="flex flex-col items-center text-center px-4">
                        <FaUniversity className="text-6xl text-gray-500 mb-6" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            Government Building
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            We understand you need a building that works for you and your organization, and it must function well.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col items-center text-center px-4">
                        <FaHospitalAlt className="text-6xl text-gray-500 mb-6" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            Health Care Construction
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            We are very familiar with the challenges of creating high-quality, cost-effective health care environments.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col items-center text-center px-4">
                        <FaWater className="text-6xl text-gray-500 mb-6" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            Water Treatment
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            The most powerful things we do is help improve water quality for millions of people each year.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WorkingArea;