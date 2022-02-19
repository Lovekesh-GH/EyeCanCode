import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Navbar = React.forwardRef((props,ref) => {
  // useEffect(()=>{
  //   childFunc.current = handleClick;
  // },[])
  const history = useNavigate();
  React.useImperativeHandle(ref,()=>({
    handleClick(value){
      history(value,{replace:true})
  },
  }))

  
  // function handleClick(){
  //     history("/3",{replace:true})
  // }
  return (
    <>
      <nav className={"p-4 text-stone-600 font-bold absolute grid grid-cols-1 md:grid-cols-3 w-full bg-gradient-to-r from-teal-600 to-teal-200 "+props.hidden}>
        <ul className="text-lg space-x-8 col-span-2 flex justify-center">
          <li className="cursor-pointer hover:text-teal-500">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="cursor-pointer hover:text-teal-500">
            <Link to="/1">Practice</Link>
          </li> */}
          <li className="cursor-pointer hover:text-teal-500">
            <Link to="/Tutorial">Tutorial</Link>
          </li>
          <li className="cursor-pointer hover:text-teal-500">
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
)

export default Navbar;
