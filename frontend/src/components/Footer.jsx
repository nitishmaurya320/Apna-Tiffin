import React from "react";

const Footer = () => {
  return (
    <footer className="bg-amber-400 text-gray-900 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold">Apna Tiffin</h1>
          <p className="mt-3 text-sm">
            Fresh home-style meals delivered daily at your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Menu</li>
            <li className="hover:underline cursor-pointer">Order Now</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Our Services</h2>
          <ul className="space-y-2 text-sm">
            <li>Daily Tiffin</li>
            <li>Weekly Plans</li>
            <li>Corporate Orders</li>
            <li>Healthy Meals</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
          <p className="text-sm">📍 India</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">📧 support@apnatiffin.com</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-amber-600 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Apna Tiffin. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
