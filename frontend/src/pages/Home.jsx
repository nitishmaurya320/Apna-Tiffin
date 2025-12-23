import React from "react";

const tiffinServices = [
  {
    id: 1,
    name: "Sharma Tiffin Service",
    area: "Sector 12",
    price: "₹80 / meal",
    rating: "4.5 ⭐",
  },
  {
    id: 2,
    name: "Maa Rasoi",
    area: "Raj Nagar",
    price: "₹90 / meal",
    rating: "4.7 ⭐",
  },
  {
    id: 3,
    name: "Healthy Bites",
    area: "Indirapuram",
    price: "₹100 / meal",
    rating: "4.3 ⭐",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="bg-green-500 text-white p-6 rounded-xl mb-6">
        <h1 className="text-3xl font-bold">Apna Tiffin</h1>
        <p className="mt-2">Find the best tiffin near you 🍱</p>
      </div>

      {/* Tiffin Services */}
      <h2 className="text-xl font-bold mb-4">Available Tiffin Services</h2>

      <div className="space-y-4">
        {tiffinServices.map((tiffin) => (
          <div
            key={tiffin.id}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">{tiffin.name}</h3>
                <p className="text-gray-500">{tiffin.area}</p>
                <p className="text-sm text-gray-600">{tiffin.price}</p>
                <p className="text-sm text-yellow-500">{tiffin.rating}</p>
              </div>

              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                View Menu
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;
