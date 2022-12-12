import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";

const BgTab = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="layers"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="layers" title="Background Layers">
          <div className="row align-items-center justify-content-between">
            <Form.Label htmlFor="data" className="col-3 text-start">
              1.Background
            </Form.Label>
            <Form.Select
              className="w-50 "
              id="data"
              aria-label="Default select example"
            >
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default BgTab;
