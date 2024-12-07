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

  {/* Grid container */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {medeelluud.map((job, key) => (
      <div
        key={key}
        className="bg-white shadow-md rounded-lg p-2 border border-gray-200"
      >
        <img 
          src={job.images[0]} 
          alt="Job Image" 
          className="w-full h-[200px] object-cover rounded-lg"
        />
        <h4 className="text-lg font-medium mb-1">{job.title}</h4>
        <p className="text-gray-700 text-sm mb-1">{job.description}</p>
        <p className="text-gray-800 font-medium text-sm mb-2">Price: {job.une}</p>

        {/* Map */}
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
      </div>
    ))}
  </div>
</div>

  );
}

export default Welcome;
