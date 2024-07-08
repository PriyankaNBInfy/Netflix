import React, { useRef, useState } from "react";
import Header from "../components/Header";
import { LOGO_URL } from "../utils/constants";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const name = useRef("");
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = () => {
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          setErrorMessage(errorMessage);
        });
    }
  };

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-96 h-auto p-12 bg-black bg-opacity-80 text-center my-36 mx-auto right-0 left-0 text-white rounded"
      >
        <h1 className="text-xl font-extrabold text-start">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 rounded w-full bg-gray-700 bg-opacity-50"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 rounded w-full bg-gray-700 bg-opacity-50"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 rounded w-full bg-gray-700 bg-opacity-50"
        />
        <p className="text-red-600 font-bold m-2">{errorMessage}</p>
        <button
          className="bg-red-700 rounded p-4 w-full mt-2"
          onClick={handleSubmit}
        >
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
