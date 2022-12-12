import React from "react";
import Form from "react-bootstrap/Form";
const DataChart = () => {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <Form.Label htmlFor="data" className="col-3 text-start">1.Data Set</Form.Label>
        <Form.Select  className="w-50 " id="data" aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <div className="row align-items-center justify-content-between">
        <Form.Label htmlFor="category" className="col-3 text-start">2.Category</Form.Label>
        <Form.Select className="w-50 mt-2" id="category" aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <div className="row align-items-center justify-content-between">
        <Form.Label htmlFor="region" className="col-4 text-start">3.Country or region</Form.Label>
        <Form.Select className="w-50 mt-2" id="region" aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <div className="row align-items-center justify-content-between">
        <Form.Label htmlFor="index" className="col-3 text-start ">4.Index</Form.Label>
        <Form.Select className="w-50 mt-2" id="index" aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <div className="row align-items-center justify-content-between">
        <Form.Label htmlFor="subIndex" className="col-3 text-start">5.Sub-Index</Form.Label>
        <Form.Select className="w-50 mt-2" id="subIndex" aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
    </div>
  );
};

export default DataChart;
