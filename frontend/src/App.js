import "./App.css";

import React, { useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";

import Student from "./components/Student";
import MainNavbar from "./components/MainNavbar";

import Page404 from "./components/Page404";
import Training from "./components/Training";
import Supplement from "./components/Supplement";
import WorkoutPlan from "./components/WorkoutPlan";
import WorkoutVideo from "./components/WorkoutVideo";
import Viewer from "./components/Viewer";
import Admin from "./components/Admin/Admin";

import UserDetail from "./components/Admin/UserDetail";
import InformationForm from "./components/InformationForm";
import { PersonalForm, FitnessForm } from "./components/Form";

import Content from "./components/Admin/Content";
import {
  UploadDiet,
  UploadWorkout,
  UploadWorkoutVideo,
} from "./components/Admin/UploadContent";
import AdminContent from "./components/Admin/AdminContent";
import Tracking, { TrackingViewer, WeeklyTracking } from "./components/Tracking";
import { DailyAddTracking, WeeklyAddTracking } from "./components/TrackingCompo";
import { Login, SignUp } from "./components/Auth";
import PrivateComp from "./components/PrivateComp";
import Dashboard from "./components/Dashboard";
import store from "./store";
import { loadUser } from "./actions/authAction";
import { NewUserlist, OldUserlist } from "./components/Admin/Userlist";
import UserlistContainer from "./components/Admin/UserlistContainer";
import Program from "./components/Program";
import MainComponent from "./components/MainComponent";
import HomePage from "./components/HomePage";
import Enroll from "./components/Enroll";
import Payment from "./components/Payment";
import Help from "./components/Help";
import Contact from "./components/Contact";
// var fs = require('fs');

const App = () => {

 


// var pdfBinary = fs.readFileSync("test.pdf"); 
// // print it out so you can check that the file is loaded correctly
// console.log("Loading file");
// console.log(pdfBinary);


  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  let { id } = useParams();
  return (
    <>
      <Routes>
        <Route  path="/" element={<MainComponent />}>
          <Route  path="/" element={<HomePage /> }  />
          <Route path="contactus" element={<Contact />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="program" element={<Program />}></Route>
          <Route path="payment" element={<Payment />}></Route>
          <Route path="/" element={<PrivateComp/>}>
          
            <Route path="enroll" element={<Enroll/>} />
            <Route  path="/myaccount" element={<Student />}>
              <Route path="addweekly" element={<WeeklyAddTracking modalvalue={true} />} />
              <Route path="adddaily" element={<DailyAddTracking modalvalue={true} />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="workouthbk" element={<Viewer view="workoutview" />} />

              <Route path="form" element={<InformationForm />}>
                <Route
                  path="personal_detail"
                  element={<PersonalForm />}
                ></Route>
                <Route path="fitness_detail" element={<FitnessForm />}></Route>
              </Route>

              <Route path="mycourse" element={<Training />}>
                <Route path="workout" element={<WorkoutPlan />}></Route>
                <Route path="diet" element={<Supplement />}></Route>
                <Route path="workoutvideos" element={<WorkoutVideo />}></Route>
                <Route path="viewer" element={<Viewer />} />
              </Route>

              <Route path="tracking" element={<TrackingViewer/>}>
               
                
              </Route>

              <Route path="supplement" element={<Supplement />} />
              <Route path="help" element={<Help/>} />
            </Route>
          </Route>

          <Route path="/myac" element={<MainNavbar />} />
        </Route>

        {/* <Route path="/" element={<AdminPage />}> */}
        <Route path="/admin" element={<Admin />}>

          <Route path="userlist" element={<UserlistContainer />}>
            <Route path="newuserlist" element={<NewUserlist />} />
            <Route path="olduserlist" element={<OldUserlist />} />clientform
          </Route>
          <Route path="admincontent" element={<AdminContent />} />
        </Route>

        <Route path="/admin/userdetail/:id" element={<UserDetail />}>
          <Route path="clientform" element={<FitnessForm/>} />
          <Route path="content" element={<Content />}>
            <Route path="workout" element={<UploadWorkout />} />
            <Route path="diet" element={<UploadDiet />} />
            <Route path="workoutvideo" element={<UploadWorkoutVideo />} />
          </Route>
        </Route>
        {/* </Route> */}

        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
