import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#" className="logo">
          Tech<span>Wave</span>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#episodes">Episodes</a>
          <a href="#host">Host</a>
        </nav>

        <button className="navbar-subscribe">
          Subscribe <span>→</span>
        </button>

        <button className="menu-btn" onClick={handleMenuClick} aria-label="Toggle navigation">
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>

      </div>
      {menuOpen && (
        <nav className="mobile-nav">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#episodes" onClick={() => setMenuOpen(false)}>Episodes</a>
          <a href="#host" onClick={() => setMenuOpen(false)}>Host</a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;