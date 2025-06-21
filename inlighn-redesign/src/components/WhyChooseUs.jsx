import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, User } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
const cardVariantsLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const cardVariantsRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="w-full py-20 px-4 md:px-16">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 text-white">
        Why Choose Us?
      </h2>

      <div
        ref={ref}
        className="flex flex-col lg:flex-row justify-between items-center gap-12"
      >
        {/* Left Column */}
        <div className="flex flex-col gap-10 w-full lg:w-1/2">
          {/* Card 1 */}
          <motion.div
            className="group relative rounded-xl h-72 md:h-80 p-8 bg-white text-black shadow-lg transition-all duration-300 hover:bg-[#f59e0b] hover:text-white cursor-pointer"
            variants={cardVariantsLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="absolute top-5 left-5 w-16 h-16 flex items-center justify-center rounded-full border-4 border-orange-300 bg-white group-hover:bg-orange-100 transition-all">
              <Lightbulb className="w-8 h-8 text-orange-600 group-hover:text-orange-800" />
            </div>
            <h3 className="text-3xl font-bold mb-4 mt-20">Career Support</h3>
            <p className="text-lg">
              We go beyond training. Our career services include portfolio
              reviews, interview prep, and connections with industry professionals
              to help you land your dream job.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="group relative rounded-xl h-72 md:h-80 p-8 bg-white text-black shadow-lg transition-all duration-300 hover:bg-[#f59e0b] hover:text-white cursor-pointer"
            variants={cardVariantsLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute top-5 left-5 w-16 h-16 flex items-center justify-center rounded-full border-4 border-purple-400 bg-white group-hover:bg-orange-100 transition-all">
              <User className="w-8 h-8 text-purple-600 group-hover:text-orange-800" />
            </div>
            <h3 className="text-3xl font-bold mb-4 mt-20">Tailored Programs</h3>
            <p className="text-lg">
              Our courses in Full Stack Development, Data Science, and Project
              Management are crafted with a focus on hands-on, practical learning.
            </p>
          </motion.div>
        </div>

        {/* Right Column - Image Card */}
        <motion.div
          className="w-full lg:w-1/2"
          variants={cardVariantsRight}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="rounded-xl overflow-hidden shadow-xl h-72 md:h-[420px]">
            <img
              src="https://media.istockphoto.com/id/2047840736/photo/business-woman-smile-and-portrait-with-confidence-and-coworking-space-at-creative-consultant.webp?a=1&b=1&s=612x612&w=0&k=20&c=aaOoWqwBSwnDfaRwbbfj6YlUGcL-fTTceoc70Vkx3PU="
              alt="Professional"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
