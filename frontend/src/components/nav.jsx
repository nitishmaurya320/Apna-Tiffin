import { useState } from "react";
import "./nav.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Apna-Tiffin</div>

      <ul className={`nav-list ${open ? "active" : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
