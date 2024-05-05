import React from 'react'
import { useState } from 'react';
import axios from 'axios';


function SignUpPage() {

  const [fullName, setfullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await axios.post('http://localhost:4000/addUser', { fullName, mobileNumber, email, password });
      console.log('Registration successful');
      alert("Sign Up complete ... login with your email and password");
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };

  const Pass =  function togglePasswordVisibility() {
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
        <div className="card position-absolute top-50 start-50 translate-middle" style={{width : "25rem"}}>
        <div className="card-body ">
            <h1 className="text-center">Sign Up</h1>
            <div className="form-floating mb-3">
                <input type="text" value={fullName} onChange={(e) => setfullName(e.target.value)} className="form-control floatingInput"  placeholder="Rahul Choudhary"/>
                <label>Full Name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className="form-control floatingInput" placeholder="+91 1234567890"/>
                <label>Mobile Number</label>
              </div>
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
        <input onClick={handleSignIn} className="btn btn-primary" type="submit" value="Submit"/> 
      </div>
   </>
  )
}

export default SignUpPage;