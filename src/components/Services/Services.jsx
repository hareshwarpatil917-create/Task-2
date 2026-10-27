import "./Services.css";
import { FaLaptopCode, FaPaintBrush, FaChartLine, FaMobileAlt } from "react-icons/fa";

function Services() {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <p className="services-subtitle">
        We provide modern digital solutions to help businesses grow online.
      </p>
      <div className="services-container">
        <div className="service-card">
          <FaLaptopCode className="service-icon" />
          <h3>Web Development</h3>
          <p>
            Responsive and modern websites built using the latest web technologies.
          </p>
        </div>

        <div className="service-card">
          <FaPaintBrush className="service-icon" />
          <h3>UI/UX Design</h3>
          <p>
            Clean and user-friendly interface designs that improve user experience.
          </p>
        </div>

        <div className="service-card">
          <FaChartLine className="service-icon" />
          <h3>Digital Marketing</h3>
          <p>
            Increase your online visibility with smart digital marketing strategies.
          </p>
        </div>

        <div className="service-card">
          <FaMobileAlt className="service-icon" />
          <h3>Mobile Friendly</h3>
          <p>
            Websites optimized to work perfectly across all screen sizes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;