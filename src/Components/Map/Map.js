import React from 'react'
import Form from "react-bootstrap/Form";
import MapImg from "../../image/Map.jpeg"
import Buttons from '../MabButtons/Buttons';
import "./map.css"
const Map = () => {
  return (
    <div className='container map-container'>
        <Buttons/>
        <div className='text-end'>
            <button className='btn-map'>Full Screen</button>
            <label htmlFor='maps'>Divide maps :</label>
            <input className='input-map' type="number" id='maps'/>
              {/* <Form.Select className='select-map' id='maps' aria-label="Default select example">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">Three</option>
              </Form.Select> */}
           
            <input type="checkbox" id="Sync" name="Sync"/>
            <label className=' ps-1' for="Sync">Sync position</label>
        </div>
        <div>
            <img src={MapImg} alt="..." className='map'/>
        </div>
    </div>
  )
}

export default Map