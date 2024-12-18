import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {

  const {cart} =useSelector((state)=>state);
  const[totalamount,settotalamount]=useState(0);

  console.log(cart);

  useEffect(()=>{
    settotalamount(cart.reduce((acc,curr)=>acc+curr.price,0));

  },[cart])

  return (

       <div>
       {

        
        cart.length>0?(<div className="flex justify-between max-w-6xl mx-auto flex-wrap gap-10"><div className="flex flex-col gap-10">{
          cart.map((item,index)=>{

            return<CartItem key={item.id} item={item} itemIndex={index}></CartItem>
          })
          
          }

        </div>
          
        
         <div className="flex flex-col px-5">
            <div className="text-green-600 font-semibold">Your Cart</div>
            <div className="text-green-600 font-semibold">Summery</div>

            <p><span>Total.length:{cart.length}</span></p>

            <div><p>total Amount:{totalamount}</p>
               <button className="bg-green-600 text-white text-white px-2 py-2">Checkout Now</button>
              </div>



         </div>


        </div>):(<div className="flex  flex-col justify-center items-center"><h1>cart is empty</h1><Link to='/'><button className="bg-green-600 text-white text-white px-2 py-2" >Shop now</button></Link></div>)
       
       }
      
       

  </div>)
};

export default Cart;
