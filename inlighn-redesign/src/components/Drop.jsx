import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BookText, Presentation, KeyRound } from "lucide-react";

const features = [
  {
    icon: <BookText size={30} />,
    title: "High Quality Resources",
    description: "Our expertly designed resources ensure comprehensive and practical learning for all levels.",
    bg: "from-orange-400 to-pink-300",
  },
  {
    icon: <Presentation size={30} />,
    title: "Expert Instructors",
    description: "Learn from seasoned industry professionals who bring real-world experience to the table.",
    bg: "from-purple-500 to-violet-400",
  },
  {
    icon: <KeyRound size={30} />,
    title: "Internship Portal Access",
    description: "Get separate portal access to all your internship tasks, feedback, and progress tracking.",
    bg: "from-cyan-400 to-teal-300",
  },
];

const WhyChoose = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
   <section className="py-20 px-6 md:px-12 text-center bg-transparent">

      <div data-aos="fade-down">
        <span className="inline-block bg-green-100 text-green-600 font-semibold px-4 py-1 rounded-full mb-4 text-sm md:text-base">
          WHY CHOOSE INLIGHN TECH
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white-800 mb-8">
          The Best Beneficial Side of <br />
          <span className="text-yellow-200">INLIGHNTECH</span>
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto mt-16">
        {/* Curve SVG - background */}
        <svg
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="absolute top-1/4 left-0 w-full h-24 transform -translate-y-1/2 z-0"
        >
          <path
            d="M0,50 C250,0 750,100 1000,50"
            fill="none"
            stroke="#a78bfa"
            strokeDasharray="8,8"
            strokeWidth="2"
          />
        </svg>

        {/* Feature Cards */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              data-aos="fade-down"
              data-aos-delay={idx * 200}
              className="flex flex-col items-center text-center max-w-xs mx-auto"
            >
              <div
                className={`w-32 h-32 bg-gradient-to-br ${feature.bg} rounded-full shadow-xl flex items-center justify-center mb-6`}
              >
                <div className="text-white">{feature.icon}</div>
              </div>
              <h3 className="text-3xl font-bold text-yellow-200 mb-2">{feature.title}</h3>
              <p className="text-blue-100 text-lg leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
