import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { fadeUp, fadeIn } from "../styles/animations";

export default function Outlets() {
  return (
    <>
      <Helmet>
        <title>Our Outlets & Distribution Network — HSS Prime Farms Kenya</title>

        <meta
          name="description"
          content="See the HSS Prime Farms outlets and distribution hubs across Kenya including Nairobi, Migori, Kisumu, Nakuru and Eldoret — ensuring fresh poultry, meat and crop supply."
        />

        <meta property="og:title" content="HSS Prime Farms Distribution Network" />
        <meta
          property="og:description"
          content="Strategically placed farm outlets and distribution hubs across Kenya for fresh poultry, meat and horticultural produce."
        />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://www.your-domain.com/outlets" />
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
            <h1>Our Outlets & Distribution Network</h1>
            <p>
              HSS Prime Farms operates strategically located outlets and distribution
              points across Kenya to ensure reliable supply, freshness, and
              efficient market access.
            </p>
          </motion.div>

          {/* MAP / LOCATION VISUAL */}
          <section className="section">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              style={{ maxWidth: "1000px", margin: "auto" }}
            >
              <div className="img-frame">
                <img
                  src="/images/Map.png"
                  alt="HSS Prime Farms Distribution Map"
                  className="split-img"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </motion.div>
          </section>

          {/* NAIROBI */}
          <section className="section alt">
            <div className="split soft-card">
              <div className="img-frame">
                <motion.img
                  src="/images/HHS-1.jpeg"
                  alt="Nairobi Distribution Hub"
                  className="split-img"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  loading="eager"
                  decoding="async"
                />
              </div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <h2>Nairobi – Industrial Area</h2>
                <p>
                  Our main distribution hub serving wholesale buyers, retailers,
                  and institutional clients within Nairobi and surrounding regions.
                </p>
                <ul>
                  <li>✔ Central logistics & coordination hub</li>
                  <li>✔ Cold-chain storage facilities</li>
                  <li>✔ Bulk and institutional supply</li>
                </ul>
              </motion.div>
            </div>
          </section>

          {/* MIGORI */}
          <section className="section">
            <div className="split reverse soft-card">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <h2>Migori Town – Main Farm Outlet</h2>
                <p>
                  Migori hosts our primary farm operations and outlet, supporting
                  production, aggregation, and direct local market supply.
                </p>
                <ul>
                  <li>✔ Farm-level aggregation point</li>
                  <li>✔ Direct supply to local markets</li>
                  <li>✔ Employment and community engagement</li>
                </ul>
              </motion.div>

              <div className="img-frame">
                <motion.img
                  src="/images/HHS-4.jpeg"
                  alt="Migori Farm Outlet"
                  className="split-img"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </section>

          {/* KISUMU */}
          <section className="section alt">
            <div className="split soft-card">
              <div className="img-frame">
                <motion.img
                  src="/images/HHS-1.jpeg"
                  alt="Kisumu Retail Outlet"
                  className="split-img"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  loading="eager"
                  decoding="async"
                />
              </div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <h2>Kisumu – Retail Supply Outlet</h2>
                <p>
                  The Kisumu outlet supports retail distribution and hospitality
                  clients across the Lake Region.
                </p>
                <ul>
                  <li>✔ Retail & hospitality supply</li>
                  <li>✔ Fresh poultry and meat products</li>
                  <li>✔ Regional distribution support</li>
                </ul>
              </motion.div>
            </div>
          </section>

          {/* NAKURU */}
          <section className="section">
            <div className="split reverse soft-card">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <h2>Nakuru – Meat Distribution Point</h2>
                <p>
                  Nakuru serves as a key red-meat distribution point connecting
                  Rift Valley production to urban and institutional markets.
                </p>
                <ul>
                  <li>✔ Beef, goat & sheep supply</li>
                  <li>✔ Cold-chain managed transport</li>
                  <li>✔ Strategic Rift Valley coverage</li>
                </ul>
              </motion.div>

              <div className="img-frame">
                <motion.img
                  src="/images/HHS-5.jpeg"
                  alt="Nakuru Meat Distribution"
                  className="split-img"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </section>

          {/* ELDORET */}
          <section className="section alt">
            <div className="split soft-card">
              <div className="img-frame">
                <motion.img
                  src="/images/HHS-1.jpeg"
                  alt="Eldoret Poultry Outlet"
                  className="split-img"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  loading="eager"
                  decoding="async"
                />
              </div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <h2>Eldoret – Poultry Products Outlet</h2>
                <p>
                  Eldoret supports poultry distribution and farmer partnerships
                  within the North Rift region.
                </p>
                <ul>
                  <li>✔ Poultry-focused supply</li>
                  <li>✔ Regional farmer collaboration</li>
                  <li>✔ Fast market access</li>
                </ul>
              </motion.div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
