import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

function Welcome() {
  const [medeelluud, setFoodList] = useState([]);
  const mapContainerStyle = {
    width: '100%',
    height: '200px',
  };

  useEffect(() => {
    Axios.get("http://localhost:8000/read_jobs")
      .then((response) => {
        setFoodList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching jobs:', error);
      });
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBFJ0YbjuM4DrWqq88oHVIOk7W3D8Q4g_k',
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-4">

  {/* Grid container with horizontal padding */}
  <div className="px-16 sm:px-20 lg:px-24 grid grid-cols-10 sm:grid-cols-10 lg:grid-cols-3 gap-10">
  {medeelluud.map((job, key) => (
    <div
      key={key}
      className="bg-white shadow-md rounded-lg p-4 border border-gray-200" // Updated padding
    >
      <img 
        src={job.images[0]} 
        alt="Job Image" 
        className="w-full h-[230px] object-cover rounded-lg mb-4" // Added bottom margin
      />
      <h4 className="text-lg font-medium mb-2">{job.title}</h4> 
      <p className="text-lg text-blue-500 font-medium mb-2">₮{job.une} / 1 цаг </p>
      <p className="text-gray-700 text-sm mb-4">{job.description}</p> 

      {/* Map 
      <div className="overflow-hidden rounded-lg">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '150px' }}
          zoom={12}
          center={{
            lat: job.latitude,
            lng: job.longitude,
          }}
        >
          <Marker position={{ lat: job.latitude, lng: job.longitude }} />
        </GoogleMap>
      </div>
      */}
    </div>
  ))}
</div>

</div>


  );
}

export default Welcome;
