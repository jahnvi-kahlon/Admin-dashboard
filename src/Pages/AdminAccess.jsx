  import { useState } from "react"
  import { useNavigate } from "react-router-dom"
  import "./AdminAccess.css"
  function AdminAccess(){
    const navigate=useNavigate();
    const[password , SetPassword] = useState("")
    const handlePassword=()=>{
        if(password === "admin123"){
            navigate("/Dashboard")
        }
        else{
            alert("password wrong ")
        }
    }
        
    return(
        <>
        <div className="admin-access">
            <div className="admin-card">
        <h1>Admin Access</h1>
        <input type="password" placeholder="Enter Admin Password"
        value={password}
        onChange={(e)=>SetPassword(e.target.value)}
        />
        <button onClick={handlePassword}>Continue</button>
        </div>
        </div>
        </>

    )
}
export default AdminAccess;