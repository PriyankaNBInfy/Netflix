import React, { useState } from "react";
import Header from "../components/Header";
import { LOGO_URL } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          className="w-36 h-20 bg-gradient-to-r from-black"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <form className="absolute w-96 h-auto p-12 bg-black bg-opacity-80 text-center my-36 mx-auto right-0 left-0 text-white rounded">
        <h1 className="text-xl font-extrabold text-start">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 rounded w-full bg-gray-700 bg-opacity-50"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 rounded w-full bg-gray-700 bg-opacity-50"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 rounded w-full bg-gray-700 bg-opacity-50"
        />

        <button className="bg-red-700 rounded p-4 w-full mt-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 mt-2 text-start">
          {isSignIn ? (
            <>
              New to Netflix?
              <span className="cursor-pointer m-1" onClick={toggleSignIn}>
                Sign Up Now
              </span>
            </>
          ) : (
            <>
              Already a user?
              <span className="cursor-pointer m-1" onClick={toggleSignIn}>
                Sign In Now
              </span>
            </>
          )}
        </p>
      </form>
    </>
  );
};

export default Login;
