import React, { useEffect, useRef, useState } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Remove if you want animation every time in view
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`bg-[#002b35] text-white py-12 px-6 md:px-20 transition-opacity duration-1000 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <img src={logo} alt="Logo" className="w-24 h-24 mb-4" />
          <p>
            At INLIGHN TECH, we believe that the future of education lies in
            bridging the gap between academic learning and industry needs.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-[#00d6b2] font-semibold mb-4 text-lg">Menu</h3>
          <ul className="space-y-2">
            {["Home", "About Us", "Programs", "Contact Us", "Login To Portal"].map(
              (item, idx) => (
                <li
                  key={idx}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#00d6b2]"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#00d6b2] font-semibold mb-4 text-lg">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {["Privacy Policy", "Term & Conditions", "Disclaimer", "FAQ's"].map(
              (item, idx) => (
                <li
                  key={idx}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#00d6b2]"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-[#00d6b2] font-semibold mb-4 text-lg">Follow Us</h3>
          <div className="flex space-x-4 mb-6">
            {[FaLinkedin, FaInstagram, FaYoutube].map((Icon, idx) => (
              <Icon
                key={idx}
                className="w-8 h-8 p-1 rounded-full bg-white text-black cursor-pointer transition transform duration-300 hover:bg-[#00d6b2] hover:text-white hover:scale-110"
              />
            ))}
          </div>
          <p className="mb-2 font-semibold">
            Corporate Office- Office No: VO-301,
            <br />
            WeWork Prestige Central, Ground Floor,
            <br />
            36, Infantry Rd, Tasker Town, Shivaji Nagar,
            <br />
            Bengaluru, Karnataka 560001
          </p>
          <p className="flex items-center gap-2 mt-4">
            <FaPhoneAlt className="text-[#00d6b2]" /> +91 9368842663
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaEnvelope className="text-[#00d6b2]" /> info@inlighntech.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
