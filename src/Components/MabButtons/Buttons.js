import React from "react";
import "./buttons.css";
const Buttons = () => {
  return (
    <div className=" container d-flex btn-container">
      <div>
        <div className="d-flex justify-content-center align-items-center">
          <span className="level0"></span>
          <label>Level 0</label>
        </div>
        <input type="text" className="inpt"/>
      </div>
      <div>
        <div className="d-flex justify-content-center align-items-center">
          <span className="level1"></span>
          <label>Level 1</label>
        </div>
        <input type="text" className="inpt"/>
      </div>
      <div>
        <div className="d-flex justify-content-center align-items-center">
          <span className="level2"></span>
          <label>Level 2</label>
        </div>
        <input type="text" className="inpt"/>
      </div>
    </div>
  );
};

export default Buttons;
