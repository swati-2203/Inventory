import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddSupplier from "./pages/supplier/AddSupplier";
import ViewSuppliers from "./pages/supplier/ViewSuppliers";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/supplier/add" element={<AddSupplier />} />
        <Route path="/supplier/view" element={<ViewSuppliers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
