import ParticleBackground from "../components/ParticleBackground";
import FloatingDisks from "../components/FloatingDisks";
import Form from "../components/Form";
import VerifyCertificate from "../components/VerifyCertificate";
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
      <VerifyCertificate />
      <div style= {{marginLeft: "0px"}}>
        <Form />
      <Footer />
      </div>
      
      
    </>
  );
}
