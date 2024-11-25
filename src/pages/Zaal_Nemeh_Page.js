// src/pages/AskLogin_or_Register.js
import React from "react";
import '../Css_files/Zaal_nemeh_page.css';
import basketball_icon from '../icons/basketball_icon.png';
import volleyball_icon from '../icons/volleyball_icon.png';
import football_icon from '../icons/football_icon.png';
import baseball_ball_icon from '../icons/baseball_ball_icon.png';

const Zaal_Nemeh_Page = () => {
    return (
        
        <body className="body">
            <div className="main_container">







                <form className="small_container">
                    <h1 className="text-4xl font-bold">Заал нэмэх</h1>

                    <div className='zaalnii_ner'>
                        <h2>Заалны нэр</h2>
                        <input
                            className='zaalnii_ner'
                            placeholder='Та өөрийн заалны нэрийг оруулна уу'
                            type="text"
                            required
                        />
                    </div>




                    <div className='hayg'>
                        <h2>Хаяг</h2>
                        <input
                            className='zaalnii_ner'
                            placeholder='Заалны дэлгэрэнгүй хаяг'
                            type="text"
                            required
                        />
                    </div>







                    <div className='hayg'>
                        <h2>Заалны нэг цагийн үнэ</h2>
                        <input
                            className='zaalnii_ner'
                            placeholder='Тухайн заалны нэг цагын үнэ'
                            type="text"
                            required
                        />
                    </div>





                    <div className='hayg'>
                        <h2>Хөнгөлөлтийн хувь</h2>
                        <input
                            className='zaalnii_ner'
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

                    </div>


                   
                    
                    
                    




                    


                    

                </form>

            </div>
            
        </body>
    );
};

export default Zaal_Nemeh_Page;
