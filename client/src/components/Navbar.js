import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
export default function Navbar() {
    
  return (
      <>

      <ul className='containers' style={{ marginBottom:"80px"}}>
      <li><Link to="/admin" key={1}  style={{ color:"black" }} className='btn'>AdminPortal</Link> </li>
      <li><Link to="/student" key={2}  style={{ color:"black" }} className='btn'>StudentPortal</Link> </li>
      </ul>
      </>
  )
}
