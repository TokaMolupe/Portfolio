import signup from "../assets/images/signup.png"
import musicplayer from "../assets/images/musicplayer.png"
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
            <div className="flex justify-between items-center  w-full">
                <div className="w-2/6 h-80 bg-transparent cursor-pointer text-center transition-transform duration-300 hover:scale-105">
                    <a href="https://tokamolupe.github.io/Music-Player-UI-Mockup/" className="h-full w-full block justify-center items-center">
                        <img src={musicplayer} className="w-full h-full" alt="Music Player UI Mockup" />
                    </a>
                    <p className="mt-5">
                        Music Player UI Mockup with a modern look using a clean dark theme. At the center, I placed the
                        album cover, song title, and artist name, complemented by a stylish progress bar and intuitive
                        playback controls. I kept the interface minimalistic and responsive to ensure a smooth user
                        experience on both desktop and mobile devices. I also included selectable genres and a list of
                        songs to enhance user interaction and make music exploration more engaging.
                    </p>
                </div>
                <div className="w-2/6 h-80 bg-transparent cursor-pointer text-center transition-transform duration-300 hover:scale-105">
                    <a href="https://tokamolupe.github.io/Sign-Up/" className="h-full w-full block mt-2">
                        <img src={signup} className="w-full h-full" alt="Sign Up" />
                    </a>
                    <p className="mt-5">
                        Clean and modern Sign-Up page with a user-friendly interface designed for easy account creation.
                        The form is centered on the screen with input fields for name, email, and password, all set against
                        a smooth gradient background. I made sure the layout is responsive and easy to navigate, with clear
                        labels and a prominent sign-up button to guide users through the process.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Project;