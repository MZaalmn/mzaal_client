import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import {
    FaBasketballBall,
    FaFootballBall,
    FaFutbol,
    FaTableTennis,
} from "react-icons/fa";
import { MdOutlineSportsTennis } from "react-icons/md";
import { FaPeopleRobbery } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
    return (
        <>
            <nav className="bg-orange-500 p-4 text-sm">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            src="/MzaalLogo.svg"
                            alt="logo"
                            className="h-10 w-full mr-2"
                        />
                    </div>
                    <div className="flex w-full justify-center">
                        <div className="relative w-[50%]">
                            <input
                                type="text"
                                placeholder="Заалны нэр, Эзэмшигчийн нэр, Хаяг гэх мэт..."
                                className="w-full p-3 pl-5 pr-10 rounded-lg outline-none text-gray-700"
                            />
                            <button className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-700 text-xl">
                                <CiSearch />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center space-x-6 text-white text-xl">
                        <div className="relative">
                            <FaShoppingCart />
                            <span className="absolute top-[-10px] right-[-10px] border border-blue-600 bg-white text-blue-600 text-xs rounded-full px-1">
                                2
                            </span>
                        </div>
                        <FaHeart />
                        <FaUser />
                    </div>
                </div>
            </nav>
            <div className="bg-white py-3 shadow-md text-sm">
                <div className="container justify-center mx-auto flex items-center space-x-6 overflow-x-auto px-4">
                    {/* Filter Button */}
                    <button className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-semibold">
                        Шүүлт хийх
                    </button>

                    {/* Category Items */}
                    <div className="flex items-center space-x-6 text-gray-700">
                        <div className="flex items-center space-x-2">
                            <FaBasketballBall />
                            <span>Сагсан бөмбөгийн заал</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaFootballBall />
                            <span>Гар бөмбөгийн заал</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaFutbol />
                            <span>Хөл бөмбөгийн заал</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaTableTennis />
                            <span>Теннисний заал</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MdOutlineSportsTennis />

                            <span>Бадминтоны заал</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaPeopleRobbery />

                            <span>Бүжгийн заал</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}