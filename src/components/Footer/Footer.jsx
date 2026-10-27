import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h2>TechNova</h2>

      <p>
        Building modern digital solutions for growing businesses.
      </p>

      <div className="social-links">

        <a
          href="https://github.com/hareshwarpatil917-create"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/hareshwar-patil-73a09535b"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="mailto:hareshwarpatil917@gmail.com">
          <FaEnvelope />
        </a>

      </div>

      <p className="copyright">
        © 2026 TechNova Solutions. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;