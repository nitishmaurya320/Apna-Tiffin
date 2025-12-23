import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Login to your account
        </p>

        <form className="mt-8 flex flex-col gap-5">
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Forgot password */}
          <div className="text-right text-sm text-amber-600 cursor-pointer hover:underline">
            Forgot password?
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <span className="text-amber-600 font-medium cursor-pointer hover:underline">
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;
