import React from "react";
import { Link } from "react-router-dom";
import LOGO from "./Assets/images/church logo.png";

const Navlist = () => {
  return (
    <>
      <Link to="/imNew" className=" mx-auto hover:border-b-2 transition-all ">
        Im New
      </Link>
      <Link to="/Events" className="mx-auto  hover:border-b-2 transition-all ">
        Events
      </Link>
      <Link to="/about" className="mx-auto  hover:border-b-2 transition-all ">
        About
      </Link>
      <Link
        to="/"
        className="logo md:flex hidden md:-order-none order-first mx-auto"
      >
        <img
          src={LOGO}
          alt="Bethel_ICRM"
          className="h-[75px] w-auto min-w-[75px]"
        />
      </Link>
      {/* <Link to="/" className="mx-5">
        Home
      </Link> */}
      <Link
        to="/Ministries"
        className="mx-auto  hover:border-b-2 transition-all "
      >
        Ministries
      </Link>
      <Link
        to="/Membership"
        className="mx-auto  hover:border-b-2 transition-all "
      >
        Membership
      </Link>
      <Link to="/give" className="mx-auto  hover:border-b-2 transition-all ">
        Contribute
      </Link>
    </>
  );
};

export default Navlist;
