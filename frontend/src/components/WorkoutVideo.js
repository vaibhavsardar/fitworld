import React, { useEffect, useState } from "react";
import Test from "./Test";
import { Link, Outlet } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button"
import axios from "axios";

const WorkoutVideo = () => {
  const [viddata, setViddata] = useState([]);
  const Daydata = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [trackingdata, setTrackingdata] = useState([]);
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

  const getProgram = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getuserprogram");

      setTrackingdata(response.Content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProgram();
    console.log("wprog",trackingdata)
    return;
  }, []);

  return (
    <>

      <Accordion>
      {
          Daydata.map((d, index) => {
            return (
              <>
                <Accordion.Item eventKey={index}>
                  <Accordion.Header><div className="dflex">
                      <h4>{d} {`(`}</h4>
                      
                      {viddata.map((vid, vidindex) => {
                        if (vid.day == d) {
                          return vid.muscle.map((mus, vidindex) => {
                            return <h5>{mus.mname},</h5>;
                          });
                        }
                      })}
                      <h4>{`)`}</h4>
                      
                    </div></Accordion.Header>
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
          })

        }
      </Accordion>

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
      </div> */}
    </>
  );
};

export default WorkoutVideo;
