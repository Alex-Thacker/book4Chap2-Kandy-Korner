import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = event => {
        let newState = {}
        newState[event.target.id] = event.target.value
        this.setState(newState)
    }

    handleLogin = event => {
        event.preventDefault()

        sessionStorage.setItem("valid", 
            JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        )
        this.props.history.push("/")
    }

  render() {
    return (
      <React.Fragment>
        <form className="content">
            <h1>Login</h1>
            <label>Email: </label>
            <input onChange={this.handleChange} type="email" id="email" />
            <label>Password: </label>
            <input onChange={this.handleChange} type="password" id="password" />
            <button onClick={this.handleLogin}>Login!</button>
        </form>
      </React.Fragment>
    )
  }
}
