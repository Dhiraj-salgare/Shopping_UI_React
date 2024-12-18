import { useEffect, useState } from "react";
import Product from '../components/Product'
import Spinner from '../components/Spinner'
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

   const[loading,setloading]=useState(false);
   const [post,setpost]=useState([]);
  async function fetchdata(){

    setloading(true);
    try{
    const data=await fetch(API_URL);
    let output=await data.json();
    setpost(output);

    }
    catch{
      console.log("error occured");
      setpost([]);

    }
    setloading(false);
  }



  useEffect(()=>{
       fetchdata();
  },[])

  return (<div>

    {
      loading? <Spinner></Spinner> : post.length > 0?(<div className="grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5">{post.map((posts)=>(
        <Product key={posts.id} posts={posts}></Product>
      )

        )}</div>):<div className="flex justify-center items-center"><p>No data found</p></div>
    }

  </div>);
};

export default Home;
