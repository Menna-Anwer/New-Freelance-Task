import React from "react";
import DataChart from "./DataChart";
import Remarks from './Remarks';

const Data = () => {
  return (
    <div className="row">
      <div  >
        <DataChart />
      </div>
      <div>
        <Remarks/>
      </div>
    </div>
  );
};

export default Data;
