import { useDispatch, useSelector } from "react-redux";
import {toast} from 'react-hot-toast'
import {add,remove} from '../redux/Slices/CartSlice'
import { useEffect, useState } from "react";


const Product = ({posts}) => {

  
     const [substr,setsubstr]=useState(false);
     const dispatch=useDispatch();
     const {cart}=useSelector((state)=>state)
     let des=posts.description;
      function addTocart(){
        dispatch(add(posts))
        toast.success("item added to cart")

     }
   

     function changestate(){
      setsubstr(!substr);
     }


     function removefromcart(){
      dispatch(remove(posts.id))
      toast.success("item removed from cart");
     }
  return (<div className="flex flex-col items-center justify-between hover:scale-110 transition  duration-300 ease-in gap-3 p-4 ml-5 rounded-xl shadow-lg  hover:shadow-2xl">
       <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate  w-40 mt-1">{posts.title}s</p>
       </div>
       <div>
         {
           !substr?(<div><p className="w-40 text-gray-400 font-normal text-[10px] text-left">{des.substring(1,40)}</p><a onClick={changestate} className="w-40 text-gray-400 font-normal text-[10px] text-left">readmore...</a></div>):(<div><p className="w-40 text-gray-400 font-normal text-[10px] text-left">{des}</p><span className="w-40 text-gray-400 font-normal text-[10px] text-left" onClick={changestate}>...readless</span></div>)

         }
       </div>

       <div className="h-[180px]">
          <img src={posts.image} className="h-full w-full"></img>
       </div>

       <div className="flex justify-between gap-12 items-center w-full mt-5">
       <div>
         <p className="text-green-600 font-semibold">${posts.price}</p>
       </div>

       
        {
          
          cart.some((p)=>p.id==posts.id)?(<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 text-[12px] px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={removefromcart}>remove Item</button>):(<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 text-[12px] px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={addTocart}>Add to cart</button>)
        }
      

       </div>

  </div>)
};

export default Product;
