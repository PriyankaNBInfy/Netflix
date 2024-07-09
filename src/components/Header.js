import React, { useEffect } from "react";
import { LOGO_URL, USER_ICON } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  return (
    <div className="absolute w-screen h-20 bg-gradient-to-b from-black flex justify-between">
      <img className="w-36 " src={LOGO_URL} alt="logo" />
      <div className="flex p-4 bg-black mr-2">
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
