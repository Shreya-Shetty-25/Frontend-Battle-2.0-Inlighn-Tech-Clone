import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    title: "About INLIGHN TECH",
    desc: `At INLIGHN TECH, we believe that the future of education lies in bridging the gap between academic learning and industry needs. Founded with a passion for providing meaningful and immersive learning experiences, we offer internship programs that equip students and young professionals with practical skills in Full Stack Development, Data Science, and Project Management.`,
    icon: "https://cdn-icons-png.flaticon.com/512/7479/7479782.png",
    bgColor: "bg-cyan-400",
    shadowColor: "shadow-cyan-500",
    hoverImage:
      "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    title: "Our Mission",
    desc: `To empower students and young professionals by providing immersive, real-world learning experiences through tailored internship programs. We aim to equip our participants with the practical skills and confidence they need to succeed in the fast-evolving tech industry.`,
    icon: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png",
    bgColor: "bg-orange-400",
    shadowColor: "shadow-orange-500",
    hoverImage:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    title: "Our Vision",
    desc: `To empower students and young professionals by providing immersive, real-world learning experiences through tailored internship programs. We aim to equip our participants with the practical skills and confidence they need to succeed in the fast-evolving tech industry.`,
    icon: "https://cdn-icons-png.flaticon.com/512/2620/2620983.png",
    bgColor: "bg-cyan-400",
    shadowColor: "shadow-cyan-500",
    hoverImage:
      "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

export default function AboutMissionVision() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div className="px-4 md:px-16 pt-12 mb-12">
        <h2 className="text-white text-4xl md:text-5xl font-bold tracking-wide font-sans">
          WHO WE ARE
        </h2>
      </div>

      <section className="px-4 md:px-16 py-20 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {data.map((item, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            data-aos="fade-up"
            data-aos-delay={idx * 150}
            className="relative flex flex-col justify-between rounded-3xl overflow-hidden shadow-xl bg-[#02272f] text-white group min-h-[520px] cursor-pointer transition-all duration-500 ease-in-out will-change-transform"
            style={{ willChange: "transform, background-position" }}
          >
            {/* Sliding Background Image */}
            <div
              className="absolute inset-0 z-0 bg-cover bg-no-repeat opacity-50 transition-[background-position] duration-700 ease-in-out will-change-[background-position]"
              style={{
                backgroundImage: `url(${item.hoverImage})`,
                backgroundPositionX: hoveredIndex === idx ? "100%" : "-100%",
                backgroundPositionY: "center",
                backgroundSize: "200% 100%",
              }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-8 pb-24">
              {/* Icon with glow */}
              <div className="mb-6">
                <div className="relative w-24 h-24">
                  <div
                    className={`${item.bgColor} ${item.shadowColor} absolute inset-0 rounded-full blur-md opacity-70 transition-opacity duration-300`}
                    style={{ opacity: hoveredIndex === idx ? 1 : 0.7 }}
                  />
                  <div
                    className={`${item.bgColor} relative w-24 h-24 rounded-full flex items-center justify-center transition-transform duration-300 will-change-transform group-hover:scale-110`}
                  >
                    <img src={item.icon} alt="icon" className="w-12 h-12" />
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-cyan-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-[16px] leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* Arrow button fixed to bottom-left */}
            <div className="absolute bottom-0 left-0 z-20">
              <div className="w-16 h-16 bg-teal-400 rounded-bl-3xl flex items-center justify-center transition-transform transition-colors duration-300 will-change-transform group-hover:bg-orange-500 group-hover:scale-110">
                <FaArrowRight
                  className={`text-white text-lg transition-transform duration-500 will-change-transform ${
                    hoveredIndex === idx ? "rotate-180 scale-125" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
