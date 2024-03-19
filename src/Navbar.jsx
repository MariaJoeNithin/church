import React, { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "./Assets/images/church logo.png";
import { TiThMenuOutline } from "react-icons/ti";
import Navlist from "./Navlist";

const Navbar = () => {
  // const [showMenu, setShowMenu] = useState(false);

  // const toggleMenu = () => {
  //   setShowMenu(!showMenu);
  // };

  return (
    <div className="flex justify-between items-center text-white font-bold text-center lg:text-2xl md:text-lg text-lg w-full h-auto bg-black/50 backdrop-blur-xl opacity-0.1 sticky top-0 z-[999]">
      <div className="md:hidden flex justify-between w-full m-2 items-center">
        <Link to="/" className="logo md:-order-none order-first">
          <img
            src={LOGO}
            alt="Bethel_ICRM"
            className="h-[75px] w-auto min-w-[75px] object-cover object-center"
          />
        </Link>
        <div className="relative group">
          <button
            // onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 text-3xl rounded-md text-white focus:outline-none "
          >
            <TiThMenuOutline />
          </button>
          {/* ${showMenu ? "flex" : "hidden"} */}
          <div
            className={` group-hover:flex transition-all duration-300 hidden w-auto rounded-md p-3 gap-3 flex-col top-3 right-10 text-white h-auto absolute bg-black/50 backdrop-blur-lg`}
          >
            <Navlist />
          </div>
        </div>
      </div>
      <div
        className={`md:grid grid-cols-7 hidden w-full justify-between items-center`}
      >
        <Navlist />
      </div>
    </div>
  );
};

export default Navbar;
