import React, { useEffect } from "react";
import { LANGUAGE, LOGO_URL, USER_ICON } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toggleGptSearch } from "../features/gpt/gptSlice";
import { selectLanguage } from "../features/config/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt.isGptSearch);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }

      return () => unsubscribe();
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguageChange = (value) => {
    dispatch(selectLanguage(value));
  };

  return (
    <div className="absolute w-screen h-20 bg-gradient-to-b from-black flex justify-between">
      <img className="w-36 " src={LOGO_URL} alt="logo" />
      <div className="flex p-4 mr-2 z-20">
        {showGptSearch && (
          <select
            className="px-1 mx-2 bg-gray-900 rounded text-white"
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            {LANGUAGE.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}

        <button
          className="py-2 px-4 mx-2 bg-purple-800 text-white rounded cursor-pointer"
          onClick={handleGptSearchClick}
        >
          {showGptSearch ? "Home" : "GPT Search"}
        </button>
        <img
          className="w-10 h-10 justify-between rounded m-1 bg-gradient-to-b from-black"
          src={USER_ICON}
          alt="user"
        />
        <button className="text-white" onClick={handleSignOut}>
          (Sign Out)
        </button>
      </div>
    </div>
  );
};

export default Header;
