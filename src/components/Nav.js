import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="h-[100vh] flex justify-evenly items-center">
      <Link
        to="/Que1"
        className="py-5 px-14 bg-gray-950 hover:bg-slate-800 text-white rounded-full"
      >
        Que 1
      </Link>
      <Link
        to="/Que3"
        className="py-5 px-14 bg-gray-950 hover:bg-slate-800 text-white rounded-full"
      >
        Que 3
      </Link>
    </nav>
  );
};

export default Nav;
