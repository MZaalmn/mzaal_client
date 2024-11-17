import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({
    icon,
    title = "Options",
    items,
    onItemSelect,
    className,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close the dropdown when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () =>
            document.removeEventListener("mousedown", handleOutsideClick);
    }, []);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        onItemSelect(item);
        setIsOpen(false);
    };

    return (
        <div
            className={`relative inline-block text-left ${className}`}
            ref={dropdownRef}
        >
            {/* Dropdown Trigger */}
            <button
                onClick={handleToggle}
                className="flex items-center text-white focus:outline-none"
            >
                {icon && <span className="mr-2">{icon}</span>}
                {title}
            </button>

            {/* Dropdown Items */}
            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                        {items.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleItemClick(item)}
                                className=" flex items-center w-full px-4 py-3 text-sm text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            >
                                {item.icon && (
                                    <span className="mr-2">{item.icon}</span>
                                )}
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
