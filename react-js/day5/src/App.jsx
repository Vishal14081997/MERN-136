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

// import React, { useState } from "react";

// const App = () => {
//   const [formData, setFormData] = useState({
//     firstname: "", lastname: "", email: "", password: ""
//   })
//   const [isSubmited, setIsSubmited] = useState(false)

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmited(true)
//   }
//   const handleChange = (e) => {
//     // console.log(e.target.name);
//     // console.log(e.target.value);
//     setFormData({ ...formData, [e.target.name]: e.target.value })

//   }
//   console.log(formData);
//   return (
//     <div className="flex justify-center gap-20 items-center h-screen">

//       <form onSubmit={handleSubmit} className="p-8 border border-gray-400">
//         <h2 className="font-bold text-2xl">Registration form</h2>
//         <div className="flex flex-col ">
//           <div className="border border-gray-200 mt-4 rounded-[8px]">
//             <input
//               onChange={handleChange}
//               name="firstname"
//               value={formData.firstname}
//               type="text"
//               placeholder="Firstname"
//               className="outline-none p-2 "
//             />
//           </div>
//           <div className="border border-gray-200 mt-4 rounded-[8px]">
//             <input
//               onChange={handleChange}
//               name="lastname"
//               value={formData.lastname}
//               type="text"
//               placeholder="Lastname"
//               className="outline-none p-2 "
//             />
//           </div>
//           <div className="border border-gray-200 mt-4 rounded-[8px]">
//             <input
//               onChange={handleChange}
//               name="email"
//               value={formData.email}
//               type="email"
//               placeholder="email"
//               className="outline-none p-2 "
//             />
//           </div>
//           <div className="border border-gray-200 mt-4 rounded-[8px]">
//             <input
//               onChange={handleChange}
//               name="password"
//               value={formData.password}
//               type="password"
//               placeholder="password"
//               className="outline-none p-2 "
//             />
//           </div>

//         </div>
//         <div className="text-center mt-4 font-semibold bg-blue-600 p-2 text-white">
//           <button type="submit" className="">Submit</button>
//         </div>
//       </form>

//       <div>
//         {
//           isSubmited &&
//           <div className="p-4 border border-gray-200">
//             <h1>submit data</h1>
//             <div>
//               <p>FirstName: {formData.firstname}</p>
//               <p>LastName: {formData.lastname}</p>
//               <p>Email: {formData.email}</p>
//               <p>Password: {formData.password}</p>
//             </div>
//           </div>
//         }
//       </div>
//     </div>
//   );
// };

// export default App;
