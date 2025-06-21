import {
  FaLaptopCode,
  FaUserTie,
  FaCertificate,
  FaCalendarAlt,
} from "react-icons/fa";

// ... imports remain the same
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Features() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const features = [
    {
      title: "Real-World Projects",
      desc: "Gain hands-on experience with real industry projects and build a portfolio that stands out.",
      color: "text-orange-400",
      icon: <FaLaptopCode className="text-5xl text-orange-400" />,
      shift: "-translate-y-4",
    },
    {
      title: "Expert Mentorship",
      desc: "Learn from seasoned professionals who guide you through every step of your journey.",
      color: "text-cyan-400",
      icon: <FaUserTie className="text-5xl text-cyan-400" />,
    },
    {
      title: "Certified Programs",
      desc: "Complete the programs and get certified in your field to showcase your skills.",
      color: "text-cyan-400",
      icon: <FaCertificate className="text-5xl text-cyan-400" />,
    },
    {
      title: "Flexible Learning",
      desc: "Do at your own pace with online programs designed to fit your schedule.",
      color: "text-orange-400",
      icon: <FaCalendarAlt className="text-5xl text-orange-400" />,
      shift: "translate-y-4",
    },
  ];

  return (
    <section className="px-4 md:px-16 py-20 w-full flex flex-col md:flex-row items-start gap-10 relative z-10">
      {/* Left image */}
      <div className="w-full md:w-1/2 relative z-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlJTIwd29ya2luZyUyMG9uJTIwbGFwdG9wfGVufDB8fDB8fHww"
          alt="Team working"
          className="rounded-3xl w-full object-cover shadow-xl"
          style={{ height: "600px" }}
        />
      </div>

      {/* Right feature cards */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 relative z-10">
        {features.map((feat, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 150}
            className={`
              min-h-[140px] rounded-3xl bg-[#002c33] px-6 py-8 shadow-lg transition-all duration-300 ease-in-out transform
              flex items-center gap-6 relative
              ${feat.shift ? `md:${feat.shift}` : ""}
              ${[0, 3].includes(idx) ? "md:ml-8" : ""}
              hover:scale-105 hover:shadow-2xl hover:-translate-y-1 cursor-pointer
            `}
          >
            <div className="flex-shrink-0 p-3 bg-white/10 rounded-full">
              {feat.icon}
            </div>
            <div>
              <h3 className={`text-2xl font-bold mb-2 ${feat.color}`}>
                {feat.title}
              </h3>
              <p className="text-gray-300 text-lg">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
