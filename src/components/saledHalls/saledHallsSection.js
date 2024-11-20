import React from "react";
import SaledHallsSectionHeader from "./saledHallsSectionHeader";
import SaledHallsList from "./saledHallsList";

const SaledHallsSection = () => {
    return (
        <div className="w-[80%] mx-auto">
            <SaledHallsSectionHeader />
            <SaledHallsList />
        </div>
    );
};

export default SaledHallsSection;
