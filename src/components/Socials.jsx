import { LiaLinkedinIn } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import { LiaGithub } from "react-icons/lia";

function Socials() {
    return (
        <div className="flex justify-end items-end mt-10 mr-10">
            <ul className="flex">
                <li className="text-3xl">
                    <a href="https://www.linkedin.com/in/toka-molupe-154855365/">
                        <LiaLinkedinIn className="text-4xl text-white hover:text-lime-500 hover:text-5xl" />
                    </a>
                </li>
                <li className="text-3xl">
                    <a href="https://www.instagram.com/user1594354901/?hl=en">
                        <LiaInstagram className="text-4xl text-white hover:text-lime-500 hover:text-5xl" />
                    </a>
                </li>
                <li className="text-3xl">
                    <a href="https://github.com/TokaMolupe">
                        <LiaGithub className="text-4xl text-white hover:text-lime-500 hover:text-5xl" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Socials;