import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import { useSelector } from "react-redux";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Viewer = (props) => {
  const [numPages, setNumPages] = useState(null);
  useEffect(()=>{
    if(props.view=="workoutview"){
      console.log("in viewr",numPages)
      // getPdffile();
         
    }
  });

  const getPdffile = async () => {

    axios.get("http://localhost:5000/getworkoutpdf", { responseType: 'arraybuffer' })
    .then(response => {
      const arrayBuffer = response.data;
       setNumPages(getNumPages(arrayBuffer));
      // localStorage.setItem("workouthb",JSON.stringify(arrayBuffer))
      console.log("in viewr",arrayBuffer)
    })
    .catch(error => {
      console.error(error);
    });
    
  };


  const getNumPages = async (arrayBuffer) => {
    const typedArray = new Uint8Array(arrayBuffer);
    const blob = new Blob([typedArray], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(blob);
    return fileURL;
  };


 


  return (
    <div>
      <Link to={'/myaccount/mycourse/workout'}>--Go Back</Link>
      <h1>im viewer</h1>
      <iframe
        style={{ display: "block", width: "100%", height: "90vh" }}
        title="PdfFrame"
        src={numPages}
        frameborder="0"
        type="application/pdf"
      ></iframe>
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/y881t8ilMyc" frameborder="0" allowfullscreen></iframe> */}
    </div>
  );
}

export default Viewer;
