import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Navbar = React.forwardRef((props,ref) => {
  const history = useNavigate();
  React.useImperativeHandle(ref,()=>({
    handleClick(value){
      history(value,{replace:true})
  },
  }))

  return (
    <>
      <nav className="p-2 absolute flex justify-center w-full">
        <ul className="font-bold text-lg space-x-2 font-sans flex justify-center bg-teal-500 rounded-full px-10 border-2 border-gray-900">
          <li className="cursor-pointer text-gray-700 hover:text-gray-900 px-3 py-1 transform transition duration-200 hover:scale-105">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer text-gray-700 hover:text-gray-900 px-3 py-1 transform transition duration-200 hover:scale-105">
            <Link to="/Tutorial">Tutorial</Link>
          </li>
          <li className="cursor-pointer text-gray-700 hover:text-gray-900 px-3 py-1 transform transition duration-200 hover:scale-105">
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
)
export default Navbar;