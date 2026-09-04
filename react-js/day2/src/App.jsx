// ---------1st --------------

// import React from 'react'
// import StudentCard from './components/students/StudentCard'

// // const StudentCard = (props) => {
// //   // console.log(props);
// //   return (
// //     <>
// //     <div>Name: {props.name}</div>
// //     <div>Age: {props.age}</div>
// //     <div>Roll No : {props.rollNo}</div>
// //     <div>Class : {props.studentClass}</div>
// //     </>
// //   )
// // }

// const App = () => {
//   return (
//     <>
//       <div className='flex gap-10 justify-around items-center h-screen '>
//         <StudentCard name="vishal" age="100" rollNo="101" studentClass="10th" />
//       </div>
//     </>
//   )
// }
// export default App


// --------- 2nd --------------

import React, { useState } from 'react'
import StudentCard from './components/students/StudentCard'

const App = () => {
  const studentData = [
    {
      id: 1,
      name: "vishal",
      age: "100",
      rollNo: "101",
      studentClass: "10th"

    },
    {
      id: 2,
      name: "rajesh",
      age: "100",
      rollNo: "102",
      studentClass: "11th"

    },
    {
      id: 3,
      name: "mohan",
      age: "100",
      rollNo: "103",
      studentClass: "12th"
    },
    {
      id: 4,
      name: "mohan",
      age: "100",
      rollNo: "104",
      studentClass: "9th"
    },
  ]
  const [data, setData] = useState(studentData);

  const handleDelete = (id) => {
    console.log(id);
    setData(data.filter((item) => item.id !== id))
  }

  return (
    <div className='flex gap-10 justify-center items-center h-screen '>
      {
        data.map((item) => {
          console.log(item);
          return (
              <StudentCard key={item.id} name={item.name} age={item.age} rollNo={item.rollNo} studentClass={item.studentClass} onDelete={() => handleDelete(item.id)} />
          )
        })
      }
    </div>
  )
}

export default App