// src/pages/AskLogin_or_Register.js
import React from "react";
import '../Css_files/Zaal_nemeh_page.css';

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

                    </div>


                   
                    
                    
                    




                    


                    

                </form>

            </div>
            
        </body>
    );
};

export default Zaal_Nemeh_Page;
