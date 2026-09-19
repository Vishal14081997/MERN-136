import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between bg-sky-600 text-white px-4 py-3'>
            <div className='font-semibol cursor-pointer'>
                Logo
            </div>
            <div>
                <ul className='flex gap-2 font-semibold'>
                    <Link to={"/"}>
                        <li className='cursor-pointer'>Home</li>
                    </Link>
                    <Link to={"/about"}>
                        <li className='cursor-pointer'>About</li>
                    </Link>
                    <Link to={"/contact"}>
                        <li className='cursor-pointer'>Contact</li>
                    </Link>
                </ul>
            </div>
            <div className='flex gap-2 font-semibold '>
                <div className='cursor-pointer'>Login</div>
                <div className='cursor-pointer'>Signup</div>
            </div>

        </div>
    )
}

export default Navbar