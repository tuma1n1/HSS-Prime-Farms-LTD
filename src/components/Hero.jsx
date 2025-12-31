export default function Hero() {
  return (
    <div 
      className="hero"
      style={{ backgroundImage: "url('/greenscape/img/banner-bg.png')" }}
    >
      <div className="overlay">
        <h1 style={{fontSize:"42px", fontWeight:"bold"}}>From Farm to Future</h1>
        <p style={{marginTop:"10px", fontSize:"18px"}}>
          Quality Poultry • Meats • Horticulture
        </p>
      </div>
    </div>
  );
}