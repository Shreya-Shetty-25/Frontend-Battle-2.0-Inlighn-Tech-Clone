import React, { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrolled / totalHeight) * 100;

      setScrollPercent(scrollPercent);
      setVisible(scrolled > 100); // Show only after some scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="relative w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg"
        aria-label="Scroll to top"
      >
        <FaChevronUp className="text-red-400" />
        <svg
          className="absolute top-0 left-0 w-full h-full transform -rotate-90"
          viewBox="0 0 36 36"
        >
          <path
            className="text-red-400"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            d="
              M18 2
              a 16 16 0 0 1 0 32
              a 16 16 0 0 1 0 -32
            "
            strokeDasharray="100"
            strokeDashoffset={100 - scrollPercent}
          />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTopButton;
