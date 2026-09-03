// import React from 'react'

// const App = () => {
//   let name = "vishal"
//   let age = "100"

//   let x = 5;
//   let y = 10;

//   let count = 10;
//   const increment = () => {
//     count = count + 1
//     console.log(count);
//   }
//   return (
//     <div>
//       <div>{name}</div>
//       <div>{age}</div>
//       <div>{x + y}</div>
//       <p>Count : {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   )
// }
// export default App


// ....................................................................

import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  // const increment = () => {
  //   setCount(count + 1)
  // }
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>+Increment</button>
    </div>
  )
}
export default App

