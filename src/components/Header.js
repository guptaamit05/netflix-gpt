import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userD = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/errorPage");
      });
  };

  return (
    <div className="absolute bg-gradient-to-b from-red-700 h-16 w-screen z-10 flex justify-between items-center p-5">
      <img
        className="w-28 cursor-pointer mix-blend-multiply"
        src="https://banner2.cleanpng.com/20180702/qac/aax1p8e04.webp"
        alt="Netflix-logo"
      />
      {userD && (
        <div className="flex">
          <img
            src={userD ? userD?.photoURL : "user.jpg"}
            className="h-12 mix-blend-multiply rounded-full"
            alt="userProfileImg"
          />
          <button onClick={handleSignOut} className="ml-2 p-2">
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
