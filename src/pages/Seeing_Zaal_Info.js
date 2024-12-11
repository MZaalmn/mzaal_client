import React, { useState, useEffect } from "react";
import Axios from "axios";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const Seeing_Zaal_Info = () => {
    const [foodList, setFoodList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedTimes, setSelectedTimes] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBFJ0YbjuM4DrWqq88oHVIOk7W3D8Q4g_k", // Replace with your Google Maps API Key
    });

    useEffect(() => {
        const jobId = localStorage.getItem("Songoson_Ajliin_ID");
        if (jobId) {
            Axios.get(`http://localhost:8000/get_job/${jobId}`)
                .then((response) => {
                    setFoodList(response.data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    setIsLoading(false);
                });
        } else {
            console.log("No job ID found or error occurred.");
            setIsLoading(false);
        }
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            foodList[0]?.images.length
                ? prevIndex === 0
                    ? foodList[0].images.length - 1
                    : prevIndex - 1
                : 0
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            foodList[0]?.images.length
                ? prevIndex === foodList[0].images.length - 1
                    ? 0
                    : prevIndex + 1
                : 0
        );
    };

    const toggleSelection = (time) => {
        setSelectedTimes((prevSelectedTimes) =>
            prevSelectedTimes.includes(time)
                ? prevSelectedTimes.filter((selectedTime) => selectedTime !== time)
                : [...prevSelectedTimes, time]
        );
    };
    

    const handleSubmitSchedule = () => {
        if (selectedTimes.length === 0) {
            alert("No time slots selected");
            return;
        }
        const total = selectedTimes.length * (foodList[0]?.une || 0);
        setTotalPrice(total);
        setIsPopupOpen(true);
    };

    const handleConfirmPayment = async () => {
        const jobId = localStorage.getItem("Songoson_Ajliin_ID");
        if (!jobId) {
            alert("No job ID found");
            return;
        }

        const selectedTimeSlots = selectedTimes.map((time) => `${time} : taken`);

        try {
            await Axios.post("http://localhost:8000/api/update_schedule", {
                jobId,
                selectedTimeSlots,
            });

            const updatedSchedule = foodList[0].schedule.map((slot) => {
                const time = slot.split(" : ")[0];
                if (selectedTimes.includes(time)) {
                    return `${time} : taken`;
                }
                return slot;
            });

            setFoodList((prev) => {
                const updated = [...prev];
                updated[0].schedule = updatedSchedule;
                return updated;
            });

            alert("Payment successful and schedule updated!");
            setIsPopupOpen(false);
            setSelectedTimes([]);
        } catch (error) {
            console.error("Error updating schedule:", error);
        }
    };

    if (!isLoaded) return <div className="text-center py-10 text-lg">Loading Google Maps...</div>;
    if (isLoading) return <div className="text-center py-10 text-lg">Loading data...</div>;

    return (
        <div className="p-6 flex flex-col space-y-10">
            {foodList.length > 0 ? (
                foodList.map((val, key) => (
                    <div key={key} className="flex flex-col space-y-10 shadow-lg rounded-lg bg-white">
                        {/* Top Row: Image Slider */}
                        <div className="flex">
                            <div className="w-1/2 mr-6">
                                <div className="relative w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
                                    <button
                                        onClick={handlePrev}
                                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                                    >
                                        &lt;
                                    </button>
                                    {val.images && val.images.length > 0 ? (
                                        <img
                                            src={val.images[currentIndex]}
                                            alt={`Image ${currentIndex + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                                            No images available
                                        </div>
                                    )}
                                    <button
                                        onClick={handleNext}
                                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                                    >
                                        &gt;
                                    </button>
                                </div>
                            </div>

                            {/* Right: Hall Info */}
                            <div className="w-1/2 space-y-4">
                                <h1 className="text-3xl font-semibold">{val.title}</h1>
                                <p className="text-lg font-semibold text-green-500">
                                    Нэг цагийн үнэ: ₮{val.une?.toLocaleString()}
                                </p>
                                <p className="text-gray-700">{val.description}</p>
                            </div>
                        </div>

                        {/* Bottom Row */}
                        <div className="flex space-x-6">
                            {/* Map */}
                            <div className="w-1/2">
                                {val.latitude && val.longitude ? (
                                    <GoogleMap
                                        mapContainerStyle={{ width: "100%", height: "300px", borderRadius: "10px" }}
                                        zoom={12}
                                        center={{ lat: val.latitude, lng: val.longitude }}
                                    >
                                        <Marker position={{ lat: val.latitude, lng: val.longitude }} />
                                    </GoogleMap>
                                ) : (
                                    <div className="text-gray-500">Location not available</div>
                                )}
                            </div>

                            {/* Schedule Buttons */}
                            <div className="w-1/2">
                                <h3 className="text-xl font-bold mb-2">Цаг сонгох</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    {val.schedule.map((slot, index) => {
                                        const time = slot.split(" : ")[0];
                                        const isTaken = slot.includes("taken");
                                        const isSelected = selectedTimes.includes(time);

                                        return (
                                            <button
                                                key={index}
                                                onClick={() => {
                                                    if (!isTaken) toggleSelection(time);
                                                }}
                                                className={`p-2 rounded-lg ${
                                                    isTaken
                                                        ? "bg-gray-300 cursor-not-allowed"
                                                        : isSelected
                                                        ? "bg-blue-500 text-white"
                                                        : "bg-green-500 text-white"
                                                }`}
                                                disabled={isTaken}
                                            >
                                                {time}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmitSchedule}
                            className="w-1/3 mx-auto py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-500 transition"
                        >
                            Сонгох
                        </button>

                        {/* Payment Pop-Up */}
                        {isPopupOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto space-y-6">
                                    <h2 className="text-2xl font-bold text-center">Төлбөрийн мэдээлэл</h2>
                                    <table className="table-auto border-collapse w-full">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="border px-4 py-2">Заал</th>
                                                <th className="border px-4 py-2">Үнэ</th>
                                                <th className="border px-4 py-2">Цаг</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {selectedTimes.map((time, index) => (
                                                <tr key={index}>
                                                    <td className="border px-4 py-2">{val.title}</td>
                                                    <td className="border px-4 py-2">₮{val.une?.toLocaleString()}</td>
                                                    <td className="border px-4 py-2">{time}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <p className="text-xl font-bold text-center">
                                        Нийт төлөх дүн: ₮{totalPrice.toLocaleString()}
                                    </p>
                                    <div className="flex justify-center space-x-4">
                                        <button
                                            onClick={handleConfirmPayment}
                                            className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-500 transition"
                                        >
                                            Төлөх
                                        </button>
                                        <button
                                            onClick={() => setIsPopupOpen(false)}
                                            className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-500 transition"
                                        >
                                            Буцах
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <div className="text-center text-lg text-gray-500">No data available</div>
            )}
        </div>
    );
};

export default Seeing_Zaal_Info;
