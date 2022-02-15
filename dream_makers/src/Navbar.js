import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="p-4 text-stone-600 font-bold absolute grid grid-cols-1 md:grid-cols-3 w-full bg-gradient-to-r from-teal-600 to-teal-200">
        <ul className="text-lg space-x-8 col-span-2 flex justify-center">
          <li className="cursor-pointer hover:text-teal-500">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-teal-500">
            <Link to="/1">Practice</Link>
          </li>
          <li className="cursor-pointer hover:text-teal-500">
            <Link to="/2">Tutorial</Link>
          </li>
          <li className="cursor-pointer hover:text-teal-500">
            <Link to="/3">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
