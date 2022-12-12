import React from 'react'
import BgTab from '../Tabes/BgTab'
import DataMap from './DataMap'

const Data2 = () => {
  return (
    <div>
      <div className="row m-auto">
        <div  >
          <DataMap />
        </div>
        <div className='mt-5'>
        <BgTab/>
        </div>
      </div>
    </div>
  )
}

export default Data2