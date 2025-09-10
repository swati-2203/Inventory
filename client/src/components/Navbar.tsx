import React from "react";
import "../css/Navbar.css";

const Navbar = ({ adminName }) => {
  return (
    <div className="navbar">
      <div className="logo">CRM Dashboard</div>
      <div className="admin-info">Welcome: {adminName}</div>
    </div>
  );
};

export default Navbar;
