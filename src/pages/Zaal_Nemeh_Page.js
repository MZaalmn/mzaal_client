// src/pages/AskLogin_or_Register.js
import React from "react";
import  { useState } from "react";
import axios from 'axios';

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










//Google maps container өндөр өргөний хэмжээ
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
//////////////









const Zaal_Nemeh_Page = () => {
    const [title, set_Title] = useState('');                     {/* 1.Шаардлага               */}
    const [description, set_description] = useState('');         {/* 2.Мэдээлэл                */}
    const [une, set_une] = useState('');                         {/* 3.Үнэ                     */}



    const [location, setLocation] = useState(null);
    const [name, setName] = useState('');
    const [searchName, setSearchName] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [map, setMap] = useState(null);


    const handleSubmit = (event) => {
        event.preventDefault();
    
        axios.post('http://localhost:8000/create_job', {title,description,une,latitude: location.lat,longitude: location.lng,
           
        }

        )
          .then(result => {
            console.log(result);
            if (result.data === "Already registered") {
              alert("Бүртгэлтай хаяг байна");
            } else {
    
            }
          })
          .catch(err => console.log(err));
    }


    




    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBFJ0YbjuM4DrWqq88oHVIOk7W3D8Q4g_k',
      });

    if (!isLoaded) return <div>Loading...</div>;



    const handleMapClick = (event) => {
        setLocation({
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        });
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
                            onChange={(event) => set_description(event.target.value)}             //2.Заалны дэлгэрэнгүй мэдээлэл
                        />
                    </div>






                    
                    <div className='input_container'>
                        <h2>Заалны нэг цагийн үнэ</h2>
                        <input
                            className='input_field'
                            placeholder='Тухайн заалны нэг цагын үнэ'
                            type="number"
                            required
                            onChange={(event) => set_une(event.target.value)}                      //3.Заалны нэг цагын үнэ
                        />
                    </div>
                    





                   
                    
                    <div className="checkbox_container">




                        <div className="checkbox_container_item  ">                              {/* Сагсан бөмбөг checkbox */}           
                            <img src={basketball_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-130 "
                            />
                        </div>











                        <div className="checkbox_container_item  ">                             {/* Volleyball checkbox */}  
                            <img src={volleyball_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>














                        <div className="checkbox_container_item  ">                             {/* Хөл бөмбөг checkbox */}  
                            <img src={football_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>








                        <div className="checkbox_container_item  ">                             {/* Baseball checkbox */}  
                            <img src={baseball_ball_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>









                        <div className="checkbox_container_item  ">                             {/* Badminton checkbox */}  
                            <img src={badminton_ball_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>







                        <div className="checkbox_container_item  ">                             {/* Billiard checkbox */}  
                            <img src={billiard_ball_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>








                        <div className="checkbox_container_item  ">                             {/* Ширээний теннис checkbox */}  
                            <img src={shireenii_tennis_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>







                        <div className="checkbox_container_item  ">                             {/* Бүжгийн заал checkbox */}  
                            <img src={bujgiin_zaal_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>







                        <div className="checkbox_container_item  ">                             {/* Үнэгүй заал checkbox */}  
                            <img src={wifi_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>








                        <div className="checkbox_container_item  ">                             {/* Нойлийн өрөө checkbox */}  
                            <img src={noiliin_oroo_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>






                        <div className="checkbox_container_item  ">                             {/* Суудал checkbox */}  
                            <img src={suudal_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>




                        <div className="checkbox_container_item  ">                             {/* Машиний зогсоол checkbox */}  
                            <img src={mashinii_zogsool_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>






                        <div className="checkbox_container_item  ">                             {/* Хувцас солих өрөө checkbox */}  
                            <img src={huvtsas_solih_oroo_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>



                        <div className="checkbox_container_item  ">                             {/* Онооний самбар checkbox */}  
                            <img src={onoonii_sambar_icon} height={50} width={50} alt=""/>
                            <input 
                                type="checkbox" 
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

export default Zaal_Nemeh_Page;
