import React, { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log('Logging in with:', { email, password });
    alert('Login Successful!');

    localStorage.setItem('user',JSON.stringify({email}));
    navigate('/')
  };

  const handleLogout=()=>{
    localStorage.removeItem('user')
    alert('Logged out successfully')
    navigate('/login')
  }

  function handleGoBack(){
    navigate('/')
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {/* login button */}
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
            <p className="text-center mt-3">
              Don't have an account? <NavLink to='/register'>Register here</NavLink>
            </p>
            {/* logout button */}
            {localStorage.getItem('user')&& (
                <button className='btn btn-outline-danger w-100 mt-4' onClick={handleLogout}>
                    Logout
                </button>
            )}

            {/* go back button */}
            <button className='btn btn-outline-primary w-100 mt-3' onClick={handleGoBack}>
                Back To Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
