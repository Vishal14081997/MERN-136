// ---------1st --------------

// import React from 'react'
// const StudentCard = (props) => {
//     return (
//         <>
//             <div>Name: {props.name}</div>
//             <div>Age: {props.age}</div>
//             <div>Roll No : {props.rollNo}</div>
//             <div>Class : {props.studentClass}</div>
//         </>
//     )
// }

// export default StudentCard


import React from 'react'
const StudentCard = ({ name, age, rollNo, studentClass }) => {
    return (
        <>
            <div className='bg-amber-500 p-3 font-bold'> 
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Roll No : {rollNo}</div>
                <div>Class : {studentClass}</div>
            </div>
        </>
    )
}

export default StudentCard