import React, { useContext } from 'react'
import { UserContext } from './App'


const ChildC = () => {
    const { user, setUser, count, setCount } = useContext(UserContext)
    return (
        <div className='bg-red-100'>
            <button onClick={() => setUser("rajesh")}> changeName</button> <br />
            {user} <br />
            <button onClick={() => setCount(count + 1)}>increase</button>
            <div>count : {count}</div>
        </div>
    )
}

export default ChildC