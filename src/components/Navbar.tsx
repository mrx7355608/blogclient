import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between flex-col gap-5 p-5 shadow-md z-20 lg:justify-around lg:flex-row lg:gap-0">
            <div className="flex items-end gap-2">
                <h3 className="text-3xl font-bold text-red-500 font-ibm">
                    Mr.X
                </h3>
                <h3 className="font-semibold text-gray-400 font-ibm">BLOG</h3>
            </div>
            <hr className="block border-gray-700 lg:hidden w-full max-w-md" />
            <ul className="flex gap-6 items-center w-max">
                <li>
                    <FaInstagram size={19} />
                </li>
                <li>
                    <FaTwitter size={19} />
                </li>
                <li>
                    <FaGithub size={19} />
                </li>
                <li>
                    <MdEmail size={19} />
                </li>
            </ul>
        </div>
    );
}
