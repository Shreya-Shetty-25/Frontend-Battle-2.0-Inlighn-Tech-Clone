// Layout.jsx
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Layout() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      <Loader isLoading={loading} />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
