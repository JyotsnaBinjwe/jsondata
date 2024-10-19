import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function InsertStudent() {
    let navigate=useNavigate();
    const [id,setId]=useState();
    const [name,setName]=useState();
    const [subject,setSubject]=useState();
    const [marks,setMarks]=useState();
    let insertStudent=()=>{
        let data={id,name,subject,marks};
        fetch("http://localhost:3001/studs",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{
              //  setData(resp)
              console.log("Inserted..")
              navigate("/")
            })
        })
    }
    return (
        <div>
            <h1>Insert Student</h1>
            Id : <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/><br/><br/>
            Name : <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
            Subject : <input type="text" value={subject} onChange={(e)=>setSubject(e.target.value)}/><br/><br/>
            Marks : <input type="text" value={marks} onChange={(e)=>setMarks(e.target.value)}/><br/><br/>
            <button onClick={insertStudent}>Add Student</button>
        </div>
    );
}

export default InsertStudent;