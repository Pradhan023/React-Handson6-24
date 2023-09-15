import React, { useContext } from 'react'
import Data from '../ContextApiStore/Store'
import { useLocation, useNavigate } from 'react-router-dom';
import '../Style/Form.css'

const Edit = () => {
    const StudData =  useContext(Data)
    const Editvalue = StudData.studData;
    const Index = useLocation().state.Index;
    const Nav =  useNavigate()

    const obj = {
        Name:Editvalue[Index].Name,
        Age:Editvalue[Index].Age,
        Course:Editvalue[Index].Course,
        Batch:Editvalue[Index].Batch
    }

    const handleChange = (e)=>{
        obj[e.target.name] = e.target.value
    }
    const handleClick = () =>{
        Editvalue[Index] = obj
        Nav('/student')
    }
  return (
    <>
    <div className='form'>
        <form>
            <label>Name</label>
            <input type='text' name='Name' placeholder={Editvalue[Index].Name} onChange={handleChange} />
            <label>Age</label>
            <input type='text' name='Age' placeholder={Editvalue[Index].Age} onChange={handleChange} /><br/>
            <label>Course</label>
            <input type='text' name='Course' placeholder={Editvalue[Index].Course} onChange={handleChange} />
            <label>Batch</label>
            <input type='text' name='Batch' placeholder={Editvalue[Index].Batch} onChange={handleChange} />
        </form>
        
    </div>
        <div className="form-btn">
        <button onClick={handleClick} >UPDATE</button>        {/* Update Function */}
        <button onClick={() => {Editvalue.splice(Index,1)  ,Nav('/student')}} >Delete</button>   {/* Delete Function */}
        <button onClick={() => Nav('/student')} >Cancel</button>
        </div>
    </>
  )
}

export default Edit