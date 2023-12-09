import React from "react";
import Navbar from "./components/Navbar";
import Tag from "./components/Tag";
// Icons
import { FaReddit, FaLinkedin, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function Blog() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="w-full p-4 lg:w-7/12 mx-auto">
                <h3 className="text-4xl font-ibm font-bold mb-2 text-white">
                    React Fragment, what even it is?
                </h3>
                <p className="mb-3 text-gray-400 font-ibm text-lg">
                    Tues 02 December 2023
                </p>
                <div className="flex items-center gap-2 mb-4 mt-2 text-white">
                    <Tag />
                    <Tag />
                </div>
                <ul className="flex gap-3 items-center mt-5 mb-8">
                    <li>
                        <FaLinkedin size={28} />
                    </li>

                    <li>
                        <FaFacebook size={28} />
                    </li>
                    <li>
                        <FaReddit size={28} />
                    </li>
                    <li>
                        <FaWhatsapp size={28} />
                    </li>
                </ul>
                <p
                    className="text-lg font-ibm text-gray-200"
                    style={{ lineHeight: "33px", wordSpacing: "2px" }}
                >
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                    reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                    mollit ex esse exercitation amet. Nisi anim cupidatat
                    excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
                    est aliquip amet voluptate voluptate dolor minim nulla est
                    proident. Nostrud officia pariatur ut officia. Sit irure
                    elit esse ea nulla sunt ex occaecat reprehenderit commodo
                    officia dolor Lorem duis laboris cupidatat officia
                    voluptate. Culpa proident adipisicing id nulla nisi laboris
                    ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit
                    commodo ex non excepteur duis sunt velit enim. Voluptate
                    laboris sint cupidatat ullamco ut ea consectetur et est
                    culpa et culpa duis.
                </p>
            </div>
        </React.Fragment>
    );
}
