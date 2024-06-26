import React from "react";
import { BACKGROUND_IMAGE } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute ">
      <img className="bg-black" src={BACKGROUND_IMAGE} alt="background-image" />
    </div>
  );
};

export default Header;
