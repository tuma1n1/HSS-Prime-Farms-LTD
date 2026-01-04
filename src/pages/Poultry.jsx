import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { fadeUp, fadeIn } from "../styles/animations";

export default function Poultry() {
   return (
    <>
      <Helmet>
        <title>Our Outlets & Distribution Network — HSS Prime Farms Ltd Kenya</title>

        <meta
          name="description"
          content="See the HSS Prime Farms Ltd outlets and distribution hubs across Kenya including Nairobi and Migori — ensuring fresh poultry, meat and crop supply across the country."
        />

        <link rel="canonical" href="https://hss-prime-farms-ltd.co.ke/outlets" />

        <meta property="og:title" content="HSS Prime Farms Ltd — Distribution Network in Kenya" />
        <meta
          property="og:description"
          content="Strategically placed farm outlets and distribution hubs across Kenya for fresh poultry, meat and horticultural produce."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hss-prime-farms-ltd.co.ke/outlets" />
      </Helmet>


      <div className="page-content">
        <div className="container" style={{ padding: "50px 0" }}>

          {/* PAGE HEADER */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: "700px", marginBottom: "50px" }}
          >
            <h1 style={{ color: "#0f6d33", fontSize: "34px" }}>
              Poultry Production
            </h1>
            <p style={{ marginTop: "12px", fontSize: "18px", lineHeight: "28px" }}>
              Our poultry division focuses on large-scale, biosecure production of
              high-quality broilers, layers, and day-old chicks to meet growing
              market demand across Kenya and the region.
            </p>
          </motion.div>

          {/* BROILERS */}
          <section className="section alt">
            <div className="split">
              <div className="img-frame">
                <img
                  src="/images/Broiler-Poultry-Farming.jpg"
                  alt="Broiler Chicken"
                  loading="eager"
                  decoding="async"
                  className="split-img"
                />
              </div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <h2 style={{ color: "#0f6d33" }}>Broiler Chicken</h2>
                <p style={{ marginTop: "12px", lineHeight: "26px" }}>
                  We raise fast-growing commercial broilers under controlled
                  housing systems that prioritize animal welfare, feed efficiency,
                  and disease prevention.
                </p>

                <ul style={{ marginTop: "14px", lineHeight: "26px" }}>
                  <li>✔ Biosecure housing</li>
                  <li>✔ Optimized feeding programs</li>
                  <li>✔ Strict health monitoring</li>
                  <li>✔ Market-ready weights</li>
                </ul>
              </motion.div>
            </div>
          </section>

          {/* DAY-OLD CHICKS */}
          <section className="section">
            <div className="split reverse">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <h2 style={{ color: "#0f6d33" }}>Day-Old Chicks</h2>
                <p style={{ marginTop: "12px", lineHeight: "26px" }}>
                  We supply healthy, well-vaccinated day-old chicks sourced from
                  trusted hatcheries, suitable for both commercial and small-scale
                  farmers.
                </p>

                <ul style={{ marginTop: "14px", lineHeight: "26px" }}>
                  <li>✔ High hatchability rates</li>
                  <li>✔ Proper vaccination programs</li>
                  <li>✔ Reliable farmer support</li>
                </ul>
              </motion.div>

              <div className="img-frame">
                <img
                  src="/images/Chicks-2.jpg"
                  alt="Day old chicks"
                  loading="eager"
                  decoding="async"
                  className="split-img"
                />
              </div>
            </div>
          </section>

          {/* EGGS */}
          <section className="section alt">
            <div className="split">
              <div className="img-frame">
                <img
                  src="/images/Eggs.jpg"
                  alt="White and Yellow Eggs"
                  loading="eager"
                  decoding="async"
                  className="split-img"
                />
              </div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <h2 style={{ color: "#0f6d33" }}>Egg Production</h2>
                <p style={{ marginTop: "12px", lineHeight: "26px" }}>
                  Our layer operations produce high-quality white and yellow eggs,
                  handled under hygienic conditions to ensure freshness, safety,
                  and consistent supply for households and commercial buyers.
                </p>

                <ul style={{ marginTop: "14px", lineHeight: "26px" }}>
                  <li>✔ White & yellow egg varieties</li>
                  <li>✔ Clean and hygienic handling</li>
                  <li>✔ Consistent daily supply</li>
                  <li>✔ Suitable for retail & bulk buyers</li>
                </ul>
              </motion.div>
            </div>
          </section>

          {/* FUTURE READY */}
          <section className="section">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              style={{ maxWidth: "800px", margin: "auto", textAlign: "center" }}
            >
              <h2 style={{ color: "#0f6d33" }}>Value Addition & Processing</h2>
              <p style={{ marginTop: "12px", lineHeight: "26px" }}>
                While currently focused on primary production, HSS Prime Farms is
                strategically positioned to expand into poultry processing and
                value-added products to increase market value and supply chain
                control.
              </p>
            </motion.div>
          </section>

        </div>
      </div>
    </>
  );
}
