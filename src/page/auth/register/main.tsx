import React from "react";

const Register = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen m-auto">
      {/* Left Side (Form) */}
      <div className="w-5/6 lg:w-3/12 bg-white mx-auto  my-auto">
        <h1 className="text-2xl font-bold mb-4">Create an account</h1>
        <p className="text-sm text-gray-400 mb-6">
          Join us! Please enter your details
        </p>
        <form className="space-y-4">
          <div className="flex flex-row">
            <div className="flex flex-col w-1/2 pr-1">
              <label htmlFor="firstname" className="text-sm mb-1">
                Firstname
              </label>
              <input
                type="text"
                name="firstname"
                placeholder="Enter your first name"
                className="border rounded-md py-2 px-3"
              />
            </div>
            <div className="flex flex-col w-1/2 pl-1">
              <label htmlFor="lastname" className="text-sm mb-1">
                Lastname
              </label>
              <input
                type="text"
                name="lastname"
                placeholder="Enter your last name"
                className="border rounded-md py-2 px-3"
              />
            </div>
          </div>
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
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
        <div className="flex mt-3 justify-center">
          <p className="text-sm ">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-500">
              Sign in
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

export default Register;
