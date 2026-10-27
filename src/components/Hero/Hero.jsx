import "./Hero.css";
import heroImage from "../../assets/images/hero.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Grow Your Business with Modern Digital Solutions
        </h1>
        <p>
          We help businesses build fast, responsive and user-friendly
          websites that improve online presence and drive growth.
        </p>
        <div className="hero-buttons">

          <button className="primary-btn">
            Get Started
          </button>

          <button className="secondary-btn">
            Learn More
          </button>

        </div>

      </div>

      <div className="hero-image">

        <img
          src={heroImage}
          alt="Business Illustration"
        />

      </div>

    </section>
  );
}

export default Hero;