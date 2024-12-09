import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import basketball_icon from '../icons/basketball_icon.png';
import volleyball_icon from '../icons/volleyball_icon.png';
import football_icon from '../icons/football_icon.png';
import baseball_ball_icon from '../icons/baseball_ball_icon.png';
import badminton_ball_icon from '../icons/badminton_ball_icon.png';
import billiard_ball_icon from '../icons/billiard_ball_icon.png';
import shireenii_tennis_icon from '../icons/shireenii_tennis_icon.png';
import bujgiin_zaal_icon from '../icons/bujgiin_zaal_icon.png';
import wifi_icon from '../icons/wifi_icon.png';
import noiliin_oroo_icon from '../icons/noiliin_oroo_icon.png';
import suudal_icon from '../icons/suudal_icon.png';
import mashinii_zogsool_icon from '../icons/mashinii_zogsool_icon.png';
import huvtsas_solih_oroo_icon from '../icons/huvtsas_solih_oroo_icon.png';
import onoonii_sambar_icon from '../icons/onoonii_sambar_icon.png';

function Welcome() {
  const navigate = useNavigate();
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




  const handleEditClick = (id) => {
    localStorage.setItem('Songoson_Ajliin_ID', id);
    navigate('/seeing_zaal_info');
  };




 


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



<div className="flex justify-center items-center mt-2 space-x-2 border border-gray-300 p-2 rounded-lg">

{job.zaalnii_bolomjuud.includes('Basketball') && (
    <img src={basketball_icon} className="w-6 h-6" alt="Basketball" />
  )}
  {job.zaalnii_bolomjuud.includes('Volleyball') && (
    <img src={volleyball_icon} className="w-6 h-6" alt="Volleyball" />
  )}
  {job.zaalnii_bolomjuud.includes('Football') && (
    <img src={football_icon} className="w-6 h-6" alt="Football" />
  )}
  {job.zaalnii_bolomjuud.includes('Baseball') && (
    <img src={baseball_ball_icon} className="w-6 h-6" alt="Baseball" />
  )}
  {job.zaalnii_bolomjuud.includes('Badminton') && (
    <img src={badminton_ball_icon} className="w-6 h-6" alt="Badminton" />
  )}
  {job.zaalnii_bolomjuud.includes('Billiard') && (
    <img src={billiard_ball_icon} className="w-6 h-6" alt="Billiard" />
  )}
  {job.zaalnii_bolomjuud.includes('shireenii_tennis') && (
    <img src={shireenii_tennis_icon} className="w-6 h-6" alt="Shireenii Tennis" />
  )}
  {job.zaalnii_bolomjuud.includes('bujgiin_zaal') && (
    <img src={bujgiin_zaal_icon} className="w-6 h-6" alt="Bujgiin Zaal" />
  )}
  {job.zaalnii_bolomjuud.includes('wifi') && (
    <img src={wifi_icon} className="w-6 h-6" alt="WiFi" />
  )}
  {job.zaalnii_bolomjuud.includes('noiliin_oroo') && (
    <img src={noiliin_oroo_icon} className="w-6 h-6" alt="Noiliin Oroo" />
  )}
  {job.zaalnii_bolomjuud.includes('suudal') && (
    <img src={suudal_icon} className="w-6 h-6" alt="Suudal" />
  )}
  {job.zaalnii_bolomjuud.includes('mashinii_zogsool') && (
    <img src={mashinii_zogsool_icon} className="w-6 h-6" alt="Mashinii Zogsool" />
  )}
  {job.zaalnii_bolomjuud.includes('huvtsas_solih_oroo') && (
    <img src={huvtsas_solih_oroo_icon} className="w-6 h-6" alt="Huvtsas Solih Oroo" />
  )}
  {job.zaalnii_bolomjuud.includes('onoonii_sambar') && (
    <img src={onoonii_sambar_icon} className="w-6 h-6" alt="Onoonii Sambar" />
  )}
  {job.zaalnii_bolomjuud.length === 0 && (
    undefined
  )}

  
  </div>


      <h4 className="text-lg font-medium mb-2">{job.title}</h4> 
      <p className="text-lg text-blue-500 font-medium mb-2">₮{job.une} / 1 цаг </p>
      <p className="text-gray-700 text-sm mb-4">{job.description}</p> 
      


      <button onClick={() => handleEditClick(job._id)}>move</button>

     


      


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
