import React, { useState,useEffect } from "react";
import Axios from 'axios';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";





const Seeing_Zaal_Info = () => {
  const [title, setTitle] = useState(""); // Job title
  const [description, setDescription] = useState(""); // Job description
  const [une, setUne] = useState(""); // Price
  const [location, setLocation] = useState(null); // Location for Google Maps
  const [images, setImages] = useState([]); // Images
  const [foodList, setFoodList] = useState([]);


  useEffect(() => {
    const jobId = localStorage.getItem('Songoson_Ajliin_ID');
    if (jobId) {
      Axios.get(`http://localhost:8000/get_job/${jobId}`)
        .then((response) => {
          setFoodList(response.data); 
        })
        .catch((error) => {
          console.error("Алдаа гарлаа:", error);
        });
    } else {
      console.log("Ажлийн мэдээллийг олж чадсангүй, эсвэл алдаа гарлаа");
    }
  }, []);

 



  return (
    <div>
      {foodList.map((val, key) => (


<div key={key}>

  {val.title}



  <div className='section_2'>   
      <h2>₮{val.une}</h2>
      <strong>Дугаар: {val.description}</strong>
      <strong>{val.job_email}</strong>
  </div>


</div>
))}
     
    </div>
  );
};

export default Seeing_Zaal_Info;
