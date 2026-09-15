import React, { useContext } from 'react'
import { counterContext } from './context/CounterContext'

const Home = () => {
    const { count, setCount } = useContext(counterContext)
    return (
        <div>
            <div>{count}</div>
            <button onClick={()=>setCount(count+1)} >click</button>
        </div>
    )
}

export default Home