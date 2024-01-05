import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const DailyAddTracking = (props) => {
  const [dailydata, setDailydata] = useState();
  const [show, setShow] = useState(props.modalvalue);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    setDailydata({ ...dailydata, [event.target.name]: event.target.value })
  };

  const submit = async () => {
  
    try {
      await axios.post("http://localhost:5000/adddailytraking", {
        ...dailydata,
      });
    } catch (error) {
      console.log("error while post api", error);
    }
    handleClose();
   
  };
  console.log(dailydata);
  return <>
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Add Daily Tracking</h2>
        </div>
      </Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <div class="register-text">
        <form action="#" class="register-form">
         
          <div class="row">
            <div class="col-lg-3">
              <label value="neck"> Body Weight</label>
              <input type="text"  name="weight" onChange={handleChange} />
            </div>

            <div class="col-lg-3">
              <label value="neck">Carbohydrates</label>
              <input type="text"  name="carbohydrates" onChange={handleChange}/>
            </div>
            <div class="col-lg-3">
              <label value="neck">Protein</label>
              <input type="text"  name="protein"onChange={handleChange} />
            </div>
            <div class="col-lg-3">
              <label value="neck">Fats</label>
              <input type="text"  name="fats" onChange={handleChange}/>
            </div>
          </div>
          <div className="row">
            <div class="col-lg-12">
              <label>Body Images</label>
              <input type="file"  name="upload" />
            </div>
          </div>

          
        </form>
      </div>
    </Modal.Body>

    <Modal.Footer>
    <button type="submit" class="primary-btn" onClick={submit}>
            Submit
    </button>
    </Modal.Footer>
  </Modal>
  
</>;
};

const WeeklyAddTracking = (props) => {
  const [file, setFile] = useState();
  const [show, setShow] = useState(props.modalvalue);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [weeklydata, setWeeklydata] = useState();

  const handleChange = (event) => {
    setWeeklydata({ ...weeklydata, [event.target.name]: event.target.value })
  };

  const submit = async () => {
  
    try {
      await axios.post("http://localhost:5000/addweeklytraking", {
        ...weeklydata,
      });
    } catch (error) {
      console.log("error while post api", error);
    }
    handleClose();
   
  };
  console.log(weeklydata);
  useEffect(() => {
    
  });

  return (
    <>
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2>Add Weekly Tracking</h2>
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div class="register-text">
            <form action="#" class="register-form">
              <div class="row">
                <div class="col-lg-3">
                  <label value="neck">Neck</label>
                  <input type="text"  name="neck" onChange={handleChange} />
                </div>

                <div class="col-lg-3">
                  <label value="neck">Chest</label>
                  <input type="text"  name="chest" onChange={handleChange}/>
                </div>
                <div class="col-lg-3">
                  <label value="neck">Arm</label>
                  <input type="text"  name="arm" onChange={handleChange} />
                </div>
                <div class="col-lg-3">
                  <label value="neck">Waist</label>
                  <input type="text"  name="waist" onChange={handleChange}/>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3">
                  <label value="neck">Hips</label>
                  <input type="text"  name="hips"onChange={handleChange} />
                </div>

                <div class="col-lg-3">
                  <label value="neck">Thigh</label>
                  <input type="text"  name="thigh" onChange={handleChange} />
                </div>
                <div class="col-lg-3">
                  <label value="neck">Calf</label>
                  <input type="text"  name="calf" onChange={handleChange}/>
                </div>
                <div class="col-lg-3">
                  <label value="neck">Weight</label>
                  <input type="text" name="weight" onChange={handleChange}/>
                </div>
              </div>
              <div className="row">
                <div class="col-lg-12">
                  <label>Body Images</label>
                  <input type="file"  name="upload" />
                </div>
              </div>
              
            </form>
          </div>
        </Modal.Body>

        <Modal.Footer>
        <Button type="submit" class="primary-btn" onClick={submit}>
                Submit
              </Button>
        </Modal.Footer>
      </Modal>
      
    </>
  );
};

export { DailyAddTracking, WeeklyAddTracking };
