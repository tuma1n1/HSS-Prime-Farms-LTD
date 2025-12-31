import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { fadeUp, fadeIn } from "../styles/animations";

export default function Agribusiness() {
  return (
    <>
      <Helmet>
        <title>Agribusiness & Horticulture — HSS Prime Farms Kenya</title>

        <meta
          name="description"
          content="Explore HSS Prime Farms' sustainable agribusiness division, producing garlic, onions, capsicum and other high-value crops for Kenyan and regional markets."
        />

        <meta property="og:title" content="Agribusiness — HSS Prime Farms" />
        <meta
          property="og:description"
          content="Learn about our sustainable horticulture operations including garlic, onions and capsicum grown for local and export markets."
        />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://www.your-domain.com/agribusiness" />
      </Helmet>

      <div className="page-content">
        <div className="container" style={{ padding: "60px 0" }}>

          {/* PAGE HEADER */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: "720px", marginBottom: "50px" }}
          >
            <h1>
              Agriculture
            </h1>
            <p>
              Our agribusiness division focuses on sustainable production of
              high-value horticultural crops designed to meet local, regional,
              and future export market demand.
            </p>
          </motion.div>

          {/* GARLIC */}
          <section className="section alt">
            <div className="split soft-card">
              <div className="img-frame">
                <img
                  src="/images/Garlic.jpg"
                  alt="Garlic Farming"
                  loading="eager"
                  decoding="async"
                  className="split-img"
                />
              </div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <h2>Garlic Production</h2>
                <p>
                  Garlic is one of our priority crops due to its strong market
                  demand, long shelf life, and wide culinary and medicinal use.
                </p>
                <ul>
                  <li>✔ High local & regional demand</li>
                  <li>✔ Long shelf life</li>
                  <li>✔ Controlled agronomic practices</li>
                </ul>
              </motion.div>
            </div>
          </section>

          {/* ONIONS */}
          <section className="section">
            <div className="split reverse soft-card">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <h2>Onion Farming</h2>
                <p>
                  We produce high-quality onion varieties suitable for fresh
                  consumption and bulk supply, with emphasis on yield consistency
                  and post-harvest handling.
                </p>
                <ul>
                  <li>✔ Red & white onion varieties</li>
                  <li>✔ Water-efficient farming</li>
                  <li>✔ Market-ready grading</li>
                </ul>
              </motion.div>

              <div className="img-frame">
                <img
                  src="/images/Onions.jpg"
                  alt="Onion Production"
                  loading="eager"
                  decoding="async"
                  className="split-img"
                />
              </div>
            </div>
          </section>

          {/* CAPSICUM */}
          <section className="section alt">
            <div className="split soft-card">
              <div className="img-frame">
                <img
                  src="/images/Capsicum.jpg"
                  alt="Capsicum Farming"
                  loading="eager"
                  decoding="async"
                  className="split-img"
                />
              </div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <h2>Capsicum (Hoho)</h2>
                <p>
                  Our capsicum production targets premium green and red varieties
                  grown for urban retail, hospitality, and institutional buyers.
                </p>
                <ul>
                  <li>✔ Green & red varieties</li>
                  <li>✔ Uniform size & quality</li>
                  <li>✔ Fast farm-to-market cycle</li>
                </ul>
              </motion.div>
            </div>
          </section>

          {/* FUTURE EXPANSION */}
          <section className="section">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className="soft-card"
              style={{ maxWidth: "820px", margin: "auto", textAlign: "center" }}
            >
              <h2>Future Crop Expansion</h2>
              <p>
                We continue to evaluate additional high-value crops and value
                addition opportunities to strengthen agribusiness resilience and
                long-term growth.
              </p>
            </motion.div>
          </section>

        </div>
      </div>
    </>
  );
}
