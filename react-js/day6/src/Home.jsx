import React, { useContext } from 'react'
import { counterContext } from './context/CounterContext'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
    const { count, setCount } = useContext(counterContext)
    return (
        <>
            <div className=' flex flex-col justify-center items-center h-screen gap-4'>
                <Navbar />
                <div>
                    <h1 className='text-3xl font-bold'>Welcome to Home page</h1>
                    <div className='flex gap-20'>
                        <button className='text-green-600' onClick={()=>setCount(count+1)}>Click me</button>
                        <p>Current Count :{count}</p>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Home