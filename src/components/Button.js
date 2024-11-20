import React from "react";

const ButtonComponent = ({
    onClick,
    children,
    className = "",

    icon,
}) => {
    const baseStyles = "px-4 py-2 font-semibold rounded";

    return (
        <button
            onClick={onClick}
            className={`${baseStyles}  ${className} flex justify-center items-center`}
        >
            {/* Render the icon if provided */}
            {icon && <span className="text-sm">{icon}</span>}
            {children}
        </button>
    );
};

export default ButtonComponent;
