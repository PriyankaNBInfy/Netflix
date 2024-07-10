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
  const currentUser = useSelector((store) => store.user.user);
  console.log(currentUser);
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
    <div className="w-screen h-20 bg-gradient-to-b from-black flex flex-col md:flex-row justify-between">
      <img
        className="w-36 z-20 pl-7 mx-auto md:mx-0"
        src={LOGO_URL}
        alt="logo"
      />
      {currentUser && (
        <div className="flex p-4 mr-2 z-20 justify-between">
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
            className="px-2 -mt-9 h-6 text-xs font-thin bg-purple-800 text-white rounded cursor-pointer md:py-2 md:px-4 md:-mt-0 md:text-lg md:h-auto md:font-normal"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img
            className="invisible md:visible w-10 h-10 justify-between rounded m-1 bg-gradient-to-b from-black"
            src={USER_ICON}
            alt="user"
          />
          <button
            className="text-white text-xs font-thin -mt-24 -ml-5 md:text-lg md:font-normal md:mt-0 md:ml-0"
            onClick={handleSignOut}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
