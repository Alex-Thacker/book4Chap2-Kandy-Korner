import React, { Component } from 'react'

export default class EmployeeCard extends Component {
  render() {
    return (
      <div key={this.props.employee.id}>
        {this.props.employee.name}
      </div>
    )
  }
}
