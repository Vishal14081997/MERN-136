import React from 'react'
import StudentCard from './StudentCard';

const StudentList = ({ data,onDelete }) => {
    console.log(data);

    return (
        <>
            {/* <div className='flex gap-10'> */}

            {
                data.map((item) => {
                    // console.log(item);
                    return (
                        <StudentCard key={item.id} id={item.id} name={item.name} age={item.age} rollNo={item.rollNo} studentClass={item.studentClass} onDelete={onDelete} />
                    )
                })
            }
            {/* </div> */}
        </>
    )
}

export default StudentList