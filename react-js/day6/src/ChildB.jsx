import React, { useContext } from 'react'
import { UserContext } from './App'

const ChildB = () => {
    const { count } = useContext(UserContext)

    return (
        <div>ChildB
            {count}
        </div>
    )
}

export default ChildB