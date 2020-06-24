import React from 'react';

export const Login = () => {
  return (
    <div className="auth-container">
      <h2 style={{textAlign:"center"}}>Sign In Component</h2>

      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter email..."></input>
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="********"></input>
        </div>
        
        <button className="btn">Sign In</button>
      </form>

      <p style={{textAlign:"center"}}>Don't have an account? Sign up <a href="#">here</a>.</p>
    </div>
  )
}
