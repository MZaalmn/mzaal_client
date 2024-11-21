import React from "react";

const ButtonComponent = ({
    onClick,
    children,
    className = "",
    icon,
    iconPosition = "left", // Default to 'left'
}) => {
    const baseStyles =
        "px-4 py-2 font-semibold rounded flex justify-center items-center";

    return (
        <button onClick={onClick} className={`${baseStyles} ${className}`}>
            {icon && iconPosition === "left" && (
                <span className="mr-2">{icon}</span>
            )}
            {children}
            {icon && iconPosition === "right" && (
                <span className="ml-2">{icon}</span>
            )}
        </button>
    );
};

export default ButtonComponent;
