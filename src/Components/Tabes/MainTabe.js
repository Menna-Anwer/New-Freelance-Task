import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Chart from "../Chart/Chart";
import Map from "../Map/Map";
import Tab1 from './Tab1';
import Tabe2 from "./Tabe2";


const MainTabe = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="map"
        id="uncontrolled-tab-example"
        className="mt-4 mb-3">
        <Tab eventKey="map" title="Map">
          <div className="row">
            <div className="col-lg-6 ">
              <Tabe2/>
            </div>
            <div className="col-lg-6">
               <Map/>
            </div>
          </div>
        </Tab>
        <Tab eventKey="chart" title="Chart">
           <div className="row">
            <div className="col-lg-6 ">
            <Tab1/>
            </div>
            <div className="col-lg-6">
               <Chart/>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default MainTabe;
