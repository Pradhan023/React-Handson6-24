import React, { useContext } from 'react'
import Data from '../ContextApiStore/Store'
import { Link, useNavigate } from 'react-router-dom';
import '../Style/Student.css'

const Student = () => {
  const ContextData = useContext(Data);
  const StudentData = ContextData.studData;
  const Nav = useNavigate()
  console.log(StudentData);
  return (
    <>
    <div className='Addstu'>
      <button onClick={() => Nav('/add')} >Add New Student</button>
    </div>

    <div className='table-align'>
      <table className='tb'>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Course</td>
            <td>Batch</td>
            <td>Change</td>
          </tr>
        </thead>
        <tbody>
          {
            StudentData.map((item,index) =>
            {
              return(
                <tr key={index}>
                  <td>{item.Name}</td>
                  <td>{item.Age}</td>
                  <td>{item.Course}</td>
                  <td>{item.Batch}</td>
                  <td><Link className='tlink' to='/edit' state={{Index:index}} >Edit</Link></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Student