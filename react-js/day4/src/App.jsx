// import React, { useState } from 'react'
// import Child from './components/Child'
// import ProductChild from './components/ProductChild'

// const App = () => {
//   const [userData, setUserData] = useState({
//     name: "vishal",
//     age: "25",
//     gender: "Male",
//     study: "full stack devloper"
//   })

//   const changeData = () => {
//     setUserData({
//       name: "Rajesh",
//       age: "30",
//       gender: "Male",
//       study: "Mern stack devloper"
//     })
//   }

//   let productdata = [
//     {
//       id: 1,
//       title: "Iphone",
//       des: "this is iphone series of apple",
//       price: 2000,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaE9GF2i2qAhIEsJGKfM3kROp5WaTotiBkLV8l32A3g&s"
//     },
//     {
//       id: 2,
//       title: "sumsung s24 ",
//       des: "this is sumsung series ",
//       price: 2000,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaE9GF2i2qAhIEsJGKfM3kROp5WaTotiBkLV8l32A3g&s"
//     },
//     {
//       id: 3,
//       title: "sumsung s24 ",
//       des: "this is sumsung series ",
//       price: 2000,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaE9GF2i2qAhIEsJGKfM3kROp5WaTotiBkLV8l32A3g&s"
//     },
//     {
//       id: 4,
//       title: "sumsung s24 ",
//       des: "this is sumsung series ",
//       price: 2000,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaE9GF2i2qAhIEsJGKfM3kROp5WaTotiBkLV8l32A3g&s"
//     },

//   ]

//   const [data, setData] = useState(productdata)

//   const changeProduct = (id) => {
//     console.log(id);
//     setData((oldData) => {
//       // console.log(oldData);
//       return oldData.map((item) => {
//         // console.log(item);
//         if (item.id === id) {
//           return {
//             ...item,
//             title: "update data",
//             des: "all product change",
//             price: 6000,
//             image: "https://m.media-amazon.com/images/I/71ju4kS-W8L._AC_UF1000,1000_QL80_.jpg"
//           }
//         }
//         return item
//       })
//     })
//   }

//   return (
//     <>
//       {/* <Child heading="my name vishal singh" title="child1" /> */}
//       <div className='flex gap-5 mt-10 justify-between p-4'>
//         {
//           data.map((item) => {
//             return (
//               <ProductChild key={item.id} productData={item} changeProduct={changeProduct} />
//             )
//           })
//         }
//       </div>

//       <div className='bg-gray-400 inline-block ml-10 p-2 rounded-2xl'>
//         <h1>{userData.name}</h1>
//         <h1>{userData.age}</h1>
//         <h1>{userData.gender}</h1>
//         <h1>{userData.study}</h1>
//         <button className='bg-blue-700 rounded-2xl  text-white p-2 mt-4' onClick={changeData}>Update data</button>
//       </div>

//     </>
//   )
// }
// export default App


// -------------- 2nd -------------------------

import React, { useEffect, useState } from 'react'
import Button from "@mui/material/Button"

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log("count updated", count);
  }, [count]) // dependency

  return (
    <>
      <div>
        <h1>Count:{count}</h1>
        <Button variant="outlined" onClick={handleIncrement}>Increment</Button>
      </div>
    </>
  )
}

export default App


// useEffect : -  useEffect ek react ka hook h jo component ke render hone ke baad side effects perform karna ke liye use hota hai , jaise api call , event listener ,ya state ke chnage hone par code chalna . 

// state : - 
// const [count , setCount]  = useState(0)
// count - current state vlaue
// setCount - state ko change karne ka function 
// 0 - initial value

// state components ke ander ek aisi value/ data  hai jo time saath change ho sakti hai . jab state change hoti hais . react components ko dobara render  karta hai.

// useState  : - ek react hook hai jo function component ke ander state ko create or mange karne ka k liye use hota hai

