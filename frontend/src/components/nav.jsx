import { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar h-[100px] bg-amber-400 flex justify-around items-center">
      <div className="logo text-4xl w-[140px] h-[90px]">
        <img className="w-full h-full" src="/logo.png"/>
      </div>

      <ul className=" gap-10 cursor-pointer hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-2">
       <Link to="/login">
        <button className="bg-black cursor-pointer px-2 py-1 flex items-center text-center text-white rounded-2xl">Login</button>
      </Link> 
      <Link to="/register">
        <button className="cursor-pointer">SignUp</button>
      </Link>
      </div>
     
      <div className="flex md:hidden hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
