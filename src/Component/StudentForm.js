import React, {useState} from 'react'
import './StudentForm.css'

const StudentForm = () => {
  const [name ,setname] = useState ("") 
  const [rollnumber ,setrollnumber] = useState () 
  const [subject ,setsubject] = useState ("") 
  const [marks ,setmarks] = useState ()  
  const [arr, setarr] = useState ([])

  const handleclick = () => {

    let obj = {
        Name : name,
        Rollnumber : rollnumber,
        Subject : subject,
        Marks : marks
    }
    setname("")
    setrollnumber("")
    setsubject("")
    setmarks("")
    setarr ([...arr, obj])
  }


  return (   
    <div>
        <h1>Student Dtails</h1>

    <input type="text" placeholder= "Name" value={name} onChange={(e) => setname(e.target.value)}/>
    <input type="number" placeholder="Roll Number" value={rollnumber} onChange={(e) => setrollnumber(e.target.value)}/>
    <input type="text" placeholder="Subject" value={subject} onChange ={(e) => setsubject(e.target.value)}/>
    <input type="number" placeholder="Marks" value={marks} onChange ={(e) => setmarks(e.target.value)}/>
    <button onClick={handleclick}>Details</button>
    
    {
        
        arr.map((data, index) => (
           <div> 
            <ul className='list'>
            <li>{data.Name}</li>
            <li>{data.Rollnumber}</li>
            <li>{data.Subject}</li>
            <li>{data.Marks}</li>
            </ul>
           </div>
        ))
    }
    </div>
  )
}

export default StudentForm