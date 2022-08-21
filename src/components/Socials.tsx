import React from "react";
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from "react-icons/fa";

interface SocialsProps {
    className?: string;
}

const Socials: React.FC<SocialsProps> = ({ className }) => {
    return (
        <div className={className}>
            <a href="">
                <FaTwitterSquare fill="#918E9B" size={25} />
            </a>
            <a href="">
                <FaFacebookSquare fill="#918E9B" size={25} />
            </a>
            <a href="">
                <FaInstagramSquare fill="#918E9B" size={25} />
            </a>
            <a href="">
                <FaGithubSquare fill="#918E9B" size={25} />
            </a>
        </div>
    );
};

export default Socials;
