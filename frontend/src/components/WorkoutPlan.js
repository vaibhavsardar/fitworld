import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// https://www.africau.edu/images/default/sample.pdf



const WorkoutPlan = () => {
  

  return (
    <div>
      <h1>Customized Workout Plan</h1>
      <div className="grid-container">
        <div className="card">
          <h3 className="product-name">Workout HandBook</h3>

          <Link className="buy-btn" to={"/myaccount/workouthbk"}>
            View
          </Link>

        </div>
      </div>
    </div>
  );
};

export default WorkoutPlan;
