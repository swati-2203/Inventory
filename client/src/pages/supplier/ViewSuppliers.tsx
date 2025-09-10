import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import "../../css/ViewSuppliers.css";

// Sample supplier data (replace with API fetch)
interface Supplier {
  id: number;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
}

const sampleSuppliers: Supplier[] = [
  { id: 1, name: "ABC Supplies", contactPerson: "John Doe", email: "abc@example.com", phone: "1234567890", address: "123 Main St" },
  { id: 2, name: "XYZ Traders", contactPerson: "Jane Smith", email: "xyz@example.com", phone: "0987654321", address: "456 Oak Ave" },
  { id: 3, name: "Global Suppliers", contactPerson: "Mike Johnson", email: "global@example.com", phone: "5555555555", address: "789 Pine Rd" },
];

const ViewSuppliers: React.FC = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Replace with API call to fetch suppliers
    setSuppliers(sampleSuppliers);
  }, []);

  // Filter suppliers based on search
  const filteredSuppliers = suppliers.filter((supplier) =>
    supplier.name.toLowerCase().includes(search.toLowerCase()) ||
    supplier.contactPerson.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Navbar adminName="Admin Name" />
        <div className="content">
          <h1>View Suppliers</h1>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search suppliers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Supplier Name</th>
                  <th>Contact Person</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredSuppliers.length > 0 ? (
                  filteredSuppliers.map((supplier) => (
                    <tr key={supplier.id}>
                      <td>{supplier.id}</td>
                      <td>{supplier.name}</td>
                      <td>{supplier.contactPerson}</td>
                      <td>{supplier.email}</td>
                      <td>{supplier.phone}</td>
                      <td>{supplier.address}</td>
                      <td>
                        <button className="edit-btn">Edit</button>
                        <button className="delete-btn">Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} style={{ textAlign: "center" }}>No suppliers found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSuppliers;
