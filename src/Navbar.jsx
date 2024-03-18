import React, { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "./Assets/images/church logo.png";
import { FaGripLines } from "react-icons/fa6";
import Navlist from "./Navlist";

const Navbar = () => {
  // const [showMenu, setShowMenu] = useState(false);

  // const toggleMenu = () => {
  //   setShowMenu(!showMenu);
  // };

  return (
    <div className="flex justify-between items-center text-white font-bold text-center lg:text-2xl md:text-xl text-lg w-full h-auto bg-transparent bg-black backdrop-blur-xl opacity-0.1 absolute top-0 z-[999]">
      <div className="md:hidden flex justify-between w-full m-2">
        <Link to="/" className="logo md:-order-none order-first">
          <img
            src={LOGO}
            alt=""
            className="h-[75px] w-auto min-w-[75px] object-cover object-center"
          />
        </Link>
        <div className="relative group">
          <button
            // onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none "
          >
            <FaGripLines />
          </button>
          {/* ${showMenu ? "flex" : "hidden"} */}
          <div
            className={` group-hover:flex hidden w-auto rounded-md p-3 gap-3 flex-col top-3 right-8 text-white h-auto absolute bg-black/50 backdrop-blur-lg`}
          >
            <Navlist />
          </div>
        </div>
      </div>
      <div
        className={`md:flex hidden w-full flex-wrap justify-between items-center`}
      >
        <Navlist />
      </div>
    </div>
  );
};

export default Navbar;
