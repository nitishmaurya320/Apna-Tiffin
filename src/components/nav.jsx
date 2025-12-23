import { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar h-[100px]">
      <div className="logo text-4xl font-extrabold p-10">Apna-Tiffin</div>

      <ul className={`nav-list ${open ? "active" : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
     <Link to="/login">
      <button>Login</button>
     </Link>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
