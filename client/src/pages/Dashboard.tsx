import React from "react";
import Sidebar from "../components/Sidebar.tsx";
import Navbar from "../components/Navbar.tsx";
import "../css/Dashboard.css";

const Dashboard = () => {
  const adminName = "Admin Name"; // Replace with actual logged-in admin

  return (
    
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Navbar adminName={adminName} />
        <div className="content">
          <h1>Welcome, {adminName}</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
