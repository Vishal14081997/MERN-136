import React from 'react'

const StudentInfo = ({ id, name, age, rollNo, studentClass, onDelete }) => {
    return (
        <div className='bg-red-900 text-white rounded-2xl p-4'>
            <div>Name : {name}</div>
            <div>Age : {age}</div>
            <div>RollNo : {rollNo}</div>
            <div>Class : {studentClass}</div>
            <div className='text-center'>
                <button
                    onClick={() => onDelete(id)}
                    className='bg-orange-400 text-white font-semibold px-4 py-1 rounded-2xl mt-2'>Delete</button>
            </div>
        </div>
    )
}
export default StudentInfo