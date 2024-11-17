import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HallsSectionHeader = () => {
    return (
        <div className="w-full flex justify-between">
            <div className="text-2xl font-semibold">Бүх заалууд</div>
            <div className="text-orange-500 font-semibold hover:text-orange-600 transition">
                <Link className="flex items-center gap-3">
                    Бүх заалыг харах
                    <FaArrowRight size={15} />
                </Link>
            </div>
        </div>
    );
};

export default HallsSectionHeader;
