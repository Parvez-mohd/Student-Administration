import React, { useState } from 'react'
import './Admin.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Enter() {
    //Add a form and send inputs at backend to save inside the db.



    const [name, setname] = useState('')
    const [roll, setroll] = useState('')
    const [sem, setsem] = useState(0)
    const [sub, setsub] = useState('')
    const [marks, setmarks] = useState(0)


const submitHandler =  (e)=>{
  e.preventDefault();
    fetch("http://localhost:5000/add",{
        method:"post",
        headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        name, roll, sem, sub, marks
    })
}).then(res=>res.json())
.then((data)=>{
  if(data.Error)
  toast.warn(data.Error,{
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  })
  else toast.success(data.message,{
    position: "top-center",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
  })
})
    }


  return (<>
    <form className='formcss'>
    <label>
      Name:
      <input type="text" name="name" value={name}  onChange={(e)=>{setname(e.target.value)}}/>
    </label>
    <label>
      RollNo:
      <input type="text" name="rollno" value={roll} onChange={(e)=>{setroll(e.target.value)}}/>
    </label>
    <label>
      Semester:
      <input type="number" name="semester" value={sem} onChange={(e)=>{setsem(e.target.value)}} />
    </label>
    <label>
      Subject:
      <input type="text" name="subject" value={sub} onChange={(e)=>{setsub(e.target.value)}}/>
    </label>
    <label>
      Marks:
      <input type="number" name="marks" value={marks} onChange={(e)=>{setmarks(e.target.value)}}/>
    </label>
    <button onClick={submitHandler} className='waves-effect waves-light btn-large material-icons right' type="submit">
    Submit
    </button>
  </form>


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
