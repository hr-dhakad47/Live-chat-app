import React, { useState } from 'react';
import axios from 'axios';
import './Loader.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post('https://chat-app-backend-lac.vercel.app/login', { email, password });
      const { status, mssg, user } = response.data;
      
      if (status === 200) {
        const userInfo = {
          email : user.email,
          name : user.fullName
        }
        sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
        // localStorage.setItem('name', user.fullName);
        window.location.href = `/ChatPage/${user._id}`;
      } else {
        console.error('Error: ', mssg);
      }
    } catch (error) {
      console.error('Error Login user:', error.message);
      alert("your E-mail or PassWord is wrong.. Please TRY AGAIN...!!")
    }
    finally {
      setLoading(false); // Hide loader
    }
  };

  const togglePasswordVisibility = () => {
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
     {loading && <div className='z-2 blur'>
      <div className='position-absolute top-50 start-50 z-3 translate-middle'>
      <div class="newtons-cradle">
<div class="newtons-cradle__dot"></div>
<div class="newtons-cradle__dot"></div>
<div class="newtons-cradle__dot"></div>
<div class="newtons-cradle__dot"></div>
</div> </div> </div>}
    <div className="card position-absolute top-50 start-50 translate-middle" style={{ width: "25rem" }}>
      <div className="card-body ">
        <h1 className="text-center">Login</h1>
        <div className="form-floating mb-3">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control floatingInput" placeholder="name@example.com" />
          <label>Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control floatingInput" id="password" placeholder="Password" />
          <label>Password</label>
        </div>
        <input id="toggleBtn" className="ms-2 mt-3" type="checkbox" onClick={togglePasswordVisibility} />
        <label>Show Password</label>
      </div>

      <input onClick={handleLogin} className="btn btn-primary" type="submit" value="Submit" />
    </div>
    </>
  );
}

export default LoginPage;
