import React from 'react';
import { IoMdNotifications } from 'react-icons/io'
import { FaQuran } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <>
            <nav className='bg-white shadow-lg flex justify-around items-center h-14 fixed w-full'>
                <div className="logo flex items-center gap-2 "  onClick={()=> navigate('/')}>
                    <FaQuran size={30} color='green' />
                    <h1 className='text-2xl font-bold font-sans cursor-pointer'>Qur'an-Pro</h1>
                </div>
                <ul className="menu flex items-center">
                    <li><IoMdNotifications size={25} /></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;