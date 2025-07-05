import { Link } from 'react-router-dom';
import Socials from "./Socials"
import icon from "../assets/images/icon.ico"
import { IoMenu, IoClose } from 'react-icons/io5';
import { useState } from 'react';

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div>
            <Socials />
            <div className="flex justify-between items-center gap-5 text-white p-6 mx-auto sm: w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-none md:shadow-md md:shadow-lime-500 bg-transparent mt-12 md:hover:bg-lime-500 md:hover:shadow-xl md:hover:shadow-black">
                <img src={icon} alt="Toka Molupe Icon" className="app-logo hover:scale-125 cursor-pointer hidden" />
                <ul className="hidden lg:flex gap-6 hover:scale-105">
                    <li className="group relative hover:scale-105 transition-transform duration-300 ease-in-out">
                        <Link to="/About" className="relative text-white">
                            About
                        </Link>
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-500 ease-in-out origin-left"></span>
                    </li>
                    <li className="group relative hover:scale-105 transition-transform duration-300 ease-in-out">
                        <Link to="/Projects" className="relative text-white">
                            Projects
                        </Link>
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-500 ease-in-out origin-left"></span>
                    </li>
                    <li className="group relative hover:scale-105 transition-transform duration-300 ease-in-out">
                        <Link to="/Contact" className="relative text-white">
                            Contact
                        </Link>
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-500 ease-in-out origin-left"></span>
                    </li>
                </ul>
                <nav className='flex flex-col justify-start items-start w-screen fixed top-12'>
                    <button className="lg:hidden text-2xl mr-6" onClick={toggleMenu}>
                        {menuOpen ? <IoClose /> : <IoMenu />}
                    </button>
                    {menuOpen && (<div>
                        <ul className='p-6 w-screen'>
                            <li className='mb-5 text-xl'>
                                <Link to="/About" className="relative text-white">
                                    About
                                </Link>
                            </li>
                            <li className='mb-5 text-xl'>
                                <Link to="/Projects" className="relative text-white">
                                    Projects
                                </Link>
                            </li>
                            <li className='text-xl'>
                                <Link to="/Contact" className="relative text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    )}
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
