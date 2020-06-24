import React from 'react';

export const Resgistration = () => {
  return (
    <div className="auth-container">
      <h2 style={{textAlign:"center"}}>Sign Up Component</h2>

      <form>
        <div className="form-control">
          <label htmlFor="email">Username</label>
          <input type="text" placeholder="Enter username..."></input>
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter email..."></input>
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="********"></input>
        </div>
        <div className="form-control">
          <label htmlFor="password2">Confirm password</label>
          <input type="password" placeholder="********"></input>
        </div>

        <button className="btn">Sign Up</button>
      </form>

      <p style={{textAlign:"center"}}>Already have an account? Sign up <a href="#">here</a>.</p>
    </div>
  )
}
