const Feature = () => {
  return (
    <div className="py-10 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black uppercase">
            Feature Work
          </h2>
          <div className="w-12 md:w-16 h-[3px] bg-yellow-400 mt-2"></div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {/* Card 1 */}
          <div className="w-full h-64 sm:h-80 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
            <img
              src="https://i.ibb.co.com/pvP2ng1f/h5.jpg"
              alt="Feature 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card 2 */}
          <div className="w-full h-64 sm:h-80 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
            <img
              src="https://i.ibb.co.com/YBHjfbtt/pexels-pixabay-262048.jpg"
              alt="Feature 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card 3 */}
          <div className="w-full h-64 sm:h-80 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
            <img
              src="https://i.ibb.co.com/pvP2ng1f/h5.jpg"
              alt="Feature 3"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Feature;