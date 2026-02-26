import React from 'react'
import "./Home.css";
const Home = () => {
  return (
    <section className="cool-home">

  <div className="hero">
    <div className="left">
      <h1>
        Gear Up Your <span>Dev Setup</span>
      </h1>
      <p>
        Premium keyboards, mice, headphones and smart tech 
        accessories built for serious developers.
      </p>

      <div className="buttons">
        <button className="primary">Shop Now</button>
        <button className="secondary">View Setup</button>
      </div>
    </div>

    <div className="right">
      <div className="glow-card">
        <img src="https://i.pinimg.com/1200x/6a/5f/60/6a5f60bec69587a8cb70d8fe84a6f13a.jpg" alt="" />
      </div>
    </div>
  </div>

  <div className="categories">
    <div className="card">⌨️ Keyboards</div>
    <div className="card">🖱️ Mouse</div>
    <div className="card">🎧 Headphones</div>
    <div className="card">🎒 Backpacks</div>
  </div>

</section>
 )
}

export default Home