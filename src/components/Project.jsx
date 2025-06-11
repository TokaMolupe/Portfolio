import { IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Player from "../assets/images/Player.png"
import Page from "../assets/images/Page.png"

function Project() {

    return (
        <div className="p-6 text-white">
            <div>
                <Link
                    to="/"
                >
                    <IoHomeOutline className="text-3xl hover:text-lime-500 cursor-pointer" />
                </Link>
                <h1 className="text-3xl font-bold text-center hover:underline hover:text-lime-500">Projects</h1>
            </div>
            <div className="flex justify-center items-start mt-10">
                <div className="w-full max-w-6xl [column-width:200px] gap-4 columns">
                    <div className="bg-transparent cursor-pointer text-center mb-10 md:mb-0">
                        <a href="https://tokamolupe.github.io/Music-Player-UI-Mockup/" className="h-full w-full block justify-center items-center">
                            <img src={Player} alt="Music Player" className="transition-transform duration-300 ease-in-out hover:scale-110 w-[200px]" />
                        </a> <br />
                    </div>
                    <div className="bg-transparent cursor-pointer text-center">
                        <a href="https://tokamolupe.github.io/Sign-Up/" className="h-full w-full block mt-2">
                            <img src={Page} alt="Sign Up Page" className="transition-transform duration-300 ease-in-out hover:scale-110 w-[200px]" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;