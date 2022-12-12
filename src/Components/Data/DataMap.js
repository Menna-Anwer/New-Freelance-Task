import React from 'react'
import Form from "react-bootstrap/Form";
import './dataMap.css'
const DataMap = () => {
  return (
    <div>
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
        <Form.Label htmlFor="index" className="col-3 text-start ">3.Index</Form.Label>
        <Form.Select className="w-50 mt-2" id="index" aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <div className="row align-items-center justify-content-between">
        <Form.Label htmlFor="model" className="col-4 text-start">4.Climate model</Form.Label>
        <Form.Select className="w-50 mt-2" id="model" aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <div className="row align-items-center justify-content-between">
        <Form.Label htmlFor="Scenario" className="col-3 text-start">5.Scenario</Form.Label>
        <Form.Select className="w-50 mt-2" id="Scenario" aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <div className="row align-items-center justify-content-between">
        <Form.Label htmlFor="period" className="col-3 text-start">6.Period</Form.Label>
        <Form.Select className="w-50 mt-2" id="period" aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <div className="row align-items-center justify-content-between">
        <Form.Label htmlFor="monthly" className="col-3 text-start">7.Monthly</Form.Label>
        <input className="w-50 mt-2" type="date" id="monthly" style={{border:"1px solid #c8c6c6",borderRadius:"5px",fontSize:"15px",marginRight:"15px"}}/>
      </div>
      <div className="row align-items-center justify-content-between select-cont">
        <Form.Label htmlFor="transparency" className="col-3 text-start">8.Transparency</Form.Label>
        <Form.Select className=" mt-2 " id="transparency" aria-label="Default select example"  style={{marginRight:"15px"}}>
          <option>60%</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
    </div>
    </div>
  )
}

export default DataMap