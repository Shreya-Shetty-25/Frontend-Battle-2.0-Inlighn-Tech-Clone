import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Verify Certificate", path: "/verify" },
  { name: "Contact", path: "/contact" },
  { name: "Support", path: "/support" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 929);
  const location = useLocation();
  const loginText = "Login to Portal";

  // Cursor dot + ring animation
  useEffect(() => {
    const dot = document.createElement("div");
    const ring = document.createElement("div");

    dot.className = "cursor-dot";
    ring.className = "cursor-ring";

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = 0,
      mouseY = 0;
    let ringX = 0,
      ringY = 0;
    const followSpeed = 0.2;

    const animate = () => {
      ringX += (mouseX - ringX) * followSpeed;
      ringY += (mouseY - ringY) * followSpeed;

      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

      requestAnimationFrame(animate);
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseDown = () => {
      ring.style.width = "60px";
      ring.style.height = "60px";
      ring.style.backgroundColor = "rgba(255, 165, 0, 0.4)";
    };

    const onMouseUp = () => {
      ring.style.width = "40px";
      ring.style.height = "40px";
      ring.style.backgroundColor = "rgba(255, 165, 0, 0.2)";
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      dot.remove();
      ring.remove();
    };
  }, []);

  // Resize detection
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 929;
      setIsMobileView(mobile);
      if (!mobile) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      {!isMobileView && (
        <nav className="flex items-center justify-between px-6 h-[140px] w-full bg-white fixed top-0 shadow z-50">
          <div className="flex items-center">
            <div className="h-[130px] w-[130px] rounded-full bg-gray-300 overflow-hidden ml-4">
              <img src={logo} alt="Logo" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-lg font-semibold transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-green-700 underline underline-offset-8"
                    : "text-black hover:text-[#00f6ff]"
                }`}
              >
                <span className="group relative">
                  {link.name}
                  <span
                    className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#00f6ff] transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left w-full ${
                      location.pathname === link.path ? "hidden" : "block"
                    }`}
                  ></span>
                </span>
              </Link>
            ))}
            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="relative px-4 py-2 bg-orange-500 text-white font-semibold rounded overflow-hidden group"
            >
              <span className="relative z-10">
                {[...loginText].map((char, i) => (
                  <span
                    key={i}
                    className={`inline-block ${hovered ? "animate-waveChar" : ""}`}
                    style={{
                      animationDelay: `${i * 80}ms`,
                      display: "inline-block",
                      whiteSpace: char === " " ? "pre" : "normal",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
              <span className="absolute inset-0 bg-white opacity-20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
          </div>
        </nav>
      )}

      {/* Mobile Navbar */}
      {isMobileView && (
        <>
          <div className="fixed top-0 left-0 w-full h-[140px] bg-white text-black flex items-center justify-between px-4 z-50">
            <div className="h-[130px] w-[130px] rounded-full bg-gray-300 overflow-hidden">
              <img src={logo} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <button
              onClick={() => setMenuOpen(true)}
              className="bg-green-900 text-white p-2 rounded"
            >
              <FiMenu size={24} />
            </button>
          </div>

          {/* Slide-in Menu */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-300">
              <div className="w-14 h-14 rounded-full bg-gray-300 overflow-hidden">
                <img src={logo} alt="Logo" className="w-full h-full object-cover" />
              </div>
              <button onClick={() => setMenuOpen(false)}>
                <FiX size={24} className="text-black" />
              </button>
            </div>

            <div className="px-4 py-3 border-b border-gray-200 flex items-center gap-2">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
              />
              <FiSearch size={18} className="text-gray-600" />
            </div>

            <div className="flex flex-col divide-y divide-gray-200 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 font-semibold transition-colors duration-200 ${
                    location.pathname === link.path ? "text-orange-500" : "text-black"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
