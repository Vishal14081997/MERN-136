import React from 'react'
import StudentInfo from './StudentInfo'

const StudentCard = ({id ,name, age , rollNo , studentClass ,onDelete}) => {
  return (
    <div className=''>
        <StudentInfo id= {id} name={name} age={age} rollNo = {rollNo}  studentClass= {studentClass} onDelete={onDelete}/>
    </div>
  )
}

export default StudentCard