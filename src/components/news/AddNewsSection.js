import React from "react";
import ButtonComponent from "../Button";
import { FaArrowRight } from "react-icons/fa";

const AddNewsSection = () => {
    return (
        <div className="w-[80%] mx-auto bg-[#FFE7D6] h-[350px] flex border-t-8 border-b-8 border-red-500 border-dashed">
            <div className="leftSection flex-1 flex flex-col justify-evenly py-16 pl-14 pr-44 text-justify items-start">
                <h1 className="text-4xl font-bold">
                    Та өөрийн заалыг байршуулах уу?
                </h1>
                <p>
                    Та манай байгууллагаар дамжуулан өөрийн бизнесийг сайжруулах
                    боломжтой
                </p>
                <ButtonComponent
                    className="bg-red-500 py-3 px-5 transition rounded-2xl hover:shadow-lg text-white"
                    iconPosition="right"
                    icon={<FaArrowRight />}
                >
                    Байршуулах
                </ButtonComponent>
            </div>

            <div className="rightSection flex-1 flex flex-col items-start relative">
                <img
                    src="/newsAdd.png"
                    alt="img"
                    className="absolute w-[350px] bottom-3"
                />
            </div>
        </div>
    );
};

export default AddNewsSection;
