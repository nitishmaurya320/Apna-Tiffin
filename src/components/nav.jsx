import { useState } from "react";
import "./nav.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar h-[100px]">
      <div className="logo text-4xl font-extrabold">Apna-Tiffin</div>

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
