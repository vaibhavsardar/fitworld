import React, { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { Document, Page } from "@react-pdf/renderer";
import { Document, Page, pdfjs } from 'react-pdf';
import { useSelector } from "react-redux";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const UploadWorkout = () => {

  const [selectedFile, setSelectedFile] = useState(null);
 
  const [numPages, setNumPages] = useState(null);


 const { user } = useSelector((state) => state.userDetails);

  useEffect(()=>{
    getPdffile();
    console.log("geting user detail=",user._id);
  });


  const getNumPages = (arrayBuffer) => {
    const typedArray = new Uint8Array(arrayBuffer);
    const blob = new Blob([typedArray], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(blob);
    return fileURL;
  };

  const getPdffile = async () => {

    
    axios.get("http://localhost:5000/getworkoutpdf", { responseType: 'arraybuffer' })
    .then(response => {
      const arrayBuffer = response.data;
      setNumPages(getNumPages(arrayBuffer));
      console.log("arrrb",arrayBuffer)
    })
    .catch(error => {
      console.error(error);
    });
    
  };


  useEffect(()=>{
    // getPdffile();
  },[]);

  
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    axios.post("http://localhost:5000/workoutpdf", formData,{params:{
      user: user._id,
    }})
      .then(response => {
        console.log(response.data); // Success message or file details
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  
 
  console.log("myfile=",numPages);

  return (
    <div>
      {/* <label>workout handbook</label>
      <input
        type="file"
        id="file-selector"
        
        onChange={onFileSelected}
        accept="application/pdf,application/vnd.ms-excel"
      />
      <br></br>
      <a href="#" className="buy-btn" onClick={test}>
        Upload
      </a>
       */}
      {/* <button onClick={test}>test</button> */}
      <h1>Hello world</h1>
      {/* <input
        type="file"
        onChange={onFileSelected}
      /> */}
       <input type="file" onChange={handleFileChange} />
       <button onClick={handleFileUpload}>Upload pdf</button>

       
      <iframe
        style={{ display: "block", width: "100%", height: "90vh" }}
        title="PdfFrame"
        src={numPages}
        frameborder="0"
        type="application/pdf"
      ></iframe>
    </div>
  );
};

const UploadDiet = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { user } = useSelector((state) => state.userDetails);
  const [numPages, setNumPages] = useState(null);
 
  useEffect(()=>{
    
    console.log("geting user detail=",user._id);
  });

  const getNumPages = (arrayBuffer) => {
    const typedArray = new Uint8Array(arrayBuffer);
    const blob = new Blob([typedArray], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(blob);
    return fileURL;
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    axios.post("http://localhost:5000/dietpdf", formData,{params:{
      user: user._id,
    }})
      .then(response => {
        console.log(response.data); // Success message or file details
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <div>
      <label>Diet handbook</label>
      
       <input type="file" onChange={handleFileChange} />
       <button onClick={handleFileUpload}>Upload pdf</button>

       
      <iframe
        style={{ display: "block", width: "100%", height: "90vh" }}
        title="PdfFrame"
        src={numPages}
        frameborder="0"
        type="application/pdf"
      ></iframe>
    
    </div>
  );
};

const UploadWorkoutVideo = (parms) => {
  const [muscle, setMuscle] = useState();
  const [reco, setRecord] = useState([]);
  const [viddata, setViddata] = useState([]);
  const [vidlist, setVidlist] = useState([]);
  const [day, setDay] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState();
  const [url, setUrl] = useState();

  const { user } = useSelector((state) => state.userDetails);
  useEffect(()=>{
    
    console.log("geting user detail=",user._id);
  });
  const Daydata = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const getRecords = async () => {
    const response = await fetch(`http://localhost:5000/getContent`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const records = await response.json();
    setRecord(records);
  };

  const getVideodata = async () => {
    const response = await fetch(`http://localhost:5000/getvideodata`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const records = await response.json();
    setViddata(records);
  };

  useEffect(() => {
    getRecords();
    getVideodata();
    console.log("viddaa=", viddata);
  }, []);

  const handleChange2 = (event) => {
    setMuscle(event.target.value);
  };

  // const addvideo =(event) => {
  //   setVidlist([...vidlist, event.target.value])
  // };

  var myobj = {user: user._id, mname: muscle, day: day, video: vidlist };
  // console.log("mo",myobj)

  const submit = async () => {
    try {
      return await axios.post("http://localhost:5000/addmuscle", myobj);
    } catch (error) {
      console.log("error while post api", error);
    }
  };

  // console.log("myarr=", day);

  return (
    <>
    
      <Accordion>
        {Daydata.map((d, index) => {
          return (
            <>
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>
                  <div className="dflex">
                    <h4>
                      {d} {`(`}
                    </h4>
                    {viddata.map((vid, vidindex) => {
                      return vid.muscle.map((m, minx) => {
                        if (m.parentday == d) {
                          return <h5>{m.mname},</h5>;
                        }
                      });

                      // if (vid.day == d) {
                      //   return vid.muscle.map((mus, vidindex) => {
                      //     return <h5>{mus.mname},</h5>;
                      //   });
                      // }
                    })}
                    <h4>{`)`}</h4>{" "}
                    <Button
                      variant="primary"
                      onClick={() => {
                        setDay(d);
                        handleShow();
                      }}
                    >
                      Add video content
                    </Button>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  {viddata.map((vid, vidindex) => {
                    if (vid.day == d) {
                      return vid.muscle.map((mus, vidindex) => {
                        return (
                          <>
                            <h2>{mus.mname}</h2>
                            {mus.video.map((viditem, indx) => {
                              return (
                                <>
                                  <p>Title:{viditem.title}</p>
                                  <p>Url:{viditem.url}</p>
                                  <hr />
                                </>
                              );
                            })}
                          </>
                        );
                      });
                    }
                  })}
                </Accordion.Body>
              </Accordion.Item>
            </>
          );
        })}
      </Accordion>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Add video for <h2 className="d-inline">{day}</h2>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form action="#">
            <label for="mus">Muscle Name</label>
            <select name="muscle" id="mus" onChange={handleChange2}>
              <option name="chest" value="Chest">
                Chest
              </option>
              <option name="Triceps" value="Triceps">
                Triceps
              </option>
              <option value="Shoulder">Shoulder</option>
              <option value="Back">Back</option>
              <option value="Biceps">Biceps</option>
              <option value="Legs">Legs</option>
              <option value="Core">Core</option>
              <option value="Forearms">Forearms</option>
            </select>

            {reco.map((data, index) => {
              if (data.mname == muscle) {
                return data.video.map((vid, index) => {
                  return (
                    <>
                      <h3>Title :{vid.title}</h3>
                      <p>Url :{vid.url}</p>
                      <input
                        type="checkbox"
                        name="title"
                        value="vaibhav"
                        onChange={() => {
                          setVidlist([...vidlist, vid]);
                        }}
                      />

                      <hr />
                    </>
                  );
                });
              }
            })}

            <input type="submit" value="Submit" onClick={submit} />
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={submit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <div className="accordion">
        {Daydata.map((d, i) => {
          return (
            <>
              <div>
                <input
                  type="radio"
                  name="example_accordion"
                  id={`section${i}`}
                  className="accordion__input"
                />

                <div>
                  <label for={`section${i}`} className="accordion__label">
                    <div className="dflex">
                      <h2>{d}</h2>
                      {`( `}
                      {viddata.map((vid, vidindex) => {
                        if (vid.day == d) {
                          return vid.muscle.map((mus, vidindex) => {
                            return <p>{mus.mname},</p>;
                          });
                        }
                      })}{" "}
                      {`)`}
                      <a
                        onClick={() => {
                          setDay(d);
                        }}
                        className="openmodal"
                        href="#demo-modal"
                      >
                        Add
                      </a>
                    </div>
                  </label>
                </div>

                <div className="accordion__content">
                  {viddata.map((vid, vidindex) => {
                    if (vid.day == d) {
                      return vid.muscle.map((mus, vidindex) => {
                        return (
                          <>
                            <h2>{mus.mname}</h2>
                            {mus.video.map((viditem, indx) => {
                              return (
                                <>
                                  <p>Title:{viditem.title}</p>
                                  <p>Url:{viditem.url}</p>
                                  <hr />
                                </>
                              );
                            })}
                          </>
                        );
                      });
                    }
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div id="demo-modal" class="modal">
        <div class="modal__content">
          <form action="#">
            <label for="mus">Muscle Name</label>
            <select name="muscle" id="mus" onChange={handleChange2}>
              <option name="chest" value="Chest">
                Chest
              </option>
              <option name="Triceps" value="Triceps">
                Triceps
              </option>
              <option value="Shoulder">Shoulder</option>
              <option value="Back">Back</option>
              <option value="Biceps">Biceps</option>
              <option value="Legs">Legs</option>
              <option value="Core">Core</option>
              <option value="Forearms">Forearms</option>
            </select>

             <label>Title:</label>
              <input type="text" name="title"  />

              <label>Video Url:</label>
              <input type="text" name="url"  /> 

            {reco.map((data, index) => {
              if (data.mname == muscle) {
                return data.video.map((vid, index) => {
                  return (
                    <>
                      <h3>Title :{vid.title}</h3>
                      <p>Url :{vid.url}</p>
                      <input
                        type="checkbox"
                        name="title"
                        value="vaibhav"
                        onChange={() => {
                          setVidlist([...vidlist, vid]);
                        }}
                      />

                      <hr />
                    </>
                  );
                });
              }
            })}

            <input type="submit" value="Submit" onClick={submit} />
          </form>

          <a href="#" class="modal__close">
            &times;
          </a>
        </div>
      </div> */}
    </>
  );
};

export { UploadWorkout, UploadDiet, UploadWorkoutVideo };
