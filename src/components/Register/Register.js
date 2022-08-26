import React from 'react'
import '../SignIn/signIn.css'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }
  onNameChange = (event) => {
    this.setState({ name: event.target.value })
  }
  onEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }
  onSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:8000/register', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // if (data === 'Success') {
        //   this.props.onRouteChange('signin')
        // }
        console.log(data)
      })
  }
  render() {
    return (
      <div className="form-container">
        <form action="" className="form">
          <h1 className="form-heading"> Register </h1>
          <div className="input-container">
            <label htmlFor="name">Name</label> <br />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={this.onNameChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label> <br />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={this.onEmailChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label> <br />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.onPasswordChange}
            />
          </div>
          <button className="primary" onClick={this.onSubmit}>
            Register{' '}
          </button>
        </form>
      </div>
    )
  }
}

export default Register
