import React from "react";
import { LOGO_URL, USER_ICON } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute w-full h-20 bg-gradient-to-b from-black flex justify-between">
      <img className="w-36 " src={LOGO_URL} alt="logo" />
      <div className="flex p-4 ">
        <img
          className="w-10 h-10 justify-between rounded m-1 bg-gradient-to-b from-black"
          src={USER_ICON}
          alt="user"
        />
        <button onClick={handleSignOut}>(Sign Out)</button>
      </div>
    </div>
  );
};

export default Header;
