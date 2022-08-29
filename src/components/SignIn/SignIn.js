import React from 'react'
import './signIn.css'

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signInEmail: '',
      signInPassword: '',
    }
  }
  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value })
  }
  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value })
  }
  onSubmitSignIn = (event) => {
    event.preventDefault()
    fetch('http://localhost:8000/signin', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user)

          this.props.onRouteChange('home')
        }
      })
    // console.log(this.state)
  }

  render() {
    const { onRouteChange } = this.props
    return (
      <div className="form-container">
        <form action="" className="form">
          <h1 className="form-heading"> Sign In </h1>
          <div className="input-container">
            <label htmlFor="email">Email</label> <br />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={this.onEmailChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label> <br />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.onPasswordChange}
              required
            />
          </div>
          <button
            className="primary"
            type="submit"
            onClick={this.onSubmitSignIn}
          >
            Sign In
          </button>
          <button
            className="secondary"
            onClick={() => onRouteChange('register')}
          >
            {' '}
            Register{' '}
          </button>
        </form>
      </div>
    )
  }
}

export default SignIn
