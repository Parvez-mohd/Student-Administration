import React from 'react'
import { Link } from 'react-router-dom'
import './Admin.css'
const Admin=   ()=> {
  return (
    <div >
      <ul className='containers' style={{backgroundColor: "rgb(174, 144, 89)"}}>
      <li><Link to="/enter" key={2}   style={{ color:"black" , borderRadius:"20px"}} className='btn'>Enter Student's data</Link> </li>
      <li><Link to="/visualize" key={1} style={{ color:"black" , borderRadius:"20px"}} className='btn'>Visualize the data</Link> </li>
      </ul>
    </div>

  )
}


export default Admin;