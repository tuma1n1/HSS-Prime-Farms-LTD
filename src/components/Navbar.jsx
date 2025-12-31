import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, animate } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const y = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        animate(y, -90, { duration: 0.3, ease: "easeOut" });
      } else {
        animate(y, 0, { duration: 0.3, ease: "easeOut" });
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll, y]);

  return (
    <motion.header className="navbar" style={{ y }}>
      <div className="container navbar-inner">

        {/* Logo */}
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <img src="/images/HSS_Logo.png" alt="HSS Prime Farms" />
        </Link>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setOpen(!open)}>
          ☰
        </div>

        {/* Links */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/poultry" onClick={() => setOpen(false)}>Poultry</Link>
          </li>
          <li>
            <Link to="/meats" onClick={() => setOpen(false)}>Meats</Link>
          </li>
          <li>
            <Link to="/agribusiness" onClick={() => setOpen(false)}>Agribusiness</Link>
          </li>
          <li>
            <Link to="/outlets" onClick={() => setOpen(false)}>Outlets</Link>
          </li>
        </ul>

      </div>
    </motion.header>
  );
}
