import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Data from '../Data/Data';

const Tab1 = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="Data"
        id="uncontrolled-tab-example"
        className="mb-3">
        <Tab eventKey="Data" title="Data">
            <Data/>
        </Tab>
        <Tab eventKey="description" title="Description">
          
        </Tab>
      </Tabs>
    </div>
  )
}

export default Tab1
