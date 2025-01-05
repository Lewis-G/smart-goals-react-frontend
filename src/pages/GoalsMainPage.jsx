import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
//import { useState } from "react";

function GoalsMainPage() {
  const isOpen = true;

  return (
    <>
      <div className="wrapper d-flex align-items-stretch ">
        <NavBar isOpen={isOpen} />
        <div id="content" className="p-3 p-md-3">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default GoalsMainPage;
