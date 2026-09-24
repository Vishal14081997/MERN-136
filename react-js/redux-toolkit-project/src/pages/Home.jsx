import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";
import ProductCard from "../components/ProductCard";
import axios from "axios"

const Home = () => {
  let dispatch = useDispatch(); // reducer k ander jo bhi function/action ko call krta hai
  const [products, setProducts] = useState([])
  const fetchProduct = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products")
      console.log(response.data.products);
      setProducts(response.data.products)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <div>

      {/* <h1>Home</h1>
      <button
        onClick={() => dispatch(increment())}
        className="bg-amber-800 text-white rounded-2xl p-2"
      >
        Increment
      </button>

      <button
        onClick={() => dispatch(decrement())}
        className="bg-amber-800 text-white rounded-2xl p-2"
      >
        Increment
      </button> */}

      <h1 className="text-center font-bold text-2xl">Our Product</h1>
      <div className="grid grid-cols-4 gap-5 mt-5 px-4">
        {
          products.map((item, index) => {
            return (
              <ProductCard data={item} key={index} />
            )
          })
        }
      </div>
    </div>
  );
};

export default Home;
