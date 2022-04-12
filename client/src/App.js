import React from 'react'
import "./App.css";
import Admin from "./components/Admin";
import Navbar from './components/Navbar';
import Student from "./components/Student"
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import Visualize from './components/Visualize';
import Enter from './components/Enter';

const App = ()=> {


  return (
    <BrowserRouter>
    <img src="/logo11.png" alt="" className='imgcss'/>
    <Navbar/>
    <Routes>
    <Route path='/admin' element={<Admin/>} />
    <Route path='/student' element={<Student/>} />
    <Route path='/visualize' element={<Visualize/>} />
    <Route path='/enter' element={<Enter/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
