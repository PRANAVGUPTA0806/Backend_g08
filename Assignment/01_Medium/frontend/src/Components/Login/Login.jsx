import React, { useState } from 'react';
import './Login.css'; 
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const changeHandle = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async (event) => {
    event.preventDefault(); 
    console.log("Login function executed", formData);

    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST', 
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (responseData.success) {
        // Store the token in localStorage
        localStorage.setItem('auth-token', responseData.token);
        console.log("Login successful");
        alert("You are logged in! WELCOME!");
        navigate('/home');
      } else {
        console.error("Login error:", responseData.error);
        alert("Login failed: " + responseData.error);
      }

    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <section className='w2'> 
      <div className="form-container">
        <h1>Login</h1>
        <form className='login-form' onSubmit={login}>
          <div className="control">
            <label htmlFor="email">Email</label>
            <input
              name='email'
              value={formData.email}
              onChange={changeHandle}
              placeholder='Email*'
              type="email"
              id="email"
              required
            />
          </div>
          <div className="control">
            <label htmlFor="psw">Password</label>
            <input
              name='password'
              value={formData.password}
              onChange={changeHandle}
              placeholder='Password*'
              type="password"
              id="psw"
              required
            />
          </div>
          <div className="control">
            <button type="submit" className="btn">Login</button>
          </div>
        </form>
        <p>
          Don't have an account?
          <Link to='/sign'> Sign In</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
