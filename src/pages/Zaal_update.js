// src/pages/AskLogin_or_Register.js
import React from "react";
import  { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

import '../Css_files/Zaal_nemeh_page.css';
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

const Zaal_update = () => {


    const handleMapClick = (event) => {
        setLocation({
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        });
    };

    const mapContainerStyle = {
        width: '500px',
        height: '400px',
      };
    ///
    
    //Эхлэх цэг
    const center = {
        lat: 47.921230, 
        lng: 106.918556, 
      };



    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setZaalnii_Bolomjuud((prev) =>
          checked ? [...prev, value] : prev.filter((item) => item !== value)
        );
      };
    const [map, setMap] = useState(null);
    const [title, set_Title] = useState('');                     
    const [description, set_description] = useState('');         
    const [une, set_une] = useState('');                         
    const [images, setImages] = useState([]);
    const [zaalnii_bolomjuud, setZaalnii_Bolomjuud] = useState([]);
    const [user_email, setUser_email] = useState(''); 
    const [location, setLocation] = useState(null);
    
    const navigate = useNavigate();
    const jobId = localStorage.getItem('Songoson_Ajliin_ID'); // Get the jobId from localStorage

    useEffect(() => {
        // Optionally, you can load the existing job details using the jobId
        const user_role = localStorage.getItem('userRole');
        const email_from_application = localStorage.getItem('userEmail');
        if (user_role === 'owner') {
            setUser_email(email_from_application);
        } else {
            navigate('/');
        }
    }, [navigate]);

    // Handle form submission to update job information
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("une", une);
        formData.append("latitude", location?.lat || 0);  // Ensure location is valid
        formData.append("longitude", location?.lng || 0);  // Ensure location is valid
        formData.append("email", user_email);

        // Append images (if any)
        Array.from(images).forEach((image) => {
            formData.append("images", image);
        });

        // Append checked features (zaalnii_bolomjuud)
        zaalnii_bolomjuud.forEach((feature) => {
            formData.append("zaalnii_bolomjuud", feature);
        });

        try {
            // Sending the PUT request to update the job info based on jobId from localStorage
            await axios.put(`http://localhost:8000/update_job/${jobId}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            alert("Мэдээлэл өөрчлөгдлөө");
        } catch (err) {
            console.error("Error updating job:", err);
            alert("Failed to update the job");
        }
    };

    // Handle image file input change
    const handleImageChange = (e) => {
        setImages(e.target.files);
    };

    return (
        <body className="body">
            <div className="main_container">







                <form className="small_container " onSubmit={handleSubmit}>
                    <h1 className="text-4xl font-bold">Заал нэмэх</h1>

                    <div className='input_container'>
                        <h2>Заалны нэр</h2>
                        <input
                            className='input_field'
                            placeholder='Та өөрийн заалны нэрийг оруулна уу'
                            type="text"
                            value={title}
                            required
                            onChange={(event) => set_Title(event.target.value)}                 //1.Заалны нэр
                        />
                    </div>




                    <div className='input_container'>
                        <h2>Дэлгэрэнгүй мэдээлэл</h2>
                        <input
                            className='input_field'
                            placeholder='Заалны дэлгэрэнгүй мэдээлэл'
                            type="text"
                            required
                            value={description}
                            onChange={(event) => set_description(event.target.value)}             //2.Заалны дэлгэрэнгүй мэдээлэл
                        />
                    </div>






                    
                    <div className='input_container'>
                        <h2>Заалны нэг цагийн үнэ</h2>
                        <input
                            className='input_field'
                            placeholder='Тухайн заалны нэг цагын үнэ'
                            type="number"
                            value={une}
                           
                            onChange={(event) => set_une(event.target.value)}                      //3.Заалны нэг цагын үнэ
                        />
                    </div>

                    <div>
          <label>Upload 3 Images:</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
        </div>
        
                    





                   
                    
                    <div className="checkbox_container">




                        <div className="checkbox_container_item  ">                              {/* Сагсан бөмбөг checkbox */}           
                            <img src={basketball_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                value="Basketball"
                                onChange={handleCheckboxChange}
                                class="w-6 h-6 scale-130 "
                            />
                        </div>











                        <div className="checkbox_container_item  ">                             {/* Volleyball checkbox */}  
                            <img src={volleyball_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                value="Volleyball"
                                onChange={handleCheckboxChange}
                                class="w-6 h-6 scale-140 "
                            />
                        </div>














                        <div className="checkbox_container_item  ">                             {/* Хөл бөмбөг checkbox */}  
                            <img src={football_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                value="Football"
                                onChange={handleCheckboxChange}
                                class="w-6 h-6 scale-140 "
                            />
                        </div>








                        <div className="checkbox_container_item  ">                             {/* Baseball checkbox */}  
                            <img src={baseball_ball_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                value="Baseball"
                                onChange={handleCheckboxChange}
                                class="w-6 h-6 scale-140 "
                            />
                        </div>









                        <div className="checkbox_container_item  ">                             {/* Badminton checkbox */}  
                            <img src={badminton_ball_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                value="Badminton"
                                onChange={handleCheckboxChange}
                                class="w-6 h-6 scale-140 "
                            />
                        </div>







                        <div className="checkbox_container_item  ">                             {/* Billiard checkbox */}  
                            <img src={billiard_ball_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox"
                                value="Billiard"
                                onChange={handleCheckboxChange} 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>








                        <div className="checkbox_container_item  ">                             {/* Ширээний теннис checkbox */}  
                            <img src={shireenii_tennis_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                value="shireenii_tennis"
                                onChange={handleCheckboxChange} 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>







                        <div className="checkbox_container_item  ">                             {/* Бүжгийн заал checkbox */}  
                            <img src={bujgiin_zaal_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                value="bujgiin_zaal"
                                onChange={handleCheckboxChange} 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>







                        <div className="checkbox_container_item  ">                             {/* Үнэгүй заал checkbox */}  
                            <img src={wifi_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                value="wifi"
                                onChange={handleCheckboxChange}
                                class="w-6 h-6 scale-140 "
                            />
                        </div>








                        <div className="checkbox_container_item  ">                             {/* Нойлийн өрөө checkbox */}  
                            <img src={noiliin_oroo_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                value="noiliin_oroo"
                                onChange={handleCheckboxChange}
                                class="w-6 h-6 scale-140 "
                            />
                        </div>






                        <div className="checkbox_container_item  ">                             {/* Суудал checkbox */}  
                            <img src={suudal_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                value="suudal"
                                onChange={handleCheckboxChange}
                                class="w-6 h-6 scale-140 "
                            />
                        </div>




                        <div className="checkbox_container_item  ">                             {/* Машиний зогсоол checkbox */}  
                            <img src={mashinii_zogsool_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                value="mashinii_zogsool"
                                onChange={handleCheckboxChange}
                                class="w-6 h-6 scale-140 "
                            />
                        </div>






                        <div className="checkbox_container_item  ">                             {/* Хувцас солих өрөө checkbox */}  
                            <img src={huvtsas_solih_oroo_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                value="huvtsas_solih_oroo"
                                onChange={handleCheckboxChange}
                                class="w-6 h-6 scale-140 "
                            />
                        </div>



                        <div className="checkbox_container_item  ">                             {/* Онооний самбар checkbox */}  
                            <img src={onoonii_sambar_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                value="onoonii_sambar"
                                onChange={handleCheckboxChange}
                                class="w-6 h-6 scale-140 "
                            />
                        </div>

                    </div>
                    



                    <div className='input_container'>
                        <h2>Заалны байршил </h2>
                        <input
                            className='input_field'
                            placeholder='УБ хот, 12-р байр гэх мэт'
                            type="text"
                            
                        />
                    </div>




                    <div className='input_container'>
                        <h2>Заалны зураг сонгох</h2>
                        <input
                            className='input_field'
                            placeholder=''
                            type="file"
                            accept="image/*"
                            multiple
                            
                        />
                    </div>


                    <GoogleMap
                        mapContainerStyle={mapContainerStyle} //Border урт, өргөн
                        zoom={12}
                        center={center}
                        onClick={handleMapClick}
                        onLoad={(map) => setMap(map)}
                    >
                        {location && <Marker position={location} />}
                    </GoogleMap>






                    <div className='input_container_for_save_button'>
                        
                        <button class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ">
                            Хадгалах
                        </button>

                    </div>








                    


                    


                   
                    
                    
                    




                    


                    

                </form>

            </div>
            
        </body>
    );
};

export default Zaal_update;
