import React, { Component } from 'react'

export default class EmployeeForm extends Component {
    state = {
        name: ""
    }

    handleChange = event => {
        let newState = {}
        newState[event.target.id] = event.target.value
        this.setState(newState)
    }

    postNewItem = event => {
        event.preventDefault()

        let object = {
            name: this.state.name
        }

        this.props.postEmployee(object)
        .then(() => this.props.history.push("/employees"))

    }

  render() {
    return (
      <React.Fragment>
        <form className="content">
            <label>New Employee Name</label>
            <input type="text" onChange={this.handleChange} id="name" />
            <button type="submit" onClick={this.postNewItem}>Submit</button>
        </form>
      </React.Fragment>
    )
  }
}
