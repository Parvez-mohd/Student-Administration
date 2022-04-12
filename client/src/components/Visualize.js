import React, { useEffect, useState } from 'react'
import './Admin.css'
import { useNavigate } from 'react-router-dom';
//TOAST


export default function Visualize() {
    //get data in form of json from backend , use useeffect for fetching data and getting the data and use chartjs
    const navigate = useNavigate();

const [AllData, setAllData] = useState([])

useEffect( () => {
  fetch("/visualize")
  .then(res=>res.json())
  .then(data=>{
    if(data.Error)
    return; 
    else 
       setAllData(data)
  })
}, [])


const redirectHandler = () =>{
  navigate('/enter');

}


  return (<>
   {(AllData.length!==0) ? <h2>DATA:</h2> :
   <div><h2>No data available</h2><br /><h1 onClick={redirectHandler} className="btn primary">Click Here to Enter the Data</h1> </div>}
<table >
                <thead>
                <tr style={{border:"1px solid black",backgroundColor:"rgb(166, 171, 150)"}}>
                    <th>Name</th>
                    <th>RollNo</th>
                    <th>Semester</th>
                    <th>Subject</th>
                    <th>Marks</th>
                </tr>
                </thead>
    {AllData.map(item=>(
                <tbody key={item._id} style={{border:"1px solid black",backgroundColor:"rgb(166, 171, 150)"}}>
                    <tr style={{border:"1px solid black",backgroundColor:"rgb(166, 171, 150)"}}>
                        <td>{item.name}</td>
                        <td>{item.rollno}</td>
                        <td>{item.semester}</td>
                        <td>{item.subject}</td>
                        <td>{item.marks}</td>
                    </tr>
                </tbody>
    ))}
            </table>




  {/* // <ul key={item._id} className="cardul">
  //     <li >Name: {item.name}</li>
  //     <li>RollNo: {item.rollno}</li>
  //     <li >Semester: {item.semester}</li>
  //     <li >Subject: {item.subject}</li>
  //     <li >Marks: {item.marks}</li>
  //   </ul> */}
     
    </>
  )
}
