import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';

const Payment = () => {

    const enroll = async () => {
  
        
        try {
          await axios.post("http://localhost:5000/enroll", {
           
         });
         
       } catch (error) {
         console.log("error while post api2", error);
       }
    
       
      };
    
  return (
    <>
      <Link class="primary-btn membership-btn" onClick={enroll}>Payment</Link>
    </>
  );
}

export default Payment;
