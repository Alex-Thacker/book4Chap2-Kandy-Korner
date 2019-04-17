import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Employees extends Component {
  render() {
    return (
      <div className = "content">
        {
            this.props.employees.map(employee => 
                <section key={employee.id}>
                <Link to={`/employees/${employee.id}`}>{employee.name}</Link>
                <button onClick={() => this.props.deleteEmployee(employee.id)}>Delete</button>
                </section>
                )
        }
      </div>
    )
  }
}
