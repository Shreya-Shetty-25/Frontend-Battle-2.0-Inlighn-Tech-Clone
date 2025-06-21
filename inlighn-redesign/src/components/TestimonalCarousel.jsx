import React from "react";
import "./reviews.css"; // Ensure this matches the correct CSS file path

const reviews = [
  {
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    title: "Frontend Developer Intern at NexaTech",
    review:
      "My internship at NexaTech was an incredible learning journey. I worked on real-world React projects, improved my UI/UX understanding, and collaborated with designers and senior developers. Daily standups and weekly feedback sessions really helped me grow.",
    link: "#",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSITCq_ZcGvFBplrj3xvRLD_CAdQftOTStuQ&s",
    title: "Remote Software Intern at SoftEdge",
    review:
      "This was my first remote internship. Despite the distance, the team ensured I felt included. I worked with Django APIs and Git workflows. I also learned the importance of clear documentation and async communication.",
    link: "#",
  },
  {
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    title: "Data Analyst Intern at GreenCore Solutions",
    review:
      "During my 8-week internship, I worked on live datasets using Power BI and Python. The team was very supportive, and I got to present my analysis to stakeholders. It gave me a clear view of what working in data analytics is like.",
    link: "#",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOkv-eGSvFYP3KouT1uTQqDR5bmcmV1fUqA&s",
    title: "UI/UX Intern at Visionary Labs",
    review:
      "At Visionary Labs, I designed user flows and wireframes for a mobile app. The internship helped me understand user-centered design and collaborate with developers. Regular feedback from the lead designer helped me improve fast.",
    link: "#",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShjb31HfA089FgVlMcI2Tkrhjg6d-C_RADEQ&s",
    title: "AI/ML Intern at ByteCraft",
    review:
      "I explored machine learning models and contributed to an NLP-based chatbot project. Mentorship was a key highlight — weekly code reviews and research discussions helped me sharpen both theory and implementation.",
    link: "#",
  },
];

const ReviewCarousel = () => {
  return (
    <section style={{ textAlign: "center", padding: "2rem 1rem" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "2rem" }}>
        Our Testimonials
      </h1>
      <div className="carousel" mask="" style={{ "--items": reviews.length }}>
        {reviews.map((item, index) => (
          <article key={index} style={{ "--i": index }}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <div>
              <p>{item.review}</p>
              <a href={item.link}>Read full review</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ReviewCarousel;
