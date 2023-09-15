import React, { useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Navcompo.jsx/Home'
import Student from './Navcompo.jsx/Student'
import ContactUs from './Navcompo.jsx/ContactUs'
import Data from './ContextApiStore/Store'
import Edit from './Curd/Edit'
import AddStu from './Curd/AddStu'
import './Style/Navbar.css'

const Routescomp = () => {
  const [value,setValue] = useState([
        {
          Name : "Anish Pradhan" , 
          Age: 24 , 
          Course: "MERN" , 
          Batch: "EA2023"},
      {
          Name : "Narji Begum" , 
          Age: 25 , 
          Course: "MERN" , 
          Batch: "EA2023"},
      {
          Name : "Akansha Bagul" , 
          Age: 25 , 
          Course: "MERN" , 
          Batch: "EA2023"},
      {
          Name : "Vitasta" , 
          Age: 24 , 
          Course: "Btech BIOtech" , 
          Batch: "2018"},
      {
          Name : "Himanshi" , 
          Age: 24 , 
          Course: "Btech CSE" , 
          Batch: "2018"}
  ])

  return (
    <div>
        <BrowserRouter>
          <div className='Navbar'>
            <NavLink to='/'  activeclassName='active' className='Link' >Home</NavLink>
            <NavLink to='/student' activeclassName='active' className='Link' >Student</NavLink>
            <NavLink to='/contact' activeclassName='active'  className='Link'>Contact Us</NavLink>
          </div>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/student' element={
              <Data.Provider value={{ studData:value , updateValue:setValue}}>
                <Student/>
              </Data.Provider>
            }/>

            <Route path='/edit' element={
              <Data.Provider value={{ studData:value , updateValue:setValue}}>
              <Edit/>
            </Data.Provider>
            } />
            <Route path='/add' element={
              <Data.Provider value={{ studData:value , updateValue:setValue}}>
              <AddStu/>
            </Data.Provider>
            } />
            <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routescomp