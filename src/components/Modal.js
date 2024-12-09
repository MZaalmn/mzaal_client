import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null; // Don't render the modal if it's not open

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            {/* Modal Content */}
            <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                {/* Modal Header */}
                <div className="flex justify-between items-center border-b pb-2">
                    <h2 className="text-lg font-bold">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 transition"
                    >
                        ✖
                    </button>
                </div>

                {/* Modal Body */}
                <div className="mt-4">{children}</div>

                {/* Modal Footer */}
                <div className="flex justify-end mt-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                    >
                        Сонгох
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
