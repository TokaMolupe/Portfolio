import { Link } from 'react-router-dom';
import Socials from "./Socials"
import icon from "../assets/images/icon.ico"

function Navbar() {
    return (
        <div>
            <Socials />
            <div className="flex justify-between items-center gap-5 text-white p-6 mx-auto sm: w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-none md:shadow-md md:shadow-lime-500 bg-transparent mt-5 md:hover:bg-lime-500 md:hover:shadow-xl md:hover:shadow-black hover:scale-105">
                <img src={icon} alt="Toka Molupe Icon" className="app-logo hover:scale-125 cursor-pointer" />
                <ul className="flex gap-6">
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
            </div>
        </div>
    );
}

export default Navbar;
