import React from 'react'
import './signIn.css'
const SignIn = ({ onRouteChange }) => {
  return (
    <div className="form-container">
      <form action="" className="form">
        <h1 className="form-heading"> Sign In </h1>
        <div className="input-container">
          <label htmlFor="email">Email</label> <br />
          <input type="email" placeholder="Email" name="email" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label> <br />
          <input type="password" placeholder="Password" name="password" />
        </div>
        <button
          className="primary"
          type="submit"
          onClick={() => onRouteChange('home')}
        >
          Sign In
        </button>
        <button className="secondary" onClick={() => onRouteChange('register')}>
          {' '}
          Register{' '}
        </button>
      </form>
    </div>
  )
}

export default SignIn
