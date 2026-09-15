// import React, { createContext, useState } from 'react'
// import ChildC from './ChildC'
// import ChildB from './ChildB';

// export const UserContext = createContext();
// const App = () => {
//   const [user, setUser] = useState("vishal")
//   const [count, setCount] = useState(0)

//   let data = { user, setUser, count, setCount }
//   return (
//     <div>
//       <UserContext.Provider value={data}>
//         <ChildC />
//         <ChildB />
//       </UserContext.Provider>
//     </div>
//   )
// }

// export default App


//----------------- 2nd-------------------------

import React from 'react'
import Home from './Home'
import CounterContext from './context/CounterContext'

const App = () => {
  return (
    <CounterContext>
      <Home />
    </CounterContext>
  )
}

export default App