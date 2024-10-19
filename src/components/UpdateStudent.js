import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate,useSearchParams} from 'react-router-dom';
function UpdateStudent() {
    let navigate=useNavigate();
    const [searchParams,setSearchParams]=useSearchParams();
    let id1=searchParams.get('id');
    let name1=searchParams.get('name')
    let sub=searchParams.get('subject')
    let m=searchParams.get('marks');
    console.log("Object is "+id1);
    const [id,setId]=useState(id1);
    const [name,setName]=useState(name1);
    const [subject,setSubject]=useState(sub);
    const [marks,setMarks]=useState(m);
    const [stud,setStud]=useState([])
    useEffect(()=>{
        getUser();
    },[])
    function getUser(){
        let stud={id,name,subject,marks};

        fetch(`http://localhost:3001/studs`).then((result)=>{
            result.json().then((resp)=>{
                setStud(stud);
                setId(stud.id);
                setName(stud.name)
                setSubject(stud.subject)
                setMarks(stud.marks)
               
            })
        })
        
    }
    let updateStudent=()=>{
        let item={id,name,subject,marks}
        // console.log(item)
        fetch(`http://localhost:3001/studs/${id}`,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item)
        }).then((result)=>{
            result.json().then((resp)=>{
                getUser();
                console.log("Updated..");
            })
        })
        navigate("/")
    }
    return (
        <div>
            <h1>Update Student</h1>
            
            Id : <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/><br/><br/>
            Name : <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
            Subject : <input type="text" value={subject} onChange={(e)=>setSubject(e.target.value)}/><br/><br/>
            Marks : <input type="text" value={marks} onChange={(e)=>setMarks(e.target.value)}/><br/><br/>
            <button onClick={updateStudent}>Update</button>
 
        </div>
    );
}

export default UpdateStudent;