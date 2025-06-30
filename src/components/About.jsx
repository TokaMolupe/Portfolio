import { IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

function AboutMe() {
    return (
        <div className="p-6 text-white">
            <div>
                <Link to="/">
                    <IoHomeOutline className="text-3xl hover:text-lime-500 cursor-pointer" />
                </Link>
                <h1 className="text-3xl font-bold text-center hover:underline hover:text-lime-500">
                    About Me
                </h1>
            </div>
            <div>
                <p className="text-[0.8rem] md:text-xl mt-5 text-gray-400">
                    I’m a front-end developer and designer who creates clean,
                    responsive interfaces that are both functional and visually appealing.
                    I enjoy solving problems, whether it’s fixing bugs or turning designs into reality.
                    Always curious and ready to learn, I’m dedicated to building better and more engaging
                    web experiences. Let’s make something great together!
                </p>
            </div>
        </div>
    );
};

export default AboutMe;