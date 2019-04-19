import React, { Component } from 'react'
import { Link } from "react-router-dom"
import EmployeeCard from "../employees/EmployeeCard"

export default class StoreLocations extends Component {
  render() {
    return (
      <div className="content">
        {
          this.props.storeLocations.map(storeLocation =>
            <div key={storeLocation.id}>
              <section>
                <Link to={`/stores/${storeLocation.id}`}>{storeLocation.name}<br></br>{storeLocation.address}</Link>
                <button onClick={() => this.props.deleteLocation(storeLocation.id)}>Delete</button>
              </section>
              <div>
                {
                  this.props.employees
                    .filter(employee => employee.storeLocationId === storeLocation.id)
                    .map(employee => <EmployeeCard key={employee.id} employee={employee} />)
                }
              </div>
            </div>
          )
        }
      </div>
    )
  }
}
