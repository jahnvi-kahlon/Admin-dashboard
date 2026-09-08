import {Routes,Route} from "react-router-dom"
import AdminAccess from "./Pages/AdminAccess";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Products from "./Pages/Products";
import Orders from "./Pages/Orders";
import Settings from "./Pages/Settings";
function App(){
  return(
    <Routes>
      <Route path="/" element={<AdminAccess/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/settings" element={<Settings/>}/>
    </Routes>
    
  )
}
export default App;