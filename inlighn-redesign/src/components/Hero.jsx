export default function Hero() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 pt-[160px] pb-20 relative overflow-hidden z-10">
      {/* Left */}
      <div 
        className="w-full md:w-1/2 text-white text-center md:text-left"
        data-aos="fade-right"  // add this
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8" data-aos="fade-up" data-aos-delay="200">
          Transform Your Career with{" "}
          <span className="text-orange-400">INLIGHN TECH</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-xl mx-auto md:mx-0" data-aos="fade-up" data-aos-delay="400">
          Gain real-world experience with our immersive internship programs in
          Cyber Security, Full Stack Development, Data Science, Data Analyst, and
          in various tech domains. Learn today, lead tomorrow.
        </p>
        <div className="relative inline-block" data-aos="zoom-in" data-aos-delay="600">
          <button className="bg-teal-400 text-white text-lg md:text-xl font-semibold py-4 px-8 rounded-lg shadow-md hover:bg-teal-500 transition-all duration-300">
            Explore Internships
          </button>
        </div>
      </div>

      {/* Right */}
      <div 
        className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end"
        data-aos="fade-left"
        data-aos-delay="800"
      >
        <img
          src="https://www.inlighntech.com/wp-content/uploads/2025/06/ai-nuclear-energy-future-innovation-disruptive-technology-scaled.jpg"
          alt="Hero"
          className="w-[90%] sm:w-[75%] md:w-[400px] lg:w-[500px] xl:w-[580px] max-h-[600px] rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
}
