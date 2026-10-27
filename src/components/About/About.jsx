import "./About.css";
import aboutImage from "../../assets/images/about.png";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img src={aboutImage} alt="About TechNova" />
      </div>

      <div className="about-content">

        <h2>About TechNova</h2>

        <p>
          TechNova Solutions is a digital agency dedicated to helping
          businesses establish a strong online presence. We specialize
          in creating responsive websites, modern designs, and digital
          solutions that help our clients grow.
        </p>

        <div className="about-features">

          <div className="feature">
            <h3>Our Mission</h3>
            <p>
              To deliver high-quality digital solutions that help
              businesses succeed.
            </p>
          </div>

          <div className="feature">
            <h3>Why Choose Us?</h3>
            <p>
              Professional team, creative ideas, timely delivery and
              customer satisfaction.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;