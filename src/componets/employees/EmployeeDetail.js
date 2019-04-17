import React, { Component } from 'react'

export default class EmployeeDetail extends Component {
  render() {
    return (
      <div className="content">
        {this.props.employee.name}
        <button onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Delete</button>
      </div>
    )
  }
}
