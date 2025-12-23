import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Home";
import Navbar from "./components/nav";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
     <Navbar/>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <Footer/>
    </div>
  );
}
