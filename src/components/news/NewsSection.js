import React, { useEffect, useState } from "react";
import ButtonComponent from "../Button";
import { FaArrowRight, FaRegCalendarAlt } from "react-icons/fa";
import { fetcher } from "../../utils/fetcher"; // Assuming fetcher is in src/utils

const NewsSection = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 3;

    useEffect(() => {
        // Fetch news on component mount
        const getNews = async () => {
            try {
                const data = await fetcher("news");
                setNews(data); // Assuming the API response is an array of news
            } catch (err) {
                setError("Failed to fetch news.");
            } finally {
                setLoading(false);
            }
        };

        getNews();
    }, []);

    const formatDate = (date) => {
        const newDate = new Date(date);
        return newDate.toISOString().split("T")[0];
    };

    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const totalPages = Math.ceil(news.length / newsPerPage);

    return (
        <div className="bg-[#F2F4F5] py-10">
            <div className="w-[80%] mx-auto">
                <h1 className="font-bold text-3xl uppercase">Спорт мэдээ</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-7">
                    {currentNews.length > 0 ? (
                        currentNews.map((item) => (
                            <div
                                key={item.id}
                                className="p-4 h-[600px] bg-white border border-gray-200 rounded-md hover:shadow-lg transition flex flex-col justify-between"
                            >
                                <div>
                                    <img
                                        src={item.heroImage}
                                        alt={item.title}
                                        className="w-full h-[250px] object-cover rounded-md"
                                    />
                                    <div className="flex mx-3 mt-2 flex-col items-start">
                                        <div className="flex mt-3 gap-2 items-center text-text-secondary text-sm">
                                            <FaRegCalendarAlt />{" "}
                                            {formatDate(item.publishedAt)}
                                        </div>

                                        <h1 className="text-text-primary text-xl font-semibold mt-1 mb-2 text-justify">
                                            {item.title}
                                        </h1>
                                        <p className="text-text-secondary text-sm mt-3 mb-4 text-justify">
                                            {item.description
                                                ? item.description.length > 150
                                                    ? `${item.description.slice(0, 150)}...`
                                                    : item.description
                                                : "No description available."}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-start p-3">
                                    <ButtonComponent
                                        icon={<FaArrowRight size={20} />}
                                        iconPosition="right"
                                        className="py-3 px-5 bg-white border border-red-500 text-red-500 hover:bg-red-600 hover:text-white transition rounded-2xl hover:shadow-lg"
                                    >
                                        Унших
                                    </ButtonComponent>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="w-full text-center flex justify-center items-center h-96 bg-gray-100 rounded-md shadow-md text-gray-500">
                            <h2 className="text-xl font-semibold text-gray-700">
                                Одоогоор мэдээ байхгүй байна
                            </h2>
                        </div>
                    )}
                </div>

                <div className="flex justify-center mt-4">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-l-lg disabled:opacity-50"
                    >
                        Өмнөх
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => paginate(index + 1)}
                            className={`px-4 py-2 ${currentPage === index + 1 ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"} rounded-md mx-1`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-r-lg disabled:opacity-50"
                    >
                        Дараах
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsSection;
