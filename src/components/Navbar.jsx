import {FaShoppingCart} from "react-icons/fa"
import logo from '../images/7920484.jpg'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {


  const {cart} =useSelector((state)=>state)
  return (
    <div>
      <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">


        <NavLink to="/"><div><img src={logo}  className="ml-5 h-14 w-14"></img></div></NavLink>


        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">

          <NavLink to="/"><h1>Home</h1></NavLink>

        <NavLink to="/cart"><div className="relative"><FaShoppingCart className="text-2xl"></FaShoppingCart>{
          cart.length>0 &&
          <span className="absolute top-[-14px] right-[-10px] bg-green-600 px-1 h-4 text-xs flex justify-center items-center rounded-full w-5 h-5 animate-bounce">{cart.length}</span>}</div></NavLink>
          
           
        </div>


      </div>
    </div>
  )
};

export default Navbar;
