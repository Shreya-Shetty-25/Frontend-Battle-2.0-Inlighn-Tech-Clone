import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyInlighn() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="w-full px-6 md:px-16 py-20 flex flex-col md:flex-row items-center justify-between gap-10 bg-transparent relative z-10">
      {/* Left - Image */}
      <div
        className="w-full md:w-1/2"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <img
          src="https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Internship Planning"
          className="rounded-[3rem] w-full object-cover shadow-xl"
          style={{ width: "900px" }}
        />
      </div>

      {/* Right - Text Content */}
      <div
        className="w-full md:w-1/2 text-white"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
          We Provide Best internship <br className="hidden sm:block" /> For You
        </h2>
        <p className="text-gray-200 text-lg mb-8 max-w-xl">
          At INLIGHN TECH, we believe that the future of education lies in bridging
          the gap between academic learning and industry needs. Founded with a passion
          for providing meaningful and immersive learning experiences, we offer
          internship programs that equip students and young professionals with practical
          skills in Full Stack Development, Data Science, and Project Management.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md transform hover:scale-105">
          Know More
        </button>
      </div>
    </section>
  );
}
