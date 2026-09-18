import React, { useContext } from 'react'
import { theamContext } from './context/TheamContext'


const Navbar = () => {
    const { theme, setTheme } = useContext(theamContext)

    return (
        <div className='flex gap-5'>
            <button  className='bg-amber-300 text-black font-bold rounded-2xl p-2' onClick={() => setTheme("black")}>black Theme</button>
            <button  className='bg-amber-300 text-black font-bold rounded-2xl p-2' onClick={() => setTheme("White")}>White Theme</button>
        </div>
    )
}

export default Navbar