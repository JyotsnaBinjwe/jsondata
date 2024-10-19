import React from 'react';

import {useSearchParams, useNavigate} from 'react-router-dom';

function DeleteStudent() {
    let navigate=useNavigate();
    const [searchParams,setSearchParams]=useSearchParams();
    // let [id,setId]=useState();
    let id=searchParams.get('id');
    
    function deleteStudent(id){

        fetch(`http://localhost:3001/studs/${id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
                console.log("Deleted..")
            })
        })
        navigate("/")
    }
    return (
        <div>
            <h1>Delete Student</h1>
            
            Id : <input type="text" value={id}  /><br/><br/>
            <button onClick={()=>deleteStudent(id)}>Delete Student</button>
 
        </div>
    );
}

export default DeleteStudent;