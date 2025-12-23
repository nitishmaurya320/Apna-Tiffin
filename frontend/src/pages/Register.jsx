import API from "../services/api";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Register() {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", data);
      alert("Registered successfully!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-2">Create your account</h2>
        <p className="text-center text-gray-500 mb-6">Continue to Apna Tiffin</p>

        <form onSubmit={submit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Register
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
