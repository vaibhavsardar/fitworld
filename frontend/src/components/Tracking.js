import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Outlet } from "react-router";

import Table from "react-bootstrap/Table";
import axios from "axios";

const TrackingViewer = () => {
  return (
    <>
      <Tabs
        defaultActiveKey="daily"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="daily" title="DailyTracking Data">
          <ShowDailyTracking />
        </Tab>
        <Tab eventKey="weekly" title="WeeklyTracking Data">
          <ShowWeeklyTracking />
        </Tab>
      </Tabs>

      {/* <Outlet /> */}
    </>
  );
};

const ShowDailyTracking = () => {
  const [trackingdata, setTrackingdata] = useState([]);
  // const { Daily } = trackingdata;

  useEffect(() => {
    getProgram();
    // console.log(trackingdata);
  }, []);

  const getProgram = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getuserprogram");

      setTrackingdata(response.data.Tracking.Daily);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          {/* style={{background: "#f15d44",color:"white"}} */}
          <tr>
            <th>No</th>
            <th>Date</th>
            <th>Weight</th>
            <th>Carbohydrates</th>
            <th>Protein</th>
            <th>Fats</th>
          </tr>
        </thead>
        <tbody>
          {trackingdata.map((data, index) => {
            const datee = new Date(data.Date);
            return (
              <>
                <tr>
                  <td>{index + 1}</td>
                  <td>{datee.toDateString()}</td>
                  <td>{data.Weight}</td>
                  <td>{data.Carb}</td>
                  <td>{data.Protein}</td>
                  <td>{data.Fats}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

const ShowWeeklyTracking = () => {
  const [trackingdata, setTrackingdata] = useState([]);

  useEffect(() => {
    getProgram();
    // console.log(trackingdata);
  }, []);

  const getProgram = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getuserprogram");

      setTrackingdata(response.data.Tracking.Weekly);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          {/* style={{background: "#f15d44",color:"white"}} */}
          <tr>
            <th>No</th>
            <th>Date</th>
            <th>Weight</th>
            <th>Neck</th>
            <th>Chest</th>
            <th>Arm</th>
            <th>Waist</th>
            <th>Hips</th>
            <th>Thigh</th>
            <th>Calf</th>
          </tr>
        </thead>
        <tbody>
          {trackingdata.map((data, index) => {
            const datee = new Date(data.Date);
            return (
              <>
                <tr>
                  <td>{index + 1}</td>
                  <td>{datee.toDateString()}</td>
                  <td>{data.Weight}</td>
                  <td>{data.Neck}</td>
                  <td>{data.Chest}</td>
                  <td>{data.Arm}</td>
                  <td>{data.Waist}</td>
                  <td>{data.Hips}</td>
                  <td>{data.Thigh}</td>
                  <td>{data.Calf}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export { TrackingViewer, ShowDailyTracking, ShowWeeklyTracking };
