import React from "react";
import TaskPng from "../../assets/Taskpng";

const Header = () => {
  return (
    <div>
      <div className="d-flex flex-row justify-content-evenly align-items-center">
        <TaskPng />
        <h1 className="display-5">Task Tracker</h1>
      </div>
    </div>
  );
};

export default Header;
