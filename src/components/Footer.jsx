import { color } from "framer-motion";

export default function Footer() {
  return (
    <footer>
      <div className="container">

        <h3 style={{color: "#caffdeff", fontSize:"20px", marginBottom:"10px"}}>HSS Prime Farms LTD</h3>
        
        <p style={{color: "#caffdeff"}}>📍 Head Office: Chai House, 6th Floor, Koinange Street, Nairobi County, Kenya.</p>
        <p style={{color: "#caffdeff"}}>📞 +254 715 611 591</p>
        <p style={{color: "#caffdeff"}}>📞 +254 716 518 916</p>
        <p style={{color: "#caffdeff"}}>
          📧 Email: 
          <a 
            href="mailto:info@hssprimefarms.co.ke" 
            style={{color:"white", marginLeft:"5px", textDecoration:"underline"}}
          >
            info@hssprimefarms.co.ke
          </a>
        </p>

        <p style={{opacity:0.9, marginTop:"15px", fontSize:"14px", color: "#caffdeff"}}>
          © 2026 HSS Prime Farms LTD — From Farm to Future
        </p>
      </div>
    </footer>
  );
}