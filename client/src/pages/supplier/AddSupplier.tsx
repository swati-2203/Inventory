import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import "../../css/AddSupplier.css";

const AddSupplier: React.FC = () => {
  const [supplierName, setSupplierName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("India");
  const [pincode, setPincode] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fax, setFax] = useState("");
  const [contactPerson, setContactperson] = useState("");
  const [GstNumber, setGstnumber] = useState("");
  const [PanNumber, setPannumber] = useState("");
  const [BankName, setBankname] = useState("");
  const [BranchName, setBranchname] = useState("");
  const [AccountNumber, setAccountnumber] = useState("");
  const [IfscCode, setIfsccode] = useState("");
  const [paymentTerms, setPaymentTerms] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      supplierName,
      address,
      city,
      state,
      country,
      pincode,
      email,
      phone,
      fax,
      contactPerson,
      GstNumber,
      PanNumber,
      BankName,
      BranchName,
      AccountNumber,
      IfscCode,
      paymentTerms,
    });

    setMessage("Supplier added successfully!");
    // clear form
    setSupplierName("");
    setAddress("");
    setCity("");
    setState("");
    setCountry("India");
    setPincode("");
    setEmail("");
    setPhone("");
    setFax("");
    setContactperson("");
    setGstnumber("");
    setPannumber("");
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Navbar adminName="Admin Name" />
        <div className="content">
          <h1>Add New Supplier</h1>
          {message && <div className="success-message">{message}</div>}
          <form className="supplier-form" onSubmit={handleSubmit}>
            {/* Basic Information */}
            <div className="form-section">
              <div className="section-header">📄 Basic Information</div>
              <div className="form-group">
                <label>Supplier / Company Name *</label>
                <input
                  type="text"
                  value={supplierName}
                  onChange={(e) => setSupplierName(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Address Details */}
            <div className="form-section">
              <div className="section-header">📍 Address Details</div>
              <div className="form-group full-width">
                <label>Address</label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="form-grid">
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Country</label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Pincode</label>
                  <input
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="form-section">
              <div className="section-header">📞 Contact Information</div>
              <div className="form-grid">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Fax</label>
                  <input
                    type="text"
                    value={fax}
                    onChange={(e) => setFax(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Contact Person</label>
                  <input
                    type="text"
                    value={contactPerson}
                    onChange={(e) => setContactperson(e.target.value)}
                  />
                </div>
              </div>
            </div>
            {/* Tax Information */}
            <div className="form-section">
              <div className="section-header">📄 Tax Information</div>
              <div className="form-grid">
                <div className="form-group">
                  <label>GST Number *</label>
                  <input
                    type="text"
                    value={GstNumber}
                    onChange={(e) => setGstnumber(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>PAN Number *</label>
                  <input
                    type="text"
                    value={PanNumber}
                    onChange={(e) => setPannumber(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Bank Information */}
            <div className="form-section">
              <div className="section-header">📄 Bank Information</div>
              <div className="form-grid">
                <div className="form-group">
                  <label>Bank Name *</label>
                  <input
                    type="text"
                    value={BankName}
                    onChange={(e) => setBankname(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Branch Name *</label>
                  <input
                    type="text"
                    value={BranchName}
                    onChange={(e) => setBranchname(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Account Number *</label>
                  <input
                    type="text"
                    value={AccountNumber}
                    onChange={(e) => setAccountnumber(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>IFSC Code *</label>
                  <input
                    type="text"
                    value={IfscCode}
                    onChange={(e) => setIfsccode(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <div className="section-header">📄 Payment Terms</div>
              <div className="form-group">
                <label>Payment Terms *</label>
                <select
                  value={paymentTerms}
                  onChange={(e) => setPaymentTerms(e.target.value)}
                  required
                >
                  <option value="">-- Select Payment Terms --</option>
                  <option value="advance">Advance Payment</option>
                  <option value="net15">Net 15 Days</option>
                  <option value="net30">Net 30 Days</option>
                  <option value="net45">Net 45 Days</option>
                  <option value="net60">Net 60 Days</option>
                  <option value="partial">Partial Payment</option>
                </select>
              </div>
            </div>

            <button type="submit">Add Supplier</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSupplier;
