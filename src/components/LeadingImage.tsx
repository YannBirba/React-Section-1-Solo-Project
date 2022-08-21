import React from "react";

interface LeadingImageProps {
    src: string;
    alt: string;
    className?: string;
    title: string;
}

const LeadingImage: React.FC<LeadingImageProps> = ({
    src,
    alt,
    className,
    title,
}) => {
    return (
        <>
            <img src={src} alt={alt} title={title} className={className} />
        </>
    );
};

export default LeadingImage;
