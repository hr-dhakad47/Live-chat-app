import React from 'react'
import { useState } from 'react';
import axios from 'axios';


function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await axios.post('http://localhost:4000/login', { email, password });
      console.log('Login successful');
    } catch (error) {
      console.error('Error Login user:', error.message);
    }
  };

   const Pass = function togglePasswordVisibility() {
        var passwordInput = document.getElementById("password");
        var toggleBtn = document.getElementById("toggleBtn");
   
        
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            toggleBtn.textContent = "Hide";
        } else {
            passwordInput.type = "password";
            toggleBtn.textContent = "Show";
        }
    }

  return (
    <>
        <div className="card position-absolute top-50 start-50 translate-middle" style={{width: "25rem"}}>
        <div className="card-body ">
            <h1 className="text-center">Login</h1>
              <div className="form-floating mb-3">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control floatingInput"  placeholder="name@example.com"/>
                <label>Email address</label>
              </div>
              <div className="form-floating">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control floatingInput" id="password" placeholder="Password"/>
                <label>Password</label>
              </div>
              <input id="toggleBtn" className="ms-2 mt-3" type="checkbox" onClick={Pass}/>
                <label>Show Password</label> 
        </div>
        <input onClick={handleLogin} className="btn btn-primary" type="submit" value="Submit"/> 
      </div>
    </>
  )
}
export default LoginPage;