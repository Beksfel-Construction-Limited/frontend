import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row min-h-screen m-auto">
      {/* Left Side (Form) */}
      <div className="w-5/6 lg:w-3/12 bg-white mx-auto my-auto">
        <h1 className="text-2xl font-bold mb-4">Welcome Back</h1>
        <p className="text-sm text-gray-400 mb-6">
          Welcome back! Please enter your details
        </p>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="border rounded-md py-2 px-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="border rounded-md py-2 px-3"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="mr-2"
              />
              <span className="text-sm">Remember me for 30 days</span>
            </div>
            <a href="#" className="text-sm text-blue-500">
              Forgot password
            </a>
          </div>
          <button
            type="submit"
            onClick={() => navigate("/home")}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <button className="border rounded-md border-gray-400 w-full mt-5 py-2 flex justify-center gap-5">
          <span>
            <img alt="g" />
          </span>
          Sign in with Google
        </button>
        <div className="flex mt-3 justify-center">
          <p className="text-sm ">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500">
              Sign up
            </a>
          </p>
        </div>
      </div>

      {/* Right Side (Image or Additional Content) */}
      <div className="hidden lg:w-1/2 lg:block bg-black text-white p-8 items-center justify-center">
        <div className="flex flex-col my-auto">
          <h1 className="text-3xl font-bold mb-4">Construction Company</h1>
          <p className="text-lg">Some additional content or image here</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
