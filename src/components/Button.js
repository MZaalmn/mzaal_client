import React from "react";

const ButtonComponent = ({
    onClick,
    children,
    className = "",
    variant = "primary",
    icon,
}) => {
    const baseStyles =
        "px-4 py-2 font-semibold rounded focus:outline-none focus:ring-2 focus:ring-opacity-50";
    const variants = {
        primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400",
        secondary:
            "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400",
        danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className} flex items-center`}
        >
            {/* Render the icon if provided */}
            {icon && <span className="mr-2 text-sm">{icon}</span>}
            {children}
        </button>
    );
};

export default ButtonComponent;
