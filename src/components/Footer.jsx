import { IoLocationOutline } from "react-icons/io5";

function Footer() {
    return (
        <div className="hidden md:block bg-black p-8 text-white">
            <div>
                <p className="text-center mb-5">
                    @2025 Toka Molupe. All Rights Reserved
                </p>
            </div>
            <div className="flex justify-between items-center">
                <p>
                    Email: Stokemolupe@gmail.com
                </p>
                <p>
                    Phone: + (266) 6200 9373
                </p>
                <p className="flex mr-5">
                    <IoLocationOutline className="text-2xl hover:text-lime-500" /> Maseru, Lesotho
                </p>
            </div>
        </div>
    );
};

export default Footer;