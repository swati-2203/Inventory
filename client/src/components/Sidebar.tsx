import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Sidebar.css";

// Icon placeholders
const DashboardIcon = () => <span>📊</span>;
const ClientsIcon = () => <span>👥</span>;
const LeadsIcon = () => <span>📈</span>;
const ReportsIcon = () => <span>📝</span>;
const SupplierIcon = () => <span>🏭</span>;
const SettingsIcon = () => <span>⚙️</span>;
const LogoutIcon = () => <span>🚪</span>;

interface MenuItem {
  name: string;
  icon: React.ReactNode; // JSX.Element बदलून React.ReactNode
  path?: string; 
  subMenu?: { name: string; path: string }[]; 
}

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("Dashboard");
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const menuItems: MenuItem[] = [
    { name: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { name: "Clients", icon: <ClientsIcon />, path: "/clients" },
    { name: "Leads", icon: <LeadsIcon />, path: "/leads" },
    { 
      name: "Reports", icon: <ReportsIcon />, subMenu: [
        { name: "Sales", path: "/reports/sales" },
        { name: "Marketing", path: "/reports/marketing" },
      ] 
    },
    { 
      name: "Supplier Master", icon: <SupplierIcon />, subMenu: [
        { name: "Add Supplier", path: "/supplier/add" },
        { name: "View Suppliers", path: "/supplier/view" },
      ]
    },
    { name: "Settings", icon: <SettingsIcon />, path: "/settings" },
    { name: "Logout", icon: <LogoutIcon />, path: "/logout" },
  ];

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        {!collapsed && <h2>CRM System</h2>}
        <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? "➡️" : "⬅️"}
        </button>
      </div>

      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li key={item.name} className={`menu-item ${activeItem === item.name ? "active" : ""}`}>
            {item.path ? (
              <Link to={item.path} className="menu-main" onClick={() => setActiveItem(item.name)}>
                <span className="menu-icon">{item.icon}</span>
                {!collapsed && <span className="menu-text">{item.name}</span>}
              </Link>
            ) : (
              <div className="menu-main" onClick={() => setActiveItem(item.name)}>
                <span className="menu-icon">{item.icon}</span>
                {!collapsed && <span className="menu-text">{item.name}</span>}
              </div>
            )}

            {/* Submenu */}
            {!collapsed && item.subMenu && activeItem === item.name && (
              <ul className="submenu">
                {item.subMenu.map((sub) => (
                  <li key={sub.name} className="submenu-item">
                    <Link to={sub.path} onClick={() => setActiveItem(item.name)}>
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="sidebar-footer">
        {!collapsed && (
          <div className="user-profile">
            <div className="avatar">👤</div>
            <div className="user-info">
              <span className="user-name">Admin Name</span>
              <span className="user-role">Administrator</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
