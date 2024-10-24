import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg"
          alt="bg-img"
        />
      </div>
      <form className=" text-white absolute p-12 bg-black w-3/12 h-auto my-36 mx-auto left-0 right-0">
        <h1 className="text-white text-3xl font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && <input
          type="text"
          placeholder="Full Name"
          className="bg-gray-700 p-4 my-4 w-full"
        />}
        <input
          type="text"
          placeholder="Email address"
          className="bg-gray-700 p-4 my-4 w-full"
        />

        <input
          type="password"
          placeholder="Password"
          className="bg-gray-700  p-4 my-4 w-full"
        />
        <button className="bg-red-700 text-white rounded-lg text-center p-4 my-2 w-full">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
