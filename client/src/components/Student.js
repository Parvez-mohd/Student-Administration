import React, { useState } from 'react'
import './Admin.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Student = () => {
  const [name, setname] = useState("")
    const [roll, setroll] = useState("")
    const [SearchedData, setSearchedData] = useState([])

    const submitHandler =  (e)=>{
      e.preventDefault();
      fetch("/search",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,roll
        })
      }).then(res=>res.json())
  .then((data)=>{
    if(data.Error){
      toast.warn(data.Error,{
        position: "top-center",
autoClose: 2000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: false,
draggable: true,
progress: undefined,
      })
   }
   else{
     setSearchedData(data.present)

   }
  })
      }
    
  return (
    <>
   
    <form className='formcss'>
    <label>
      Name
      <input type="text"  value={name}  onChange={(e)=>{setname(e.target.value)}}/>
    </label>
    <label>
      RollNo
      <input type="text"  value={roll} onChange={(e)=>{setroll(e.target.value)}}/>
    </label>
    <button  className='waves-effect waves-light btn-large ' onClick={submitHandler}>
    Submit
    </button>
  </form>
<div>
   
    {SearchedData.map(item=>(
  <ul key={item._id} className="cardul">
      <li >Semester: {item.semester}</li>
      <li >Subject: {item.subject}</li>
      <li >Marks: {item.marks}</li>
    </ul>
    ))}
    </div>

    <ToastContainer position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover/>
  </>
  )
}

export default  Student;
