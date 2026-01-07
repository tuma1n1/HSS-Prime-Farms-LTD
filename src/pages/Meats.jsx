import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, fadeIn } from "../styles/animations";

/* SLIDER HOOK */
function useSlider(images, delay = 4500) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Preload images first
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, delay);

    return () => clearInterval(timer);
  }, [images, delay]);

  return { src: images[index], index };
}

/* SLIDE ANIMATION */
const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (dir) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0
  })
};

export default function Meats() {
  const beefImg = useSlider([
    "/images/Steak.jpg",
    "/images/Beef-steak.jpg",
    "/images/Ribs.jpg"
  ]);

  const goatImg = useSlider([
    "/images/Meat-1.jpg",
    "/images/Goat-2.jpg",
    "/images/Goat-1.jpg"
  ]);

  const sheepImg = useSlider([
    "/images/Sheep.jpg",
    "/images/Meat-4.jpg",
    "/images/Meat-5.jpg"
  ]);

  return (
    <>
      <Helmet>
        <title>Fresh Meat Supply — HSS Prime Farms Ltd Kenya</title>

        <meta
          name="description"
          content="HSS Prime Farms Ltd Kenya supplies premium beef, goat and lamb processed under strict hygiene and cold-chain standards for retail, hospitality and bulk markets."
        />

        <link rel="canonical" href="https://hss-prime-farms-ltd.co.ke/meats" />
        <link rel="icon" type="image/png" href="/HSS_Logo.png" />

        <meta property="og:title" content="Fresh Meat Supply — HSS Prime Farms Ltd Kenya" />
        <meta
          property="og:description"
          content="Explore our beef, goat and sheep meat supply — hygienically processed and cold-chain handled for freshness and safety."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hss-prime-farms-ltd.co.ke/meats" />
      </Helmet>

      <div className="page-content">
        <div className="container" style={{ padding: "60px 0" }}>

          {/* PAGE HEADER */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: "760px", marginBottom: "45px" }}
          >
            <h1>
              Meat Supply
            </h1>
            <p>
              We supply professionally handled red meats processed under strict
              hygiene and cold-chain standards for retail, hospitality, and
              institutional markets.
            </p>
          </motion.div>

          {/* BEEF */}
          <section className="section alt">
            <div className="split soft-card">
              <div className="img-frame">
                <AnimatePresence initial={false} mode="wait">
                  <motion.img
                    key={beefImg.index}
                    src={beefImg.src}
                    loading="eager"
                    decoding="async"
                    custom={1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.55, ease: "easeInOut" }}
                    className="split-img"
                    draggable={false}
                  />
                </AnimatePresence>
              </div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <h2>Beef</h2>
                <p>
                  Our beef range covers premium and everyday butchery cuts,
                  processed for consistency and safety.
                </p>

                <ul>
                  <li>✔ Steak cuts (ribeye, sirloin, T-bone)</li>
                  <li>✔ Brisket & ribs</li>
                  <li>✔ Minced beef</li>
                  <li>✔ Beef chunks (stew meat)</li>
                  <li>✔ Beef bones (soup)</li>
                </ul>
              </motion.div>
            </div>
          </section>

          {/* GOAT */}
          <section className="section">
            <div className="split reverse">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <h2>Goat Meat (Chevon)</h2>
                <p>
                  High-quality chevon sourced from healthy livestock and prepared
                  for local and commercial markets.
                </p>

                <ul>
                  <li>✔ Goat chops</li>
                  <li>✔ Goat ribs</li>
                  <li>✔ Goat leg</li>
                  <li>✔ Goat shoulder</li>
                  <li>✔ Goat stew cuts</li>
                </ul>
              </motion.div>

              <div className="img-frame">
                <AnimatePresence initial={false} mode="wait">
                  <motion.img
                    key={goatImg.index}
                    src={goatImg.src}
                    loading="eager"
                    decoding="async"
                    custom={-1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.55, ease: "easeInOut" }}
                    className="split-img"
                    draggable={false}
                  />
                </AnimatePresence>
              </div>
            </div>
          </section>

          {/* SHEEP */}
          <section className="section alt">
            <div className="split soft-card">
              <div className="img-frame">
                <AnimatePresence initial={false} mode="wait">
                  <motion.img
                    key={sheepImg.index}
                    src={sheepImg.src}
                    loading="eager"
                    decoding="async"
                    custom={1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.55, ease: "easeInOut" }}
                    className="split-img"
                    draggable={false}
                  />
                </AnimatePresence>
              </div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <h2 style={{ color: "#0f6d33" }}>Sheep (Mutton)</h2>
                <p>
                  We supply both lamb and mutton cuts prepared to meet different
                  culinary and market requirements.
                </p>
                
                <ul>
                  <li>✔ Lamb (young sheep)</li>
                  <li>✔ Mutton (adult sheep)</li>
                  <li>✔ Chops</li>
                  <li>✔ Leg</li>
                  <li>✔ Shoulder & ribs</li>
                </ul>
              </motion.div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}