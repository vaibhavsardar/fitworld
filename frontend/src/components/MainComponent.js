import React from "react";
import MainNavbar from "./MainNavbar";
import { Outlet } from "react-router";

import { useState } from "react";

const MainComponent = () => {

  return (
    <>
      <Outlet />
    </>
  );
};

export default MainComponent;
