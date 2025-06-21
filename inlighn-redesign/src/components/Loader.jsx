import { useEffect, useState } from "react";
import logo from "../assets/logo.png"; // Replace with correct logo path
import "./Loader.css";

const Loader = ({ isLoading }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      // Allow slide out first, then hide loader
      const timer = setTimeout(() => setHide(true), 1600);
      return () => clearTimeout(timer);
    } else {
      setHide(false); // reset if loading again
    }
  }, [isLoading]);

  if (hide) return null;

  return (
    <div className={`loader-wrapper ${!isLoading ? "slide-out" : ""}`}>
      <div className="gray-slide">
        <div className="loader-content">
          <div className="spinner-border">
            <img src={logo} alt="Logo" className="logo-img" />
          </div>
        </div>
      </div>
      <div className="orange-slide" />
    </div>
  );
};

export default Loader;
