import { IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Player from "../assets/images/Player.png"
import Page from "../assets/images/Page.png"
import Streamflix from "../assets/images/Streamflix.png"

function Project() {

    return (
        <div className="p-6 text-white">
            <div>
                <Link to="/">
                    <IoHomeOutline className="text-3xl hover:text-lime-500 cursor-pointer" />
                </Link>
                <h1 className="text-3xl font-bold text-center hover:underline hover:text-lime-500">Projects</h1>
            </div>
            <div className="flex justify-center mt-10">
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
                    <div className="cursor-pointer text-center">
                        <a href="https://tokamolupe.github.io/Music-Player-UI-Mockup/">
                            <img
                                src={Player}
                                alt="Music Player"
                                className="transition-transform duration-300 ease-in-out hover:scale-110 w-[200px]"
                            />
                        </a>
                    </div>
                    <div className="cursor-pointer text-center">
                        <a href="https://tokamolupe.github.io/Sign-Up/">
                            <img
                                src={Page}
                                alt="Sign Up Page"
                                className="transition-transform duration-300 ease-in-out hover:scale-110 w-[200px]"
                            />
                        </a>
                    </div>
                    <div className="cursor-pointer text-center">
                        <a href="https://tokamolupe.github.io/Netflix-Mockup/">
                            <img
                                src={Streamflix}
                                alt="Streamflix"
                                className="transition-transform duration-300 ease-in-out hover:scale-110 w-[200px]"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;