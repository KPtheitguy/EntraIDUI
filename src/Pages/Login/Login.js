import React from "react";
import bg from "../../Assets/Images/bg-auth.jpg";
import bgAuth from "../../Assets/Images/bg-auth2.png";
import microsoft from "../../Assets/Icons/microsoft.png";

const Login = () => {
  return (
    <div
      className="h-screen w-screen flex justify-center items-center relative bg-cover bg-top after:absolute after:inset-0 after:bg-black/50 after:-z-10"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="xl:w-1/2 md:w-3/4 w-full m-8 whitespace-nowrap">
        <div className="flex bg-white overflow-hidden rounded-xl">
          <div className="w-1/2 lg:block hidden p-2">
            <img src={bgAuth} alt="" className="h-full w-full rounded-xl" />
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="px-6 py-8">
              <h5 className="text-2xl font-bold text-gray-700 mb-6">Login</h5>
              <div className="mb-4">
                <label
                  className="flex font-semibold text-base mb-2"
                  for="EmailAddress"
                >
                  Email Address
                </label>
                <input
                  id="EmailAddress"
                  className="font-normal rounded block w-full border-gray-200 text-sm focus:border-gray-300 focus:ring-0 bg-white p-2"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <label
                  className="flex font-semibold text-base mb-2"
                  for="Password"
                >
                  Password
                </label>
                <input
                  id="Password"
                  className="font-normal rounded block w-full border-gray-200 text-sm focus:border-gray-300 focus:ring-0 bg-white p-2"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded text-sky-500 cursor-pointer border-gray-300 focus:ring-0 focus:ring-offset-0"
                    id="checkbox-signin"
                  />
                  <label
                    className="ms-2 inline-block text-sm font-semibold cursor-pointer text-gray-600"
                    for="checkbox-signin"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="/"
                  className="text-sm text-sky-500 border-b border-dashed border-sky-500"
                >
                  Forget Password ?
                </a>
              </div>
              <div className="flex justify-center mb-6">
                <button className="inline-flex items-center justify-center rounded py-1.5 px-3 text-sm font-semibold transition-all w-full text-white bg-sky-500">
                  Log In
                </button>
              </div>
              <div className="flex items-center my-6">
                <div className="flex-auto mt-px border-t border-dashed border-gray-200"></div>
                <div className="mx-4 text-secondary">Or</div>
                <div className="flex-auto mt-px border-t border-dashed border-gray-200"></div>
              </div>
              <div className="flex justify-center mb-6">
                <button className="inline-flex items-center justify-center rounded py-1.5 px-3 text-sm font-semibold transition-all w-full border-2">
                  <img src={microsoft} alt="" className="w-[20px]" />
                  <span className="ms-2">Sign In with Microsoft</span>
                </button>
              </div>
              <p className="text-gray-500 text-center">
                Don't have an account ?
                <a href="/" className="text-sky-500 ms-1">
                  <b>Register</b>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
