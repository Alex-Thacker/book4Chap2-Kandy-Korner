import React, { Component } from 'react'

export default class Employees extends Component {
  render() {
    return (
      <div className = "content">
        {
            this.props.employees.map(employee => 
                <section key={employee.id}>
                <h3>{employee.name}</h3>
                </section>
                )
        }
      </div>
    )
  }
}
