import axios from "axios";
import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const AdminContent = () => {
  const [muscle, setMuscle] = useState();
  const [title, setTitle] = useState();
  const [url, setUrl] = useState();
  const [reco, setRecord] = useState([]);

  const [playtitle,setPlaytitle] = useState();
  const [playurl,setPlayurl] = useState();
  const [show, setShow] = useState(false);
  const [showVideomodal, setVideomodalShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleVideomodalClose = () => setVideomodalShow(false);
  const handleVideomodalShow = () => setVideomodalShow(true);

  // const [myobj, setMyobj] = useState();

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

  useEffect(() => {
    getRecords();
    return;
  }, []);

  const handleChange = (event) => {
    // setData({...data, [event.target.name]: event.target.value});
    // setMyobj({[muscle] : [data]});
    if (event.target.name == "title") {
      setTitle(event.target.value);
    } else {
      setUrl(event.target.value);
    }
  };

  const handleChange2 = (event) => {
    // setMuscle({[event.target.value]: [data]});
    setMuscle(event.target.value);
    // setMyobj({[event.target.value] : [data]});
    // const tem = event.target.value;
  };

  // var myobj = { [muscle] :data};
  // var myobj = { [muscle]:{"mname":muscle ,"video":[data]}};
  var myobj = {
    mname: muscle,
    title: title,
    url: "https://www.youtube.com/embed/" + url,
  };

  // const { mna,video} = ;
  console.log("data", myobj);

  const submit = async () => {
    try {
      await axios.post("http://localhost:5000/addvideo", myobj);
    } catch (error) {
      console.log("error while post api", error);
    }
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add video content
      </Button>

      <Accordion>
        {reco.map((data, index) => {
          return (
            <>
              <Accordion.Item eventKey={index}>
                <Accordion.Header>{data.mname}</Accordion.Header>
                <Accordion.Body>
                  {data.video.map((vid, vidindex) => {
                    return (
                      <>
                        <div class="card" style={{ width: "100%" }}>
                          <div class="row no-gutters">
                            <div class="col-sm-5">
                              <iframe
                                width="250"
                                height="160"
                                src={vid.url}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                              ></iframe>
                            </div>
                            <div class="col-sm-7">
                              <div class="card-body">
                                <h5 class="card-title">{vid.title}</h5>
                                <p class="card-text">{/* Url :{vid.url} */}</p>
                                <a
                                  onClick={()=>{handleVideomodalShow(); setPlaytitle(vid.title); setPlayurl(vid.url);}}
                                  class="btn btn-primary"
                                >
                                  Watch Video
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <h3>Title :{vid.title}</h3>
                        <p>Url :{vid.url}</p> */}

                        <hr />
                      </>
                    );
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
          <Modal.Title>Add video</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form action="#">
            <label for="lang">Muscle Name</label>
            <select name="muscle" id="lang" onChange={handleChange2}>
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

            <div className="dflex">
              {/* <h3>{muscle}</h3> */}
              {/* <p> {JSON.stringify(myobj, null, 2)}</p> */}
              <label>Title:</label>
              <input type="text" name="title" onChange={handleChange} />

              <label>Video Url:</label>
              <input type="text" name="url" onChange={handleChange} />
            </div>
          </form>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="primary" onClick={submit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal style={{width:"100%"}}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showVideomodal}
        onHide={handleVideomodalClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>"{playtitle}"</Modal.Title>
        </Modal.Header>

        <Modal.Body >
          <iframe
            width="100%"
            height="450"
            src={playurl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>

      {/* <div className="accordion">
        {reco.map((data, index) => {
          return (
            <> 
              <div>
                <input
                  type="radio"
                  name="example_accordion"
                  id={`section${index}`}
                  className="accordion__input"
                />
              
                <div>
                  <label for={`section${index}`} className="accordion__label">
                    {data.mname}
                    <a className="myopenmodal" href="#demo-modal">
                      Add
                    </a>
                  </label>
                </div>

                <div className="accordion__content">
                  {data.video.map((vid, vidindex) => {
                    return (
                      <>
                        <h3>Title :{vid.title}</h3>
                        <p>Url :{vid.title}</p>
                        <hr />
                      </>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div> */}

      {/* <div id="demo-modal" class="mymodal">
        <div class="mymodal__content">
          <form action="#">
            <label for="lang">Muscle Name</label>
            <select name="muscle" id="lang" onChange={handleChange2}>
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

            <div className="dflex">
              {/* <h3>{muscle}</h3> */}
      {/* <p> {JSON.stringify(myobj, null, 2)}</p>
              <label>Title:</label>
              <input type="text" name="title" onChange={handleChange} />

              <label>Video Url:</label>
              <input type="text" name="url" onChange={handleChange} />
            </div>

            <input type="submit" value="Submit" onClick={submit} />
          </form>

          <a href="#" class="mymodal__close">
            &times;
          </a>
        </div> */}
      {/* </div> */}
    </>
  );
};

export default AdminContent;
