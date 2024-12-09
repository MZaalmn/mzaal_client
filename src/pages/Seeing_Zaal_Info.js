import React, { useState, useEffect } from "react";
import Axios from "axios";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "../components/Modal";


const Seeing_Zaal_Info = () => {
    const [foodList, setFoodList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null); // State for selected date




    
    const [grid, setGrid] = useState(Array(9).fill("no")); // Interactive grid for user input
    const [fetchedGrid, setFetchedGrid] = useState(Array(9).fill("no")); // Fetched grid from MongoDB


    useEffect(() => {
        const fetchGridData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/grid');
                setFetchedGrid(response.data.grid); // Update state with fetched grid data
            } catch (error) {
                console.error('Error fetching grid:', error);
            }
        };
        fetchGridData();
    }, []);

    const handleButtonClick = (index) => {
        const newGrid = [...grid];
        newGrid[index] = newGrid[index] === "yes" ? "no" : "yes"; // Toggle between "yes" and "no"
        setGrid(newGrid);
    };

    // Submit interactive grid to MongoDB
    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/grid', { grid });
            console.log(response.data.message);
        } catch (error) {
            console.error("Error saving grid:", error);
        }
    };

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBFJ0YbjuM4DrWqq88oHVIOk7W3D8Q4g_k",
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

    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
    };

    if (!isLoaded) return <div>Loading Google Maps...</div>;
    if (isLoading) return <div>Loading data...</div>;

    return (
        <div className="flex flex-col">
            <div className="flex justify-center my-10">
                {foodList.length > 0 ? (
                    foodList.map((val, key) => (
                        <div key={key} className="p-4 flex items-center">
                            <div className="flex-1">
                                <div className="section_2 mb-4">
                                <h1 className="text-5xl font-bold mb-5">{val.title}</h1>


                                    <p>Тайлбар: {val.description}</p>
                                    <p>{val.job_email}</p>
                                </div>

                                {/* Image Slider */}
                                {/* Image Slider */}
{/* Image Slider */}
{/* Image Slider */}
<div className="relative w-[530px] h-[363px] mt-4">
    {/* Price Display */}
    {val.une && (
        <div className="absolute top-2 right-2 border-2 border-orange-500 bg-orange-500 text-white px-3 py-1 rounded-lg shadow-md">
        <p>Цагийн {val.une}₮</p>
    </div>
    
    
    
    
    )}
    <button
        aria-label="Previous image"
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-2xl p-2 cursor-pointer"
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
        aria-label="Next image"
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-2xl p-2 cursor-pointer"
    >
        &gt;
    </button>
</div>




                                {/* Thumbnail Images */}
                                <div className="flex justify-start mt-2">
                                    {val.images &&
                                        val.images.map((image, index) => (
                                            <img
                                                key={index}
                                                src={image}
                                                alt={`Thumbnail ${index + 1}`}
                                                className={`w-[100px] h-[66px] mr-2 cursor-pointer ${
                                                    index === currentIndex
                                                        ? "opacity-100 border-2 border-blue-500"
                                                        : "opacity-70"
                                                }`}
                                                onClick={() =>
                                                    handleThumbnailClick(index)
                                                }
                                            />
                                        ))}
                                </div>
                            </div>

                            <div className="flex-1 w-[50vw]">
                                {/* Google Map */}
                                <div className="bg-white w-full p-10 rounded-md shadow-md mt-4">
                                    <h1 className="text-xl mb-10 font-bold">
                                        Заалны байршил
                                    </h1>
                                    <div>
                                        {val.latitude && val.longitude ? (
                                            <GoogleMap
                                                mapContainerStyle={{
                                                    width: "100%",
                                                    height: "300px",
                                                }}
                                                zoom={12}
                                                center={{
                                                    lat: val.latitude,
                                                    lng: val.longitude,
                                                }}
                                            >
                                                <Marker
                                                    position={{
                                                        lat: val.latitude,
                                                        lng: val.longitude,
                                                    }}
                                                />
                                            </GoogleMap>
                                        ) : (
                                            <div className="text-gray-500">
                                                Location not available
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No data available</div>
                )}
            </div>
            <div className="flex flex-col items-center justify-center p-10">
                <div className="bg-white flex items-center justify-between gap-10 w-[70%] p-10">
                    <div className="flex items-center gap-10">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="text-xl font-bold py-3 text-white px-5 bg-orange-400 hover:bg-orange-500 rounded-md"
                        >
                            Заалны цаг сонгох
                        </button>
                        <p>
                            Таны сонгосон цаг:{" "}
                            {selectedDate
                                ? selectedDate.toLocaleDateString()
                                : "Одоогоор сонгогдоогүй"}
                        </p>
                    </div>
                    <button className="text-xl font-bold py-3 text-white px-5 bg-green-500 hover:bg-green-600 rounded-md">
                        Захиалга хийх
                    </button>
                </div>
            </div>
            {/* Modal Component */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Цаг сонгох"
            >
                <div className="flex flex-col items-center">
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        inline
                        minDate={new Date()} // Restrict past dates
                    />
                </div>
            </Modal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px' }}>
                <button
                    onClick={() => handleButtonClick(0)}
                    style={{
                        padding: '20px',
                        backgroundColor: grid[0] === "yes" ? 'green' : 'red',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    {grid[0].toUpperCase()}
                </button>
                <button
                    onClick={() => handleButtonClick(1)}
                    style={{
                        padding: '20px',
                        backgroundColor: grid[1] === "yes" ? 'green' : 'red',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    {grid[1].toUpperCase()}
                </button>
                <button
                    onClick={() => handleButtonClick(2)}
                    style={{
                        padding: '20px',
                        backgroundColor: grid[2] === "yes" ? 'green' : 'red',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    {grid[2].toUpperCase()}
                </button>
                <button
                    onClick={() => handleButtonClick(3)}
                    style={{
                        padding: '20px',
                        backgroundColor: grid[3] === "yes" ? 'green' : 'red',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    {grid[3].toUpperCase()}
                </button>
                <button
                    onClick={() => handleButtonClick(4)}
                    style={{
                        padding: '20px',
                        backgroundColor: grid[4] === "yes" ? 'green' : 'red',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    {grid[4].toUpperCase()}
                </button>
                <button
                    onClick={() => handleButtonClick(5)}
                    style={{
                        padding: '20px',
                        backgroundColor: grid[5] === "yes" ? 'green' : 'red',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    {grid[5].toUpperCase()}
                </button>
                <button
                    onClick={() => handleButtonClick(6)}
                    style={{
                        padding: '20px',
                        backgroundColor: grid[6] === "yes" ? 'green' : 'red',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    {grid[6].toUpperCase()}
                </button>
                <button
                    onClick={() => handleButtonClick(7)}
                    style={{
                        padding: '20px',
                        backgroundColor: grid[7] === "yes" ? 'green' : 'red',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    {grid[7].toUpperCase()}
                </button>
                <button
                    onClick={() => handleButtonClick(8)}
                    style={{
                        padding: '20px',
                        backgroundColor: grid[8] === "yes" ? 'green' : 'red',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    {grid[8].toUpperCase()}
                </button>
            </div>
            <button onClick={handleSubmit} style={{ marginBottom: '20px', padding: '10px 20px', cursor: 'pointer' }}>
                Submit Grid
            </button>


            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                <button
                    disabled
                    style={{
                        padding: '20px',
                        backgroundColor: fetchedGrid[0] === "yes" ? 'pink' : 'gray',
                        color: 'white',
                        border: 'none',
                        cursor: 'not-allowed',
                    }}
                >
                    {fetchedGrid[0].toUpperCase()}
                </button>
                <button
                    disabled
                    style={{
                        padding: '20px',
                        backgroundColor: fetchedGrid[1] === "yes" ? 'pink' : 'gray',
                        color: 'white',
                        border: 'none',
                        cursor: 'not-allowed',
                    }}
                >
                    {fetchedGrid[1].toUpperCase()}
                </button>
                <button
                    disabled
                    style={{
                        padding: '20px',
                        backgroundColor: fetchedGrid[2] === "yes" ? 'pink' : 'gray',
                        color: 'white',
                        border: 'none',
                        cursor: 'not-allowed',
                    }}
                >
                    {fetchedGrid[2].toUpperCase()}
                </button>
                <button
                    disabled
                    style={{
                        padding: '20px',
                        backgroundColor: fetchedGrid[3] === "yes" ? 'pink' : 'gray',
                        color: 'white',
                        border: 'none',
                        cursor: 'not-allowed',
                    }}
                >
                    {fetchedGrid[3].toUpperCase()}
                </button>
                <button
                    disabled
                    style={{
                        padding: '20px',
                        backgroundColor: fetchedGrid[4] === "yes" ? 'pink' : 'gray',
                        color: 'white',
                        border: 'none',
                        cursor: 'not-allowed',
                    }}
                >
                    {fetchedGrid[4].toUpperCase()}
                </button>
                <button
                    disabled
                    style={{
                        padding: '20px',
                        backgroundColor: fetchedGrid[5] === "yes" ? 'pink' : 'gray',
                        color: 'white',
                        border: 'none',
                        cursor: 'not-allowed',
                    }}
                >
                    {fetchedGrid[5].toUpperCase()}
                </button>
                <button
                    disabled
                    style={{
                        padding: '20px',
                        backgroundColor: fetchedGrid[6] === "yes" ? 'pink' : 'gray',
                        color: 'white',
                        border: 'none',
                        cursor: 'not-allowed',
                    }}
                >
                    {fetchedGrid[6].toUpperCase()}
                </button>
                <button
                    disabled
                    style={{
                        padding: '20px',
                        backgroundColor: fetchedGrid[7] === "yes" ? 'pink' : 'gray',
                        color: 'white',
                        border: 'none',
                        cursor: 'not-allowed',
                    }}
                >
                    {fetchedGrid[7].toUpperCase()}
                </button>
                <button
                    disabled
                    style={{
                        padding: '20px',
                        backgroundColor: fetchedGrid[8] === "yes" ? 'pink' : 'gray',
                        color: 'white',
                        border: 'none',
                        cursor: 'not-allowed',
                    }}
                >
                    {fetchedGrid[8].toUpperCase()}
                </button>
            </div>
        </div>
    );
};

export default Seeing_Zaal_Info;
