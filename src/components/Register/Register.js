import React from 'react'
import '../SignIn/signIn.css'
const Register = ({ onRouteChange }) => {
  return (
    <div className="form-container">
      <form action="" className="form">
        <h1 className="form-heading"> Register </h1>
        <div className="input-container">
          <label htmlFor="name">Name</label> <br />
          <input type="text" placeholder="Name" name="name" />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label> <br />
          <input type="email" placeholder="Email" name="email" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label> <br />
          <input type="password" placeholder="Password" name="password" />
        </div>
        <button className="primary">Register </button>
      </form>
    </div>
  )
}

export default Register
