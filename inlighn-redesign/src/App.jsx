// App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import Verify from "./pages/Verify";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="programs" element={<Programs />} />
        <Route path="verify" element={<Verify />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
