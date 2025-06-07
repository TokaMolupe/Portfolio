import Socials from "./Socials"
import tmicon from "../assets/images/tmicon.ico"

function Navbar() {
    return (
        <div>
            <Socials />
            <div className="flex justify-between items-center gap-5 text-white p-6 mx-auto w-1/3 rounded-lg shadow-md shadow-lime-500 bg-transparent mt-5">
                <img src={tmicon} alt="Toka Molupe Icon" className="app-logo" />
                <ul className="flex gap-6">
                    <li className="hover:text-lime-500 hover:text-lg">
                        <a href="#">About</a>
                    </li>
                    <li className="hover:text-lime-500 hover:text-lg">
                        <a href="#">Projects</a>
                    </li>
                    <li className="hover:text-lime-500 hover:text-lg">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
