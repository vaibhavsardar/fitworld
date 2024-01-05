import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Dashboard = () => {

    const [reco, setRecord] = useState([]);

    useEffect(() => {
        async function getRecords() {
          const response = await axios.get('http://localhost:5000/getuser',{
           
          }).then((resp) => {
                 console.log("dddd",resp.data);
                 setRecord(resp.data);
                //  alert("da=");
                
          });
          // if (!response.ok) {
          //   const message = `An error occurred: ${response.statusText}`;
          //   window.alert(message);
          //   return;
          // }
    
          // const records = await response.json();
          // setRecord(records);
          // console.log("recccc:",records);
        }
    
        getRecords();
        return;
      },[]);

  return (
    <>

    <h1>{JSON.stringify(reco)}</h1>

    {
        // reco.map((data, index) => {

        //     return(<><h1>{data.email}</h1></>)
        // })
    }
     
    </>
  );
}

export default Dashboard;
