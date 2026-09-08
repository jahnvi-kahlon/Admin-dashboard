import "./sidebar.css";
import {FaChartBar, FaUsers,FaBox,FaShoppingCart,FaCog} from "react-icons/fa";
import {Link} from "react-router-dom"

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>

      <ul>
        <li>📊 Dashboard</li>
        <li>
         <Link to="/users">
        <FaUsers/>Users</Link>
        </li>

        <li>
          <Link to="/products">
          <FaBox/>Product</Link>
          </li>
        <li>
          <Link to="/orders">
          <FaShoppingCart/>Orders</Link>
          </li>
        <li>
          <Link  to="/settings">Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;