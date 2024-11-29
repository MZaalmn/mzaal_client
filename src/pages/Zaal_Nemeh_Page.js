// src/pages/AskLogin_or_Register.js
import React from "react";
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



const Zaal_Nemeh_Page = () => {
    return (
        
        <body className="body">
            <div className="main_container">







                <form className="small_container">
                    <h1 className="text-4xl font-bold">Заал нэмэх</h1>

                    <div className='input_container'>
                        <h2>Заалны нэр</h2>
                        <input
                            className='input_field'
                            placeholder='Та өөрийн заалны нэрийг оруулна уу'
                            type="text"
                            required
                        />
                    </div>




                    <div className='input_container'>
                        <h2>Хаяг</h2>
                        <input
                            className='input_field'
                            placeholder='Заалны дэлгэрэнгүй хаяг'
                            type="text"
                            required
                        />
                    </div>







                    <div className='input_container'>
                        <h2>Заалны нэг цагийн үнэ</h2>
                        <input
                            className='input_field'
                            placeholder='Тухайн заалны нэг цагын үнэ'
                            type="text"
                            required
                        />
                    </div>





                    <div className='input_container'>
                        <h2>Хөнгөлөлтийн хувь</h2>
                        <input
                            className='input_field'
                            placeholder='10%, 25% гэх мэт'
                            type="text"
                            required
                        />
                    </div>

                    <div className="checkbox_container">




                        <div className="checkbox_container_item  ">                              {/* Сагсан бөмбөг checkbox */}           
                            <img src={basketball_icon} height={50} width={50} alt="My Image"/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-130 "
                            />
                        </div>











                        <div className="checkbox_container_item  ">                             {/* Volleyball checkbox */}  
                            <img src={volleyball_icon} height={50} width={50} alt="My Image"/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>














                        <div className="checkbox_container_item  ">                             {/* Хөл бөмбөг checkbox */}  
                            <img src={football_icon} height={50} width={50} alt="My Image"/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>








                        <div className="checkbox_container_item  ">                             {/* Baseball checkbox */}  
                            <img src={baseball_ball_icon} height={50} width={50} alt="My Image"/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>









                        <div className="checkbox_container_item  ">                             {/* Badminton checkbox */}  
                            <img src={badminton_ball_icon} height={50} width={50} alt="My Image"/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>







                        <div className="checkbox_container_item  ">                             {/* Billiard checkbox */}  
                            <img src={billiard_ball_icon} height={50} width={50} alt="My Image"/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>








                        <div className="checkbox_container_item  ">                             {/* Ширээний теннис checkbox */}  
                            <img src={shireenii_tennis_icon} height={50} width={50} alt="My Image"/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>







                        <div className="checkbox_container_item  ">                             {/* Бүжгийн заал checkbox */}  
                            <img src={bujgiin_zaal_icon} height={50} width={50} alt="My Image"/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>







                        <div className="checkbox_container_item  ">                             {/* Үнэгүй заал checkbox */}  
                            <img src={wifi_icon} height={50} width={50} alt="My Image"/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>








                        <div className="checkbox_container_item  ">                             {/* Нойлийн өрөө checkbox */}  
                            <img src={noiliin_oroo_icon} height={50} width={50} alt="My Image"/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>






                        <div className="checkbox_container_item  ">                             {/* Суудал checkbox */}  
                            <img src={suudal_icon} height={50} width={50} alt="My Image"/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>




                        <div className="checkbox_container_item  ">                             {/* Машиний зогсоол checkbox */}  
                            <img src={mashinii_zogsool_icon} height={50} width={50} alt="My Image"/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>






                        <div className="checkbox_container_item  ">                             {/* Хувцас солих өрөө checkbox */}  
                            <img src={huvtsas_solih_oroo_icon} height={50} width={50} alt="My Image"/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>



                        <div className="checkbox_container_item  ">                             {/* Онооний самбар checkbox */}  
                            <img src={onoonii_sambar_icon} height={50} width={50} alt="My Image"/>
                            <input 
                                type="checkbox" 
                                class="w-6 h-6 scale-140 "
                            />
                        </div>

                    </div>


                   
                    
                    
                    




                    


                    

                </form>

            </div>
            
        </body>
    );
};

export default Zaal_Nemeh_Page;
