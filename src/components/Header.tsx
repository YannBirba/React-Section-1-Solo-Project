import React from "react";
import Button from "./Button";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Header: React.FC = () => {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="font-bold text-2xl text-center">Laura Smith</h1>
            <p className="text-center text-sm dark:text-orange-200 text-orange-400">
                Frontend Developer
            </p>
            <p className="text-center hover:underline text-xs">
                <a href="https://laurasmith.website">laurasmith.website</a>
            </p>
            <div className="flex gap-4 justify-center items-center py-3">
                <Button
                    className="flex gap-2 items-center justify-center py-1 px-5 bg-white text-gray-800 rounded-md hover:bg-slate-300 drop-shadow border dark:drop-shadow-none dark:border-none transition-all"
                    icon={<FaEnvelope />}
                >
                    Email
                </Button>
                <Button
                    className="transition-all flex gap-2 items-center justify-center  py-1 px-5 rounded-md bg-sky-500 hover:bg-sky-700 text-white"
                    icon={<FaLinkedin />}
                >
                    LinkedIn
                </Button>
            </div>
        </div>
    );
};

export default Header;
