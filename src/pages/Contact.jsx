import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { fadeUp, fadeIn } from "../styles/animations";

export default function Contact() {

  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);

    // Honeypot (bots fill this)
    if (data.get("company")) return;

    // Simple validation
    if (!data.get("name") || !data.get("email") || !data.get("phone")) {
      setStatus({ type: "error", msg: "Please fill in all required fields." });
      return;
    }

    setStatus({ type: "success", msg: "Message sent! We’ll call you shortly." });

    e.target.reset();
  }

  return (
    <>
      <Helmet>
        <title>Contact HSS Prime Farms — Request a Call Back</title>

        <meta
          name="description"
          content="Request a call back from HSS Prime Farms. Contact us for poultry supply, meat products, agribusiness partnerships and distribution enquiries."
        />

        <meta property="og:title" content="Contact HSS Prime Farms" />
        <meta
          property="og:description"
          content="Get in touch with HSS Prime Farms. Leave your details and our team will call you back to discuss your enquiry."
        />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://www.your-domain.com/contact" />
      </Helmet>

      <div className="page-content">
        <div className="container" style={{ padding: "60px 0" }}>

          {/* HEADER */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: "640px", marginBottom: "30px" }}
          >
            <h1 style={{ fontSize: "34px" }}>Request a Call Back</h1>

            <p style={{ marginTop: "10px", fontSize: "18px", lineHeight: "28px" }}>
              Leave your details and our team will reach out shortly to discuss your
              enquiry or partnership opportunity.
            </p>

            <hr style={{ marginTop: "20px", opacity: 0.25 }} />
          </motion.div>

          <div style={{ display: "grid", gap: "25px", gridTemplateColumns: "1fr 320px" }}>

            {/* FORM */}
            <motion.form
              action="https://formspree.io/f/mqekranw"
              method="POST"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className="contact-form"
              aria-labelledby="contact-heading"
            >
              <input type="text" name="company" style={{ display: "none" }} />
              <input type="hidden" name="_subject" value="New Contact Request — HSS Prime Farms" />
              <input type="hidden" name="_template" value="table"/>
              <input type="hidden" name="_captcha" value="false"/>

              {status && (
                <div
                  style={{
                    background: status.type === "success"
                      ? "rgba(18, 119, 46, 0.15)"
                      : "rgba(200, 30, 30, 0.1)",
                    border: "1px solid rgba(0,0,0,0.1)",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    marginBottom: "14px",
                    color: status.type === "success" ? "#0f6d33" : "#7a1212"
                  }}
                >
                  {status.msg}
                </div>
              )}

              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input name="name" type="text" placeholder="Your name" required />
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input name="email" type="email" placeholder="you@example.com" required />
                </div>

                <div className="form-group">
                  <label>Phone Number *</label>
                  <input name="phone" type="tel" placeholder="+254..." required />
                </div>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button type="submit" className="btn-primary">
                Submit Request
              </button>
            </motion.form>

            {/* CONTACT DETAILS CARD */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              style={{
                background: "rgba(8, 118, 0, 0.25)",
                padding: "30px",
                borderRadius: "18px",
                boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                height: "fit-content"
              }}
            >
              <h3>Contact Details</h3>

              <p style={{ marginTop: "10px" }}>
                📞<strong>+254 716 518 916</strong><br />
                📞<strong>+254 715 611 591</strong>
              </p>

              <p>
                📧 <strong>info@hssfarms.co.ke</strong>
              </p>

              <p>
                📪  <strong>3030 - 00100 Nairobi</strong>
              </p>

              <p>
                💬 <a
                  href="https://wa.me/254715611591?text=Hello%20HSS%20Prime%20Farms,%20I%20would%20like%20to%20make%20an%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link">
                  WhatsApp Us
                </a>
              </p>

              <p>
                💬 <a
                  href="https://wa.me/2547716518916?text=Hello%20HSS%20Prime%20Farms,%20I%20would%20like%20to%20make%20an%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link">
                  WhatsApp Us 
                </a>
              </p>

              <p style={{ marginTop: "10px", fontSize: "14px", opacity: 0.9 }}>
                Our team responds within 1–12 hours.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </>
  );
}