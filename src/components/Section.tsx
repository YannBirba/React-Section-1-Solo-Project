import React from "react";

interface SectionProps {
    className?: string;
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ className, title, children }) => {
    return (
        <div
            className={`text-xs dark:text-slate-300 ${className}`}
        >
            <h2 className="text-xl font-semibold dark:text-white text-gray-900">
                {title}
            </h2>
            {children}
        </div>
    );
};

export default Section;
