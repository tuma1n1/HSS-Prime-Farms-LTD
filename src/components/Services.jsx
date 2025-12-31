import React from 'react'


export default function Services() {
  return (
    <section style={{padding:"50px 0"}}>
      <div className="container">
        <h2 style={{textAlign:"center", color:"#0f6d33"}}>
          Our Core Services
        </h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fill, minmax(250px,1fr))",
          gap:"25px",
          marginTop:"35px"
        }}>
          
          <div className="card">
            <img src="/public/images/poultry.jpg" />
            <h3 style={{marginTop:"10px"}}>Poultry Production</h3>
            <p style={{marginTop:"5px", fontSize:"14px"}}>
              Quality broilers, layers & day-old chicks.
            </p>
          </div>

          <div className="card">
            <img src="/public/images/Meat.jpg" />
            <h3 style={{marginTop:"10px"}}>Meat Processing</h3>
            <p style={{marginTop:"5px", fontSize:"14px"}}>
              Clean, cold-chain beef, goat & poultry meats.
            </p>
          </div>

          <div className="card">
            <img src="/public/images/Meat.jpg" />
            <h3 style={{marginTop:"10px"}}>Agribusiness</h3>
            <p style={{marginTop:"5px", fontSize:"14px"}}>
              High-value horticulture like garlic, onions, capsicum.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
