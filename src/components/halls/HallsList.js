import React, { useEffect, useState } from "react";
import ButtonComponent from "../Button";
import { GrCart, GrFavorite, GrSchedules } from "react-icons/gr";
import { fetcher } from "../../utils/fetcher";
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
//

import basketball_icon from '../../icons/basketball_icon.png';
import volleyball_icon from '../../icons/volleyball_icon.png';
import football_icon from '../../icons/football_icon.png';
import baseball_ball_icon from '../../icons/baseball_ball_icon.png';
import badminton_ball_icon from '../../icons/badminton_ball_icon.png';
import billiard_ball_icon from '../../icons/billiard_ball_icon.png';
import shireenii_tennis_icon from '../../icons/shireenii_tennis_icon.png';
import bujgiin_zaal_icon from '../../icons/bujgiin_zaal_icon.png';
import wifi_icon from '../../icons/wifi_icon.png';
import noiliin_oroo_icon from '../../icons/noiliin_oroo_icon.png';
import suudal_icon from '../../icons/suudal_icon.png';
import mashinii_zogsool_icon from '../../icons/mashinii_zogsool_icon.png';
import huvtsas_solih_oroo_icon from '../../icons/huvtsas_solih_oroo_icon.png';
import onoonii_sambar_icon from '../../icons/onoonii_sambar_icon.png';







const HallsList = () => {
    const navigate = useNavigate();
    const [halls, setHalls] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [medeelluud, setFoodList] = useState([]);


    useEffect(() => {
        Axios.get("http://localhost:8000/read_jobs")
          .then((response) => {
            setFoodList(response.data);
          })
          .catch((error) => {
            console.error('Error fetching jobs:', error);
          });
      }, []);






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


    const handleEditClick = (id) => {
      localStorage.setItem('Songoson_Ajliin_ID', id);
      navigate('/seeing_zaal_info');
    };

    const filterUnsaledHalls = () => {
        return halls.filter((hall) => !hall.sale || hall.sale.trim() === "");
    };

    const filteredHalls = filterUnsaledHalls();

    if (loading) return <div>Loading halls...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-7">
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
                            icon={<GrFavorite size={20} />}
                            className="py-3 px-3 bg-transparent hover:bg-transparent text-orange hover:text-orange-400 transition hover:bg-orange-100 rounded-full hover:shadow-lg"
                        />
                        <ButtonComponent
                            onClick={() => handleEditClick(job._id)}
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
