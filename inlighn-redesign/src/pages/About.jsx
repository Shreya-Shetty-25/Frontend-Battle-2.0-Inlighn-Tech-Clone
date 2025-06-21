  import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ParticleBackground from '../components/ParticleBackground';
import FloatingDisks from '../components/FloatingDisks';
import InternshipJourney from '../components/InternshipJourney';
import Save from '../components/Save';
import Numbers from '../components/Numbers';
import Drop from '../components/Drop';
import TestimonalCarousel from '../components/TestimonalCarousel';
import Form from '../components/Form';
import Footer from '../components/Footer';

const About = () => {
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
           <InternshipJourney />
           <Save />
           <Numbers />
           <Drop />
           <TestimonalCarousel />
           <Form />
           <Footer />
           
        </>
  );
};

export default About;