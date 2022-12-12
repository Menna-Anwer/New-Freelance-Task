import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Data2 from '../Data/Data2';

const Tabe2 = () => {
  return (
    <div>
          <Tabs
        defaultActiveKey="Data"
        id="uncontrolled-tab-example"
        className="mb-3">
        <Tab eventKey="Data" title="Data">
            <Data2/>
        </Tab>
        <Tab eventKey="description" title="Description">
          
        </Tab>
      </Tabs>
    </div>
  )
}

export default Tabe2