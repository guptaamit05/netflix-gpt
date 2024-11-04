import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, addUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLang } from "../utils/configSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userD = useSelector((store) => store.user);
  const toggleGPTBtnText = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        if (toggleGPTBtnText) {
          handleGptSearch();
        }
        navigate("/");
      }
    });
    //Unsubscribe when component unmount...
    return () => unsubscribe();
  }, []);

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

  const handleGptSearch = () => {
    // Toggle GPTSearh Page...
    dispatch(toggleGPTSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  return (
    <div className="absolute bg-gradient-to-b from-red-700 h-16 w-screen z-10 flex justify-between items-center p-5">
      <img
        className="w-28 cursor-pointer mix-blend-multiply"
        src="logo.webp"
        alt="Netflix-logo"
      />
      {userD && (
        <div className="flex">
          {toggleGPTBtnText && (
            <select
              onChange={handleLangChange}
              className="py-2 px-2 mx-4 my-2 bg-gray-900 text-white"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearch}
            className="py-2 px-4 mx-4 my-2 bg-blue-400"
          >
            {toggleGPTBtnText ? "Home" : "GPT Search"}
          </button>
          <img
            title={userD ? userD?.displayName : ""}
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
