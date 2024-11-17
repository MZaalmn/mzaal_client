import React, { useEffect, useState } from "react";
import ButtonComponent from "../Button";
import { GrCart, GrFavorite, GrSchedules } from "react-icons/gr";
import { fetcher } from "../../utils/fetcher";

const HallsList = () => {
    const [halls, setHalls] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHalls = async () => {
            try {
                const data = await fetcher("halls");
                console.log("Fetched halls:", data); // Check data structure
                setHalls(data);
            } catch (err) {
                console.error("Error fetching halls:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchHalls();
    }, []);

    const filterUnsaledHalls = () => {
        return halls.filter((hall) => !hall.sale || hall.sale.trim() === "");
    };

    const filteredHalls = filterUnsaledHalls();

    if (loading) return <div>Loading halls...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-7">
            {filteredHalls.map((hall) => (
                <div
                    key={hall._id}
                    className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition flex flex-col justify-between"
                >
                    <div>
                        <img
                            src={hall.heroImage || "/img/default.jpg"}
                            alt={hall.title || "Hall"}
                            className="w-full h-[250px] object-cover rounded-t-lg mb-5"
                        />
                        <div className="border-2 rounded-md p-3 my-2">
                            {hall.category || "Category"}
                        </div>
                        <div className="flex mx-5 mt-4 flex-col items-start justify-start">
                            <h2 className="text-xl text-text-primary font-semibold mb-2">
                                {hall.title}
                            </h2>
                            <div className="text-lg text-blue-500">
                                {hall.price}₮ / {hall.perHour} Цаг
                            </div>
                            {hall.sale && (
                                <div className="text-lg text-red-500 font-bold">
                                    Sale: {hall.sale}
                                </div>
                            )}
                            <p className="text-text-secondary text-sm mt-3 mb-4 text-justify">
                                {hall.description
                                    ? hall.description.length > 100
                                        ? `${hall.description.slice(0, 100)}...`
                                        : hall.description
                                    : "No description available."}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center gap-3 p-3">
                        <ButtonComponent
                            icon={<GrFavorite size={20} />}
                            className="py-3 px-3 bg-transparent hover:bg-transparent text-orange hover:text-orange-400 transition hover:bg-orange-100 rounded-full hover:shadow-lg"
                        />
                        <ButtonComponent
                            icon={<GrCart size={20} className="mr-2" />}
                            className="py-3 px-3 bg-red-500 hover:bg-red-600 text-white transition rounded-2xl hover:shadow-lg"
                        >
                            Захиалах
                        </ButtonComponent>
                        <ButtonComponent
                            icon={<GrSchedules size={20} />}
                            className="py-3 px-3 bg-transparent hover:bg-transparent text-orange hover:text-orange-400 transition hover:bg-orange-100 rounded-full hover:shadow-lg"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HallsList;
