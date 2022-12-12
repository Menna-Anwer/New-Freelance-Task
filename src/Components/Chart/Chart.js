import * as React from 'react';
import{ LineChart, Line, CartesianGrid, YAxis, XAxis } from "recharts";
import './chart.css'
const chartData = [
  {
    name: "Item 1",
    uv: 400,
    pv: 1500,
    amt: 1500,
  },
  {
    name: "Item 2",
    uv: 300,
    pv: 1500,
    amt: 1500,
  },
  {
    name: "Item 3",
    uv: 350,
    pv: 1500,
    amt: 1500,
  },
  {
    name: "Item 4",
    uv: 200,
    pv: 1500,
    amt: 1500,
  },
  {
    name: "Item 5",
    uv: 280,
    pv: 1500,
    amt: 1500,
  },
]
const Chart = () => {
  return (
    <div className='chart-container'>
        <LineChart width={400} height={300} data={chartData}>
        <Line type="monotone" dataKey="uv" stroke="green" />
        <CartesianGrid stroke="gray" />
        <YAxis />
        <XAxis dataKey="name" />
      </LineChart>
    </div>
  
  )
            
}




export default Chart