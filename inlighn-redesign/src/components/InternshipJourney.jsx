import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const InternshipJourney = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 md:p-16 gap-12" style={{marginTop: "140px"}}>
      {/* Left Side - Image */}
      <div data-aos="fade-right" className="w-full md:w-3/5">
        <img
          src="https://www.inlighntech.com/wp-content/uploads/2025/05/Green-Corporate-Financial-Roadmap-Presentation-3.png"
          alt="Internship Roadmap"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side - Text */}
      <div
        data-aos="fade-left"
        className="w-full md:w-2/5 text-center md:text-left space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white -800 leading-tight">
          We Provide Best Industry{" "}
          Services For You.
        </h2>
        <p className="text-white-600 text-xl leading-relaxed">
          At INLIGHN TECH, we believe that the future of education lies in
          bridging the gap between academic learning and industry needs.
          Founded with a passion for providing meaningful and immersive
          learning experiences, we offer internship programs that equip
          students and young professionals with practical skills in Cyber
          Security, Full Stack Development, Data Science, and Project
          Management.
        </p>
      </div>
    </div>
  );
};

export default InternshipJourney;
