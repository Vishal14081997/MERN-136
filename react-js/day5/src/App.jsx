// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [data, setData] = useState([])
//   console.log(data);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('https://fakestoreapi.com/products')
//       const productData = await response.json()
//       // console.log(productData);
//       setData(productData)
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   useEffect(() => {
//     fetchData()
//   }, [])

//   return (
//     <>
//     <div className='flex gap-10 flex-wrap p-4'>
//       {
//         data.map((item) => {
//           return (
//             <>
//             <div className=' bg-gray-400 p-4 rounded-2xl'>
//               <img src={item.image} height={100} width={100} alt="" />
//               <div>{item.category}</div>
//               <div>{item.price}</div>
//             </div>
//             </>
//           )
//         })
//       }

//     </div>
//     </>
//   )
// }

// export default App

// --------------- 2nd --------------------------------------

// import React, { useState } from "react";
// import { Eye, EyeOff } from "lucide-react";

// const App = () => {
//   const [isActive, setIsActive] = useState(true);
//   const [isLoggedIn, setIsLogged] = useState(true);
//   const [isOpen, setIsOpen] = useState(false);
//   const [isShow, setIsShow] = useState(false);
//   const handleIsLoggedIn = () => {
//     setIsLogged(!isLoggedIn)
//   }
//   return (
//     <div>
//       {isActive ? (
//         <h1 className="text-green-600 text-2xl font-bold">User is active</h1>
//       ) : (
//         <h1 className="text-green-600 text-2xl font-bold">
//           User is not active
//         </h1>
//       )}
//       {isLoggedIn ? (
//         <h1>Hello vishal , welcome back</h1>
//       ) : (
//         <h1>Please Login</h1>
//       )}

//       {isOpen && <h1>Model is open</h1>}
//       {!isOpen && <h1>Model is not open</h1>}

//       <div>
//         <input className="bg-gray-100" type={isShow ? "text" : "password"} />
//         {isShow ? (
//           <div onClick={() => setIsShow(false)}>
//             <Eye />
//           </div>
//         ) : (
//           <div onClick={() => setIsShow(true)}>
//             <EyeOff />
//           </div>
//         )}
//       </div>

//       <button onClick={handleIsLoggedIn}>
//         {isLoggedIn ? "Logout" : "Login"}
//       </button>


//     </div>
//   );
// };

// export default App;

//--------------- 3rd ----------------------------

import React, { useState } from 'react'

const App = () => {
  const [firstname, setFirstName] = useState("")
  const handleChange = (e) => {
    console.log(e.target.value);
    setFirstName(e.target.value)
  }
  return (
    <div>
      <form action="">
        <h2>Registration form</h2>
        <label htmlFor="Firstname">Firstname</label>
        <input id='Firstname' type="text" placeholder='Firstname' onChange={handleChange} />
      </form>
      <div>
        <div>FirstName: {firstname}</div>
      </div>
    </div>
  )
}

export default App