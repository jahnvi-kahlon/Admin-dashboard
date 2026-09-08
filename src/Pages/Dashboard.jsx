import Sidebar from "../components/Sidebar";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <h1>Welcome to Admin Dashboard</h1>
        <div className="cards">
            <div className="card">
                <h3>Total Users</h3>
                <p>120</p>
            </div>

            <div className="card">
                <h3>T0tal Products</h3>
                <p>80</p>
                </div>

            <div className="card">
                <h3>Total Orders</h3>
                <p>250</p>
                </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;