import React, { useEffect, useState } from 'react'
import UserlistItem from '../Item/UserlistItem';
import axios from 'axios';

const NewUserlist = () => {
    const [formData, setFormData] = useState([]);
    const [enrollData, setEnrollData] = useState([]);

  useEffect(() => {
    async function getFormData() {
      const response = await fetch(`http://localhost:5000/getuserformdata`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setFormData(records);
      // console.log("recccc:",records);
    }

    async function getAllEnroll() {
      const response = await fetch(`http://localhost:5000/getallenroll`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setEnrollData(records);
      // console.log("recccc:",records);
    }

    getFormData();
    getAllEnroll();
    return;
  });

  const addupdate = async ()=>{
    const response = await axios.put(`http://localhost:5000/update`,{duration:"1 week"});
  }
  const fun= async (enroll) => {
    const response =await axios.post(`http://localhost:5000/getintekfrom`,{user:enroll.user});
    console.log("form=",response.data);
  }
  return (
    <div>
      NewUserlist

      <button onClick={addupdate}>update</button>
      <div>
        {/* {
          enrollData.map((enroll,ind)=>{
       
            return(<UserlistItem userId={enroll.user}/>)
          })
        } */}

        {formData.map((form,indx)=>{
            // console.log("durs=",form.duration)
            if(form.isDone == false){
                
                return(<UserlistItem userId={form.user} duration={form.duration} fname={form.fname} lname={form.lname} age={form.age} gender={form.gender} goal={form.goal}/>);

            }

        })}
        
      </div>
    </div>
  )
}

const OldUserlist = () => {

    const [formData, setFormData] = useState([]);


  useEffect(() => {
    async function getFormData() {
      const response = await fetch(`http://localhost:5000/getuserformdata`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setFormData(records);
      // console.log("recccc:",records);
    }

    getFormData();
    return;
  });
    
    return (
      <div>
        OldUserlist
      </div>
    )
  }
  

export {NewUserlist, OldUserlist}
