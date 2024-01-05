import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const UserlistItem = (props) => {

  const openUser = async () =>{

  //  const response =  await axios.post("http://localhost:5000/admingetuser",{userId:props.userId});
  //  console.log("form userEvent=",response.data)
  }

  return (
    <div className='dflex'>
      <h2>{props.fname} {props.lname}</h2>
      <h3>{props.age}</h3>
      <h3>{props.gender}</h3>
      <h4>{props.duration}</h4>
      <h4>{props.userId}</h4>
      <Link to={`/admin/userdetail/${props.userId}`} onClick={openUser} className='btn-enroll'>View Detail</Link>
    </div>
  );
}

export default UserlistItem;
