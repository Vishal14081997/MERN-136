import React, { useState } from 'react'
import StudentList from './components/StudentList';

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
    <div className='flex gap-5 justify-center h-screen items-center'>
      <StudentList data={data} onDelete={handleDelete} />
    </div>
  )
}

export default App

// Prop drilling in React is the process of passing data (props) from a parent component down through multiple layers of nested child components to reach a deeply nested component that actually needs the data