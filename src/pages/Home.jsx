import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { fadeUp, fadeIn } from "../styles/animations";

export default function Home() {
  const slides = [
    "/images/banner-bg.png",
    "/images/Crops-3.jpg",
    "/images/Crops-4.jpg",
    "/images/Crops-6.jpg",
    "/images/Crops-7.jpg",
    "/images/Crops-8.jpg",
    "/images/Chicken-1.jpg",
    "/images/Chicken-2.jpg",
    "/images/Chicken-3.jpg",
    "/images/Chicks.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 5500); // ⏳ change speed here
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>HSS Prime Farms — Poultry • Meat • Agribusiness</title>

        <meta
          name="description"
          content="HSS Prime Farms is a modern Kenyan agribusiness supplying high-quality poultry, meat, and horticulture products through safe, sustainable and scalable farming."
        />

        <meta property="og:title" content="HSS Prime Farms — From Farm to Future" />
        <meta
          property="og:description"
          content="A Kenyan agribusiness delivering quality poultry, meat, and horticulture — sustainably and at scale."
        />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://www.your-domain.com/" />
      </Helmet>

      <div>

        {/* HERO */}
        <section className="hero-section">

          {/* SLIDES */}
          <div className="hero-slides">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="hero-slide"
                style={{
                  backgroundImage: `
                    linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.75)),
                    url(${slides[index]})
                  `
                }}
              />
            </AnimatePresence>
          </div>

          <div className="hero-content">
            <motion.h1 variants={fadeUp}>
              From Farm to Future
            </motion.h1>

            <motion.p variants={fadeUp} className="hero-subtitle">
              A modern Kenyan agribusiness delivering quality poultry, meats, and horticulture —
              sustainably and at scale.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="hero-buttons"
            >
              <Link to="/about" className="btn-hero">
                About Us
              </Link>
            </motion.div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats-overlap">
          <div className="stats" >
            {[
              ["10K+", "Bird Capacity"],
              ["5+", "Counties Reached"],
              ["24/7", "Cold Chain"],
              ["100%", "Quality Focus"]
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                className="stat-box glow"
              >
                <h2>{stat[0]}</h2>
                <p>{stat[1]}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="section">
          <motion.h2 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="visible" 
            className="section-title"
          >
            What We Do
          </motion.h2>

          <div className="grid-3">
            {[
              {
                img: "/images/poultry.jpg",
                title: "Poultry Production",
                text: "Commercial broilers raised for quality and consistency.",
                link: "/poultry"
              },
              {
                img: "/images/Meat.jpg",
                title: "Meat Supply",
                text: "Clean, inspected, cold-chain handled meats.",
                link: "/meats"
              },
              {
                img: "/images/Crops-2.jpg",
                title: "Agribusiness",
                text: "High-value crops grown for local and regional markets.",
                link: "/agribusiness"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                className="service-card soft-card"
              >
                <img src={item.img} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link to={item.link} className="text-link">
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FARM TO MARKET */}
        <section className="section alt">
          <motion.h2 className="section-title" variants={fadeUp} initial="hidden" whileInView="visible">
            Farm to Market Pipeline
          </motion.h2>

          <div className="pipeline">
            {["🌱 Farming", "🐔 Production", "❄️ Cold Storage", "🚚 Distribution", "🏬 Market"].map(
              (step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  className="pipeline-step"
                >
                  {step}
                  {i !== 4 && <span className="pipeline-arrow">→</span>}
                </motion.div>
              )
            )}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="section">
          <motion.h2 className="section-title" variants={fadeUp} initial="hidden" whileInView="visible">
            Why Choose Us
          </motion.h2>

          <div className="grid-3">
            {[
              "Quality & Safety assured at every stage",
              "Reliable supply for growing markets",
              "Sustainable farming practices"
            ].map((text, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                className="simple-card soft-card"
              >
                {text}
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h2>Partner With HSS Prime Farms</h2>
            <Link to="/contact" className="btn-primary">Get in Touch</Link>
          </motion.div>
        </section>

      </div>
    </>
  );
}