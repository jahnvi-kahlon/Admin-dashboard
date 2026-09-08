import "./Users.css";
import { useState } from "react";
function Users() {
    const[showForm,setshowForm]=useState(false)
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[users,setUsers]=useState([])
    const[editIndex,setEditIndex]=useState(null)

    const handleAddUser =()=>{
      const newUser ={
        name:name,
        email:email,
      }
      setUsers([...users,newUser])
      setName("");
      setEmail("");
      setshowForm(false)
    }
    const handleEdit =(index)=>{
      setName(users[index].name);
      setEmail(users[index].email);
      setEditIndex(index);
      setshowForm(true)
    }

    const handleUpdateUser=()=>{
      const updateUsers=[...users]
      updateUsers[editIndex]={
        name:name,
        email:email,
      }
      setUsers(updateUsers)
      setName("");
      setEmail("");
      setEditIndex(null);
      setshowForm(false)
    }
    const handleDelete =(index)=>{
      const updateUsers=users.filter((user, i) =>i !== index);
    
    setUsers(updateUsers)
  }
     
  return (
    <>
    <div className="users-page">
      <h1>Users</h1>

      <button onClick={()=>setshowForm(true)}>Add User</button>
 {showForm &&(
      <div>
        <h2>Add New User</h2>
        <input type="text" placeholder="Enter Name" value={name}
         onChange={(e)=>setName(e.target.value)}
        />

        <input type="text" placeholder="Enter Email"   value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        
 
        {editIndex !== null ?(
          <button onClick={handleUpdateUser}>update</button>
        ):(
        <button onClick={handleAddUser}>Add</button>
        )}
      </div>
 )

}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user,index)=>(
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
          
            <td>
              <button onClick={()=>handleEdit(index)}>Edit</button>
              <button onClick={()=>handleDelete(index)}>Delete</button>
            </td>
          </tr>
           )) }
          
        </tbody>
      </table>
    </div>
    </>
    );
    
  }



export default Users;