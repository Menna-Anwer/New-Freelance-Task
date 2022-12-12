import React from 'react'
import BgTab from '../Tabes/BgTab'
import DataMap from './DataMap'
import Remarks from './Remarks';

const Data2 = () => {
  return (
    <div className='container'>
      <div className="row m-auto">
        <div  >
          <DataMap />
        </div>
        <div>
        <BgTab/>
        </div>
        <div>
        <Remarks/>
        </div>
      </div>
    </div>
  )
}

export default Data2