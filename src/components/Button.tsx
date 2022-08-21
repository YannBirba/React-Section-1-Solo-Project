import React, {  ReactNode } from "react";

interface ButtonProps {
    icon?: ReactNode;
    onClick?: () => void;
    children?: ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    icon,
    onClick,
    children,
    className,
}) => {
    return (
        <button onClick={onClick ? onClick : undefined} className={className ? className : ""}>
            {icon ? icon : null}
            <span>{children ? children : null}</span>
        </button>
    );
};

export default Button;
