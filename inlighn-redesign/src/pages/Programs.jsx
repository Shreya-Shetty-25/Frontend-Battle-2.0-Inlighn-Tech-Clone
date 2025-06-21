import ParticleBackground from "../components/ParticleBackground";
import FloatingDisks from "../components/FloatingDisks";
import ProgramsCard from "../components/ProgramsCard";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Programs() {
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
      <ProgramsCard />
      
     <div style={{marginRight : "-150px"}}>
      <Form />
  <Footer />
</div>
    </>
  );
}
