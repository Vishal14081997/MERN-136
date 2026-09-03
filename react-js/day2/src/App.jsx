// ---------1st --------------

import React from 'react'
import StudentCard from './components/StudentCard'


// const StudentCard = (props) => {
//   // console.log(props);
//   return (
//     <>
//     <div>Name: {props.name}</div>
//     <div>Age: {props.age}</div>
//     <div>Roll No : {props.rollNo}</div>
//     <div>Class : {props.studentClass}</div>
//     </>
//   )
// }

const App = () => {
  return (
    <>
      <div>
        <StudentCard name="vishal" age="100" rollNo="101" studentClass="10th" />
      </div>
    </>
  )
}

export default App