import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { fadeUp, fadeIn, staggerContainer } from "../styles/animations";

export default function About() {
  return (
     <>
      <Helmet>
        <title>About Us — HSS Prime Farms Ltd Kenya</title>

        <meta
          name="description"
          content="Learn more about HSS Prime Farms Ltd Kenya — a modern agribusiness specializing in poultry production, meat supply, and high-value horticultural farming."
        />

        <link rel="canonical" href="https://hss-prime-farms-ltd.co.ke/about" />

        <meta property="og:title" content="About Us — HSS Prime Farms Ltd Kenya" />
        <meta
          property="og:description"
          content="A modern Kenyan agribusiness focused on sustainable poultry, meat, and horticulture farming."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hss-prime-farms-ltd.co.ke/about" />
      </Helmet>

      <div className="page-content">

        {/* WHO WE ARE */}
        <section className="section">
          <div className="container">
            <motion.section 
              variants={fadeUp} 
              initial="hidden" 
              animate="visible"
            >
              <h1 className="section-title">
                Who We Are
              </h1>

              <p>
                HSS Farms is a modern Kenyan agribusiness enterprise specializing in large-scale
                commercial poultry farming and diversified crop production, including high-value
                horticultural produce. Established in 2025, the company is driven by a commitment
                to national food security, sustainable agriculture, and job creation through
                innovative, efficient, and technology-driven farming practices.
              </p>
            </motion.section>
          </div>
        </section>

        {/* VISION / MISSION / VALUES */}
        <section className="section alt">
          <div className="container">
            <motion.section
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <h2 className="section-title">Our Identity</h2>

              <div className="grid-3">
                <motion.div variants={fadeUp} className="card padded-card">
                  <h3>Vision</h3>
                  <p>
                    To become a leading provider of quality poultry and horticultural products
                    in Kenya and the East African region.
                  </p>
                </motion.div>

                <motion.div variants={fadeUp} className="card padded-card">
                  <h3>Mission</h3>
                  <p>
                    To produce safe, nutritious, and affordable agricultural products through
                    sustainable, efficient, and technology-driven farming methods.
                  </p>
                </motion.div>

                <motion.div variants={fadeUp} className="card padded-card">
                  <h3>Core Values</h3>
                  <ul style={{ lineHeight: "26px" }}>
                    <li>Integrity</li>
                    <li>Sustainability</li>
                    <li>Innovation</li>
                    <li>Quality</li>
                  </ul>
                </motion.div>
              </div>
            </motion.section>
          </div>
        </section>

        {/* GOALS */}
        <section className="section">
          <div className="container">
            <motion.section variants={fadeIn} initial="hidden" animate="visible">
              <h2 className="section-title">Our Goals</h2>

              <div className="grid-3">
                <motion.div variants={fadeUp} className="card padded-card">
                  <h3>Goal #1</h3>
                  <p>
                    Establish a scalable large-scale poultry and horticulture operation with modern
                    infrastructure ensuring high productivity and profitability.
                  </p>
                </motion.div>

                <motion.div variants={fadeUp} className="card padded-card">
                  <h3>Goal #2</h3>
                  <p>
                    Achieve market leadership and export readiness by meeting regional and international
                    quality standards.
                  </p>
                </motion.div>

                <motion.div variants={fadeUp} className="card padded-card">
                  <h3>Goal #3</h3>
                  <p>
                    Promote sustainable agriculture, strengthen food security, and support youth/women
                    empowerment.
                  </p>
                </motion.div>
              </div>
            </motion.section>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="section alt">
          <div className="container">
            <motion.section variants={fadeUp} initial="hidden" animate="visible">
              <h2 className="section-title">Our Products</h2>

              <div className="grid-3">
                <div className="card">
                  <img src="/images/Chicken-3.jpg" alt="Broilers" />
                  <h3>Poultry & Meat</h3>
                  <p>Live broilers, day-old chicks, and organic meat products.</p>
                </div>

                <div className="card">
                  <img src="/images/Crops-9.jpg" alt="Garlic" />
                  <h3>Horticulture</h3>
                  <p>Garlic, white onions, capsicum, and other high-value crops.</p>
                </div>
              </div>
            </motion.section>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="section">
          <div className="container">
            <motion.section variants={fadeIn} initial="hidden" animate="visible">
              <h2 className="section-title">Why Choose Us</h2>

              <div className="grid-3">
                <motion.div variants={fadeUp} className="card padded-card">
                  <h3>Cold Chain Handling</h3>
                  <p>We maintain strict cold-chain standards from farm to market.</p>
                </motion.div>

                <motion.div variants={fadeUp} className="card padded-card">
                  <h3>Sustainable Farming</h3>
                  <p>We rely on eco-friendly and long-term regenerative practices.</p>
                </motion.div>

                <motion.div variants={fadeUp} className="card padded-card">
                  <h3>Market-Ready Products</h3>
                  <p>Fast, traceable distribution that guarantees freshness.</p>
                </motion.div>
              </div>
            </motion.section>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="section alt">
          <div className="container">
            <motion.h2
              className="section-title"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
            >
              Certifications & Standards
            </motion.h2>

            <div className="grid-3">
              <div className="card">KEBS Food Safety Compliance</div>
              <div className="card">Cold Chain Best Practices</div>
              <div className="card">Sustainable Agriculture Principles</div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="section">
          <div className="container">
            <motion.section variants={fadeUp} initial="hidden" animate="visible">
              <h2 className="section-title">Our Team</h2>

              <div className="grid-3" >
                <div className="card team-card">
                  <h3>Nasir Hussein</h3>
                  <p>General Director</p>
                  <p>Provides strategic oversight, leadership, and partnership development.</p>
                </div>

                <div className="card team-card">
                  <h3>Director — HR & Administration</h3>
                  <p>Oversees staff management, policies, and internal coordination.</p>
                </div>

                <div className="card team-card">
                  <h3>Director — Finance</h3>
                  <p>Manages budgeting, financial planning, and resource allocation.</p>
                </div>

                <div className="card team-card">
                  <h3>Director — Marketing</h3>
                  <p>Leads branding, customer outreach, and market strategy.</p>
                </div>

                <div className="card team-card">
                  <h3>Leah Wander</h3>
                  <p>Management Team</p>
                  <p>Supports coordination, engagement, and operational execution.</p>
                </div>
              </div>
            </motion.section>
          </div>
        </section>

      </div>
    </>
  );
}
