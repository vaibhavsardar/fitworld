import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const PersonalForm = () => {
  return (
    <div>
      <h1>vvv</h1>
    </div>
  );
};

const FitnessForm = () => {
  const [data, setData] = useState("");
  const navegate = useNavigate();
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  console.log("mydata=", { ...data, user: localStorage.getItem("user") });

  const submit = async () => {
  
    try {
      await axios.post("http://localhost:5000/inteckform", {
        ...data,
        // user: localStorage.getItem("user"),
      });
    } catch (error) {
      console.log("error while post api", error);
    }
    navegate("/payment");

   
  };

  return (
    <>
      <section class="register-section spad">
        <div class="container">
          <div class="register-text">
            <div class="section-title">
              <h2>Intake form </h2>
              <p>Information filled in this form will be analyse for making customised fitness plan</p>
            </div>
            <form action="#" class="register-form">
              <div class="row">
                <div class="col-lg-3">
                  <label for="name">First Name</label>
                  <input type="text" id="name" name="fname" />
                </div>
                <div class="col-lg-3">
                  <label for="email">Last Name</label>
                  <input type="text" id="email" name="lname" />
                </div>
                <div class="col-lg-3">
                  <label for="last-name">Your email address</label>
                  <input type="text" id="last-name" name="email" />
                </div>
                <div class="col-lg-3">
                  <label for="mobile">Phone Number</label>
                  <input type="text" id="password" name="passsword" />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3">
                  <label for="gender"> Select you gender</label>
                  <select name="gender">
                    <option value="none" selected>
                      Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">other</option>
                  </select>
                </div>
                <div class="col-lg-3">
                  <label for="email">Age</label>
                  <input type="text" id="email" name="lname" />
                </div>
                <div class="col-lg-3">
                  <label for="last-name">Height</label>
                  <input type="text" id="last-name" name="email" />
                </div>
                <div class="col-lg-3">
                  <label for="mobile">Weight</label>
                  <input type="text" id="password" name="passsword" />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4">
                  <label for="worklevel">
                    {" "}
                    Whats the acivity level at your job?
                  </label>
                  <select name="worklevel">
                    <option value="none" selected>
                      activity level
                    </option>
                    <option value="none">none(seated only)</option>
                    <option value="Moderate">
                      Moderate(light activity such as walking )
                    </option>
                    <option value="High">High(heavy labor, very active)</option>
                  </select>
                </div>

                <div class="col-lg-4">
                  <label for="eatingtype"> Whats is your eating ?</label>
                  <select name="eatingtype">
                    <option value="none" selected>
                      select
                    </option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Non-vegetarian">Non vegetarian</option>
                    <option value="Vegan">Vegan</option>
                  </select>
                </div>
                <div class="col-lg-4">
                  <label for="goal">
                    What following goals does best fit in with your goals?
                  </label>
                  <select name="goal">
                    <option selected> select</option>
                    <option value="Health">Improve Health</option>
                    <option value="Endurance">Improve Endurance</option>
                    <option value="Strength">Increased Strength</option>
                    <option value="Muscle">Increased Muscle</option>
                    <option value="Fat Loss">Fat Loss</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <label>
                    If you have any diagnosed health problems list the
                    condition(s).
                  </label>
                  <input type="text" name="healthproblems" />
                </div>
                <div class="col-lg-12">
                  <label>If you have any injuries, please list them.</label>
                  <input type="text" name="injury" />
                </div>
                <div class="col-lg-12">
                  <label for="last-name">Your email address</label>
                  <input type="text" id="last-name" name="email" />
                </div>
                <div class="col-lg-12">
                  <label>
                    Please list the physical activities that you participate in
                    outside of the gym and outside of work.:
                  </label>
                  <input type="text" name="activityoutside" />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4">
                  <label for="workouttime">
                    At what times during the day would you prefer to train?
                  </label>
                  <select name="workouttime">
                    <option selected>select</option>
                    <option value="Morning">Morning </option>
                    <option value="Afternoon">Afternoon</option>
                  </select>
                </div>
                <div class="col-lg-8">
                  <label for="email">
                    How many days you can give to training a week to reach your
                    goal?
                  </label>
                  <input type="text" id="email" name="lname" />
                </div>
              </div>
              <h2>ALL THE INFORMATION I HAVE GIVEN IS CORRECT</h2>
              <p>
                All the information on this form is correct and to the best of
                my knowledge. I have sought and followed any necessary medical
                advice. I understand that all the information given will be kept
                confidential.
              </p>
              <h2>I AGREE TO THE ABOVE TERMS & CONDITIONS!</h2>
              <input type="radio" name="agree" value="yes" />
              Yes
              <input type="radio" name="agree" value="no" />
              No
              <div className="row " onClick={submit} style={{display:"flex",justifyContent:"flex-start"}}>
              <button type="submit" class="register-btn"  style={{width:"400px"}}>
                Submit
              </button>
              </div>
              
            </form>
          </div>
        </div>
      </section>

      <form>
        <h2>Personal Information</h2>
        <label>First Name</label>
        <input type="text" name="fname" onChange={handleChange} />
        <label>Last Name</label>
        <input type="text" name="lname" onChange={handleChange} />
        <label>Address</label>
        <input type="textarea" name="address" />
        <label>Phone Number</label>
        <input type="text" name="phonenumber" />
        <label>Email</label>
        <input type="text" name="email" />
        <h2>Fitness Information</h2>
        <label>Age</label>
        <input type="text" name="age" onChange={handleChange} />
        <label>Gender</label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="other"
          onChange={handleChange}
        />
        Other
        <label>Height</label>
        <input type="text" name="height" />
        <label>Weight</label>
        <input type="text" name="weight" />
        <h3>Whats the acivity level at your job?</h3>
        <input type="checkbox" name="worklevel" value="none" />
        <label>none(seated only)</label>
        <input type="checkbox" name="worklevel" value="Moderate" />
        <label>Moderate(light activity such as walking )</label>
        <input type="checkbox" name="worklevel" value="High" />
        <label>High(heavy labor, very active)</label>
        <label>
          Please list the physical activities that you participate in outside of
          the gym and outside of work.:
        </label>
        <input type="text" name="activityoutside" />
        <label>
          If you have any diagnosed health problems list the condition(s).
        </label>
        <input type="text" name="healthproblems" />
        <label>If you have any injuries, please list them.</label>
        <input type="text" name="injury" />
        <h3>Whats the acivity level at your job?</h3>
        <input type="checkbox" name="eatingtype" value="none" />
        <label>Vegetarian</label>
        <input type="checkbox" name="eatingtype" value="Moderate" />
        <label>Non vegetarian</label>
        <input type="checkbox" name="eatingtype" value="High" />
        <label>Vegan</label>
        <h3>What following goals does best fit in with your goals?</h3>
        <input type="checkbox" name="goal" value="Improve Health" />
        <label>Improve Health</label>
        <input
          type="checkbox"
          name="goal"
          value="Improve Enduranc"
          onChange={handleChange}
        />
        <label>Improve Endurance</label>
        <input
          type="checkbox"
          name="goal"
          value="Increased Strength"
          onChange={handleChange}
        />
        <label>Increased Strength</label>
        <input
          type="checkbox"
          name="goal"
          value="Increased Muscle Mass"
          onChange={handleChange}
        />
        <label>Increased Muscle Mass</label>
        <input
          type="checkbox"
          name="goal"
          value="Fat Loss"
          onChange={handleChange}
        />
        <label>Fat Loss</label>
        <h3>At what times during the day would you prefer to train?</h3>
        <input type="checkbox" name="eatingtype" value="none" />
        <label>Morning</label>
        <input type="checkbox" name="goal" value="Moderate" />
        <label>Afternoon</label>
        <input type="checkbox" name="goal" value="High" />
        <label>Evening</label>
        <label>
          How many days you can give to training a week to reach your goal?
        </label>
        <input type="text" name="tainningnoofday" />
        <h3>ALL THE INFORMATION I HAVE GIVEN IS CORRECT</h3>
        <p>
          All the information on this form is correct and to the best of my
          knowledge. I have sought and followed any necessary medical advice. I
          understand that all the information given will be kept confidential.
        </p>
        <h3>I AGREE TO THE ABOVE TERMS & CONDITIONS!</h3>
        <input type="radio" name="agree" value="yes" />
        Yes
        <input type="radio" name="agree" value="no" />
        No
        <button
          className="btn-enroll"
          type="submit"
          name="submit"
          onClick={submit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export { PersonalForm, FitnessForm };
