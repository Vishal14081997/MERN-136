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

import React from "react";
const StudentCard = ({ name, age, rollNo, studentClass, onDelete }) => {
    return (
        <>
            <div className="bg-black text-white p-3  rounded-2xl">
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Roll No : {rollNo}</div>
                <div>Class : {studentClass}</div>

                <div className="text-center">
                    <button
                        onClick={onDelete}
                        className="bg-red-500 px-4 py-2 rounded-2xl mt-10 "
                    >
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
};

export default StudentCard;
