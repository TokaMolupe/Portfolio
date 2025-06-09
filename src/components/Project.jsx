import { CiLogin } from "react-icons/ci";
import { BsMusicPlayer } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

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
            <div className="flex justify-between items-center  w-full mt-10 max-w-md mx-auto">
                <div className="w-2/6 h-80 bg-transparent cursor-pointer text-center">
                    <a href="https://tokamolupe.github.io/Music-Player-UI-Mockup/" className="h-full w-full block justify-center items-center">
                        <BsMusicPlayer className="text-[10rem] hover:scale-105 hover:text-lime-500" />
                    </a>
                    <p className="mt-5 hover:text-lime-500">
                        This Music Player UI Might Be Sleek Enough to Replace Spotify! <br />

                    </p>
                </div>
                <div className="w-2/6 h-80 bg-transparent cursor-pointer text-center">
                    <a href="https://tokamolupe.github.io/Sign-Up/" className="h-full w-full block mt-2">
                        <CiLogin className="text-[10rem] hover:scale-105 hover:text-lime-500" />
                    </a>
                    <p className="mt-5 hover:text-lime-5001">
                        Sign-Up So Smooth, You’ll Want to Create an Account Twice
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Project;