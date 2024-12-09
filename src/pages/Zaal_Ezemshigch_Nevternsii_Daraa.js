import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import ButtonComponent from "../components/Button";
//C:\Users\JAMYANAMARJARGAL\Desktop\mzaal\mzaal_client\src\components\Button.js
import { GrEdit } from 'react-icons/gr';
import { GrTrash } from 'react-icons/gr';


import { GrCart, GrFavorite, GrSchedules } from "react-icons/gr";
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

function Zaal_Ezemshigch_Nevternsii_Daraa() {
  const navigate = useNavigate();
  const [medeelluud, setFoodList] = useState([]);
  const mapContainerStyle = {
    width: '100%',
    height: '200px',
  };



  const handleDeleteClick = (id) => {
    Axios.delete(`http://localhost:8000/delete_job/${id}`)
      .then(() => {
        setFoodList(medeelluud.filter(job => job._id !== id)); 
      })
      .catch(err => {
        console.error("Error deleting job:", err);
      });
  };
  

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail'); // Get email from localStorage
    if (!userEmail) {
        // Redirect to login page if email is not found
        navigate('/');
        return;
    }

    Axios.get("http://localhost:8000/read_user_jobs", {
        headers: {
            'user-email': userEmail // Send email in the headers
        }
    })
        .then((response) => {
            setFoodList(response.data); // Filtered jobs based on the email
        })
        .catch((error) => {
            console.error('Error fetching jobs:', error);
        });
}, [navigate]);

  

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBFJ0YbjuM4DrWqq88oHVIOk7W3D8Q4g_k',
  });

  if (!isLoaded) return <div>Loading...</div>;




  const handleEditClick = (id) => {
    localStorage.setItem('Songoson_Ajliin_ID', id);
    navigate('/seeing_zaal_info');
  };





  




 


  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-7">
            {medeelluud.map((job, key) => (
                <div
                    key={key}
                    className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition flex flex-col justify-between"
                >
                    <div>
                        <img
                            src={job.images[0]}
                            alt={job.title}
                            className="w-full h-[250px] object-cover rounded-t-lg mb-5"
                        />
                        <div className="flex justify-center items-center mt-2 space-x-2 border-2 border-black p-2 rounded-lg">
                            {job.zaalnii_bolomjuud.includes("Basketball") && (
                                <img
                                    src={basketball_icon}
                                    className="w-6 h-6"
                                    alt="Basketball"
                                />
                            )}
                            {job.zaalnii_bolomjuud.includes("Volleyball") && (
                                <img
                                    src={volleyball_icon}
                                    className="w-6 h-6"
                                    alt="Volleyball"
                                />
                            )}
                            {job.zaalnii_bolomjuud.includes("Football") && (
                                <img
                                    src={football_icon}
                                    className="w-6 h-6"
                                    alt="Football"
                                />
                            )}
                            {job.zaalnii_bolomjuud.includes("Baseball") && (
                                <img
                                    src={baseball_ball_icon}
                                    className="w-6 h-6"
                                    alt="Baseball"
                                />
                            )}
                            {job.zaalnii_bolomjuud.includes("Badminton") && (
                                <img
                                    src={badminton_ball_icon}
                                    className="w-6 h-6"
                                    alt="Badminton"
                                />
                            )}
                            {job.zaalnii_bolomjuud.includes("Billiard") && (
                                <img
                                    src={billiard_ball_icon}
                                    className="w-6 h-6"
                                    alt="Billiard"
                                />
                            )}
                            {job.zaalnii_bolomjuud.includes(
                                "shireenii_tennis"
                            ) && (
                                <img
                                    src={shireenii_tennis_icon}
                                    className="w-6 h-6"
                                    alt="Shireenii Tennis"
                                />
                            )}
                            {job.zaalnii_bolomjuud.includes("bujgiin_zaal") && (
                                <img
                                    src={bujgiin_zaal_icon}
                                    className="w-6 h-6"
                                    alt="Bujgiin Zaal"
                                />
                            )}
                            {job.zaalnii_bolomjuud.includes("wifi") && (
                                <img
                                    src={wifi_icon}
                                    className="w-6 h-6"
                                    alt="WiFi"
                                />
                            )}
                            {job.zaalnii_bolomjuud.includes("noiliin_oroo") && (
                                <img
                                    src={noiliin_oroo_icon}
                                    className="w-6 h-6"
                                    alt="Noiliin Oroo"
                                />
                            )}
                            {job.zaalnii_bolomjuud.includes("suudal") && (
                                <img
                                    src={suudal_icon}
                                    className="w-6 h-6"
                                    alt="Suudal"
                                />
                            )}
                            {job.zaalnii_bolomjuud.includes(
                                "mashinii_zogsool"
                            ) && (
                                <img
                                    src={mashinii_zogsool_icon}
                                    className="w-6 h-6"
                                    alt="Mashinii Zogsool"
                                />
                            )}
                            {job.zaalnii_bolomjuud.includes(
                                "huvtsas_solih_oroo"
                            ) && (
                                <img
                                    src={huvtsas_solih_oroo_icon}
                                    className="w-6 h-6"
                                    alt="Huvtsas Solih Oroo"
                                />
                            )}
                            {job.zaalnii_bolomjuud.includes(
                                "onoonii_sambar"
                            ) && (
                                <img
                                    src={onoonii_sambar_icon}
                                    className="w-6 h-6"
                                    alt="Onoonii Sambar"
                                />
                            )}
                            {job.zaalnii_bolomjuud.length === 0 && undefined}
                        </div>

                        <div className="flex mx-5 mt-4 flex-col items-start justify-start">
                            <h2 className="text-xl text-text-primary font-semibold mb-2">
                                {job.title}
                            </h2>
                            <div className="text-lg text-blue-500">
                                {job.une} Цаг
                            </div>
                            {/*hall.sale && (
                                <div className="text-lg text-red-500 font-bold">
                                    Sale: {job.une}
                                </div>
                            )*/}
                            <p className="text-text-secondary text-sm mt-3 mb-4 text-justify">
                                {job.description
                                    ? job.description > 100
                                        ? `${job.description.slice(0, 100)}...`
                                        : job.description
                                    : "No description available."}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center gap-3 p-3">
                    <ButtonComponent
  onClick={() => handleDeleteClick(job._id)}
  icon={<GrTrash size={20} />}
  className="py-3 px-3 bg-red-600 text-white hover:bg-red-500 transition rounded-full hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
/>

                        <ButtonComponent
                            onClick={() => handleEditClick(job._id)}
                            icon={<GrCart size={20} className="mr-2" />}
                            className="py-3 px-3 bg-red-500 hover:bg-red-600 text-white transition rounded-2xl hover:shadow-lg"
                        >
                            Харах
                        </ButtonComponent>
                        <ButtonComponent
  onClick={() => navigate('/zaal_update')}
  icon={<GrEdit size={20} />} // Edit pencil icon
  className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
 />




                    </div>
                </div>
            ))}
        </div>


  );
}

export default Zaal_Ezemshigch_Nevternsii_Daraa;
