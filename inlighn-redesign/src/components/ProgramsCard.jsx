// ProgramsCard.jsx
import React from "react";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Business Analyst Internship Program",
    description: "Gain practical business analysis skills by working on real-world projects.",
    image: "https://images.pexels.com/photos/5912280/pexels-photo-5912280.jpeg",
  },
  {
    title: "Front-End Development Internship",
    description: "Kickstart your journey into web development by learning HTML, CSS, JavaScript, and React.",
    image: "https://images.pexels.com/photos/5905608/pexels-photo-5905608.jpeg",
  },
  {
    title: "Ethical Hacking with Kali Linux",
    description: "Gain practical skills in cybersecurity and ethical hacking using Kali Linux.",
    image: "https://images.pexels.com/photos/7125676/pexels-photo-7125676.jpeg",
  },
  {
    title: "Data Science Internship",
    description: "Learn data analysis, Python, machine learning, and real-world data project building.",
    image: "https://images.pexels.com/photos/6237955/pexels-photo-6237955.jpeg",
  },
  {
    title: "UI/UX Design Program",
    description: "Master UI/UX principles with hands-on Figma projects and design systems.",
    image: "https://images.pexels.com/photos/7125676/pexels-photo-7125676.jpeg",
  },
  {
    title: "Cloud Computing Internship",
    description: "Get hands-on with AWS, Azure, and cloud deployment skills.",
    image: "https://images.pexels.com/photos/5912280/pexels-photo-5912280.jpeg",
  },
  {
    title: "Android App Development",
    description: "Build apps using Kotlin and Android Studio in real-world scenarios.",
    image: "https://images.pexels.com/photos/7125676/pexels-photo-7125676.jpeg",
  },
  {
    title: "Python Programming Essentials",
    description: "Master Python basics, OOP, and projects for a strong programming foundation.",
    image: "https://images.pexels.com/photos/5905608/pexels-photo-5905608.jpeg",
  },
  {
    title: "AI & Machine Learning",
    description: "Implement AI models and understand ML algorithms using Python and TensorFlow.",
    image: "https://images.pexels.com/photos/5912280/pexels-photo-5912280.jpeg",
  },
];

const ProgramsCard = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-transparent">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Our Programs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {programs.map((program, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden shadow-md transition-all duration-300 transform bg-white hover:-translate-y-2 hover:bg-blue-100"

          >
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{program.title}</h3>
              <div className="flex items-center text-yellow-500 mb-2">
                {"★".repeat(5)}
              </div>
              <p className="text-gray-600 text-sm mb-4">{program.description}</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-orange-600 transition-colors">
                Learn More <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsCard;
