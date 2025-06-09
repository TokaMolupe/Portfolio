import { Link } from 'react-router-dom';
import Socials from "./Socials"
import tmicon from "../assets/images/tmicon.ico"

function Navbar() {
    return (
        <div>
            <Socials />
            <div className="flex justify-between items-center gap-5 text-white p-6 mx-auto sm: w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-none md:shadow-md md:shadow-lime-500 bg-transparent mt-5">
                <img src={tmicon} alt="Toka Molupe Icon" className="app-logo" />
                <ul className="flex gap-6">
                    <li className="hover:text-lime-500 hover:underline">
                        <Link
                            to="/"
                            className=""
                        >
                            About
                        </Link>
                    </li>
                    <li className="hover:text-lime-500 hover:underline ">
                        <Link
                            to="/Projects"
                            className=""
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="hover:text-lime-500 hover:underline">
                        <Link
                            to="/Contact"
                            className=""
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
