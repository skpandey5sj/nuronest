import React, { useState } from 'react';
import { FaCube } from "react-icons/fa";
import { useModal } from './ModalContext';
import { NavLink } from 'react-router-dom';
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { openModal } = useModal(); // add this
    return (
        <nav className="bg-white fixed top-0 left-0 right-0 w-full z-50 shadow-md">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 md:h-20 items-center justify-between">
                  
                    <div className="flex items-center">
                        <FaCube className="text-blue-600 text-xl md:text-2xl mr-2" /> 
                        <span className="text-lg md:text-xl font-bold text-blue-600">Neronest</span> 
                    </div>

                    
                    <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black '+'text-black text-sm md:text-base font-medium hover:text-blue-600 transition-colors'} >Home</NavLink>
                        <NavLink to='/Services' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black '+'text-black text-sm md:text-base font-medium hover:text-blue-600 transition-colors'}>Services</NavLink>
                        <NavLink to='/About' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black '+"text-black text-sm md:text-base font-medium hover:text-blue-600 transition-colors"}>About</NavLink>
                        <NavLink to="/Projects" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black '+"text-black text-sm md:text-base font-medium hover:text-blue-600 transition-colors"}>Projects</NavLink>
                        <NavLink to="Testimonials" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black '+"text-black text-sm md:text-base font-medium hover:text-blue-600 transition-colors"}>Testimonials</NavLink>
                        <NavLink to="/Contact" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black '+"text-black text-sm md:text-base font-medium hover:text-blue-600 transition-colors"}>Contact</NavLink>
                     
                        <a onClick={() => openModal('enquiryModal')} className="bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-medium py-1.5 px-4 md:py-2 md:px-6 rounded-md transition-colors ml-2 md:ml-4">
                            Enquiry Now!
                        </a>
                    </div>

                   
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

               
                {isOpen && (
                    <div className="md:hidden pb-4 bg-white">
                        <div className="flex flex-col space-y-3 px-2 pt-2">
                            <NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black '+"block text-black hover:bg-gray-100 px-3 py-2 rounded-md text-base"}>Home</NavLink>
                            <NavLink to='/Services' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black '+"block text-black hover:bg-gray-100 px-3 py-2 rounded-md text-base"}>Services</NavLink>
                            <NavLink to='/About' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black '+"block text-black hover:bg-gray-100 px-3 py-2 rounded-md text-base"}>About</NavLink>
                            <NavLink to='/Projects' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black '+"block text-black hover:bg-gray-100 px-3 py-2 rounded-md text-base"}>Projects</NavLink>
                            <NavLink to='/Testimonials' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black '+"block text-black hover:bg-gray-100 px-3 py-2 rounded-md text-base"}>Testimonials</NavLink>
                            <NavLink to='/Contact' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black '+"block text-black hover:bg-gray-100 px-3 py-2 rounded-md text-base"}>Contact</NavLink>
                            <a onClick={() => openModal('enquiryModal')} className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md mt-2 w-full text-base">
                                 Enquiry Now!
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Nav;