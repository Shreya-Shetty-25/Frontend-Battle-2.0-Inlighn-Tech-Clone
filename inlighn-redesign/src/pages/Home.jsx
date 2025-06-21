import ParticleBackground from "../components/ParticleBackground";
import FloatingDisks from "../components/FloatingDisks";
import Hero from "../components/Hero"; // ⬅️ import your Hero section
import Recognitions from "../components/Recognitions";
import WhyInlighn from "../components/WhyInlighn";
import Features from "../components/Features";
import AboutMissionVision from "../components/AboutMissionVission";
import Numbers from "../components/Numbers";
import WhyChooseUs from "../components/WhyChooseUs";
import TestimonialCarousel from "../components/TestimonalCarousel";
import Form from "../components/Form";
import Footer from "../components/Footer";
  import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  return (
    <>
      <ParticleBackground />
      <FloatingDisks />
      <Hero />
       <Recognitions />
       <WhyInlighn />
      <Features />
      <AboutMissionVision />
      <Numbers />
      <WhyChooseUs />
      <TestimonialCarousel />
      <Form />
      <Footer />
    </>
  );
}
