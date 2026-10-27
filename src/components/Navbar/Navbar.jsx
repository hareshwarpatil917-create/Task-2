import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        TechNova
      </div>

      <nav>

        <ul className="nav-links">

          <li><a href="#home">Home</a></li>

          <li><a href="#services">Services</a></li>

          <li><a href="#about">About</a></li>

          <li><a href="#contact">Contact</a></li>

        </ul>

      </nav>

      <button className="nav-btn">
        Get Started
      </button>

    </header>
  );
}

export default Navbar;