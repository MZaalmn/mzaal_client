import React, { useState, useEffect } from "react";
import Axios from 'axios';

const Seeing_Zaal_Info = () => {
  const [foodList, setFoodList] = useState([]); // Store the fetched job data
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for image navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? foodList[0].images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === foodList[0].images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  // Fetching job data based on job ID
  useEffect(() => {
    const jobId = localStorage.getItem('Songoson_Ajliin_ID');
    if (jobId) {
      Axios.get(`http://localhost:8000/get_job/${jobId}`)
        .then((response) => {
          setFoodList(response.data); // Update foodList state with the fetched data
        })
        .catch((error) => {
          console.error("Алдаа гарлаа:", error);
        });
    } else {
      console.log("Ажлийн мэдээллийг олж чадсангүй, эсвэл алдаа гарлаа");
    }
  }, []);

  return (
    <div>
      {foodList.map((val, key) => (
        <div key={key}>
          <div className='section_2'>
            <h2>₮{val.une}</h2>
            <strong>Дугаар: {val.description}</strong>
            <strong>{val.job_email}</strong>
          </div>

          {/* Image slider positioned at the top-left corner */}
          <div className="relative w-[500px] h-[333px] mt-4 ml-4">
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-2xl p-2 cursor-pointer"
            >
              &lt;
            </button>
            {val.images && val.images.length > 0 && (
              <img
                src={val.images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
            )}
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-2xl p-2 cursor-pointer"
            >
              &gt;
            </button>
          </div>

          {/* Thumbnail images */}
          <div className="flex justify-start mt-2 ml-4">
            {val.images && val.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-[100px] h-[66px] mr-2 cursor-pointer ${index === currentIndex ? 'opacity-100 border-2 border-blue-500' : 'opacity-70'}`}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Seeing_Zaal_Info;
