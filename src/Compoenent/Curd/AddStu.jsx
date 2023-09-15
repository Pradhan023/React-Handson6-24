import React, { useContext } from 'react'
import Data from '../ContextApiStore/Store'
import { useNavigate } from 'react-router-dom';
import '../Style/Form.css'

const AddStu = () => {
  const StudData = useContext(Data)
  const NewStudData = StudData.studData;
  const Nav = useNavigate()

  const NewObj = {
    Name:'',
    Age:'',
    Course:'',
    Batch:''
  }

  const handleChange = (e)=>{
    NewObj[e.target.name] = e.target.value
  }
  const handleClick = () =>{
    NewStudData.push(NewObj)          /* Create Function */
    Nav('/student')
  }

  return (
    <>
    <div className='form' >
        <form>
            <label>Name</label>
            <input type='text' name='Name' placeholder='Enter Your Name' onChange={handleChange}/>
            <label>Age</label>
            <input type='text' name='Age' placeholder='Enter Your Age' onChange={handleChange} /><br/>
            <label>Course</label>
            <input type='text' name='Course' placeholder='Enter Your Course' onChange={handleChange} />
            <label>Batch</label>
            <input type='text' name='Batch' placeholder='Enter Your Batch' onChange={handleChange} />
        </form>
    </div>
    <div className="form-btn">
        <button onClick={handleClick} >UPDATE</button>
        <button onClick={() => Nav('/student')}>Cancel</button>
    </div>
    </>
  )
}

export default AddStu