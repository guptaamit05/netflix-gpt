import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateInput } from "../utils/validateInput";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const validateData = () => {
    const msg = validateInput(
      isSignIn,
      email.current.value,
      password.current.value,
      !isSignIn ? name.current.value : null
    );
    setErrorMsg(msg);
    if (msg) return;
    //Create a new User... Sign Up/Sign In

    if (!isSignIn) {
      //Sign Up Logic...
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const currentUser = userCredential.user;
          let randomU = Math.floor(Math.random()*100)
          updateProfile(currentUser, {
            displayName: name.current.value,
            photoURL: "https://randomuser.me/api/portraits/men/"+randomU+".jpg",
          })
            .then(() => {
              // Profile updated!
              const {uid, email, displayName, photoURL} = auth.currentUser
              // update profilePic and name data in appStore..
              dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
              navigate("/browse");
              // ... 
            })
            .catch((error) => {
              // An error occurred
              // const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMsg( errorMessage);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      //Sign In logic...
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const {uid, email, displayName, photoURL} = user
          // update profilePic and name data in appStore..
          dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="bg-gradient-to-r from-indigo-500">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" text-white absolute p-12 bg-black w-80 md:w-1/2 my-36 mx-auto left-0 right-0"
        >
          <h1 className="text-white text-3xl font-bold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignIn && (
            <input
              type="text"
              ref={name}
              placeholder="Full Name"
              className="bg-gray-700 p-4 my-4 w-full"
            />
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email address"
            className="bg-gray-700 p-4 my-4 w-full"
          />

          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="bg-gray-700  p-4 my-4 w-full"
          />
          <p className="p-2 font-bold text-red-400">{errorMsg}</p>
          <button
            onClick={validateData}
            className="bg-red-700 text-white rounded-lg text-center p-4 my-2 w-full"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignIn
              ? "New to Netflix? Sign Up Now"
              : "Already registered Sign In now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
