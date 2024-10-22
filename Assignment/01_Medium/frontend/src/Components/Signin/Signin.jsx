import React, { useState } from 'react';
import './Signin.css';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate(); 

  const [isLoginFormVisible, setLoginFormVisible] = useState(true);
  const [isLostPasswordFormVisible, setLostPasswordFormVisible] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const changeHandle = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signin1 = async (event) => {
    event.preventDefault();
    console.log("Signin function executed", formData);
    let responseData;

    try {
      const response = await fetch('http://localhost:8000/signup', {
        method: 'POST', 
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(formData),
      });

      responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        console.log("Signin function executed");
        alert("You are logged in... WELCOME TO ... !!");
        console.log("button clicked");
        navigate('/home');
      } else {
        alert("Signup failed, please try again."+responseData.error);
      }

    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup.");
    }
  };

  const toggleForm = (formType) => {
    setLoginFormVisible(formType === 'login');
    setLostPasswordFormVisible(formType === 'lostPassword');
  };

  return (
    <section className='w2'> 
    
      <div className="form-container">
        <h1>Signin</h1>
        <form className={isLoginFormVisible ? 'login-form' : 'login-form form-hidden'} onSubmit={signin1}>
        <div className="control">
            <label htmlFor="email">Username</label>
            <input 
                  name='username' 
                  value={formData.username} 
                  onChange={changeHandle} 
                  type="text" 
                  placeholder="Name*" 
                  className="form-control" 
                  required 
                />
          </div>
          <div className="control">
            <label htmlFor="email">Email</label>
            <input name='email' value={formData.email} onChange={changeHandle} placeholder="Email*"  type="email" id="email" required />
          </div>
          <div className="control">
            <label htmlFor="psw">Password</label>
            <input name='password' value={formData.password} onChange={changeHandle} placeholder="Password*" type="password" id="psw" required />
          </div>
          <span><input type="checkbox" /> Remember me</span>
          <div className="control">
            <button type="submit" className="btn">Signin</button>
          </div>
        </form>
        <p>
        Already Have an account:
          <Link to='/login' onClick={() => toggleForm('signin')}>Login</Link> 
        </p>

        
      </div>
    </section>
   
  );
}

export default Signup;
