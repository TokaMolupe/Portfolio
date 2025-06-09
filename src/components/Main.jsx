import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";

function Main() {
    return (
        <div>
            <div className="justify-start items-start p-24 text-white">
                <p className="text-5xl">
                    Hi, I'm Toka Molupe <br />
                    <ReactTyped
                        strings={[
                            "Frontend Developer",
                            "Software Engineer.",
                        ]}
                        typeSpeed={50}
                        backSpeed={30}
                        loop={false}
                    />
                </p>
                <p className="text-2xl mt-5 text-gray-400">
                    I design and build responsive, user-friendly websites with a focus on clean code, smooth interactions, <br />
                    and modern aesthetics. I love turning ideas into engaging digital experiences.
                </p>
                <div className="mt-10">
                    <Link
                        to="/Contact"
                        className="p-4 bg-transparent shadow-md shadow-lime-500 rounded-lg hover:text-lg"
                    >
                        Get In Touch
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Main;