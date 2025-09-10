import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import "../css/Login.css"; // Make sure CSS exists
import  dashboard from "./Dashboard.tsx"
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      console.log("Button is pressed");
      // Save token in localStorage
      localStorage.setItem("token", res.data.token);

      // Show success message
      alert(res.data?.message || "Login successful");

      // Navigate to dashboard
     navigate("/dashboard");

    } catch (err: AxiosError | any) {
      // Show error message
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
     <div className="login-page">
    <div className="login-container">
      <h2>Admin Login</h2>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      
      <p>
        Forgot password? <a href="#">Click here</a>
      </p>
    </div>
    </div>
  );
}

export default Login;
