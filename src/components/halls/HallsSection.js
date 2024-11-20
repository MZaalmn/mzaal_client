import React from "react";
import HallsSectionHeader from "./HallsSectionHeader";
import HallsList from "./HallsList";

const HallsSection = () => {
    return (
        <div className="w-[80%] mx-auto">
            <HallsSectionHeader />
            <HallsList />
        </div>
    );
};

export default HallsSection;
