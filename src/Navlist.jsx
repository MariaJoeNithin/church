import React from "react";
import { Link } from "react-router-dom";
import LOGO from "./Assets/images/church logo.png";

const Navlist = () => {
  return (
    <>
      <Link to="/imNew" className="mx-5">
        Im New
      </Link>
      <Link to="/Events" className="mx-5">
        Events
      </Link>
      <Link to="/about" className="mx-5">
        About
      </Link>
      <Link to="/" className="logo md:flex hidden md:-order-none order-first">
        <img src={LOGO} alt="" className="h-[75px] w-auto min-w-[75px]" />
      </Link>
      <Link to="/" className="mx-5">
        Home
      </Link>
      <Link to="/Ministries" className="mx-5">
        Ministries
      </Link>
      <Link to="/Membership" className="mx-5">
        Membership
      </Link>
      <Link to="/give" className="mx-5">
        Contribute
      </Link>
    </>
  );
};

export default Navlist;
