import React, { useEffect } from "react";
import { CheckCircle, CheckCheck } from "lucide-react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData1 from "../assets/ani1.json";
import animationData2 from "../assets/ani2.json";
import AOS from "aos";
import "aos/dist/aos.css";

const VisionMissionSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const animations = [animationData1, animationData2];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 gap-10">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 space-y-10">
        <div data-aos="fade-right">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Save Time and Effort with
          </h2>
          <h1 className="text-4xl font-extrabold text-white">INLIGHN TECH</h1>
        </div>

        <div data-aos="fade-up" className="flex items-start gap-4">
          <div className=" bg-cyan-400 rounded-full flex items-center justify-center text-white text-2xl" style={{height: "50px", width:"125px"}}>
            <CheckCircle />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Our Vision</h3>
            <p className="text-white text-lg leading-relaxed">
              To be a leading EdTech platform that bridges the gap between academic knowledge and industry demands,
              shaping the next generation of tech innovators and leaders through hands-on, practical learning.
            </p>
          </div>
        </div>

        <div data-aos="fade-up" className="flex items-start gap-4">
          <div className=" bg-cyan-400 rounded-full flex items-center justify-center text-white text-2xl" style={{height: "50px", width:"165px"}}>
            <CheckCircle />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Our Mission</h3>
            <p className="text-white text-lg leading-relaxed">
              To empower students and young professionals by providing immersive, real-world learning experiences through tailored internship programs.
              We aim to equip our participants with the practical skills and confidence needed to thrive in today’s competitive tech industry.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Tailwind Lottie Slider */}
      <div data-aos="fade-left" className="relative w-full lg:w-1/2 flex items-center justify-center">
        <div className="relative w-92 h-92 overflow-hidden rounded-full">
          <div className="absolute inset-0 bg-purple-700 opacity-30 blur-3xl z-0" />

          <div className="flex w-[200%] h-full animate-slide-lottie relative z-10">
            {animations.map((animation, index) => (
              <div key={index} className="w-1/2 h-full flex items-center justify-center">
                <Player
                  autoplay
                  loop
                  src={animation}
                  className="w-[588px] h-[588px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSection;
