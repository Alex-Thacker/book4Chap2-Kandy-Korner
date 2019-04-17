import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { withRouter } from "react-router"
import StoreLocations from './storeLocations/StoreLocations'
import Employees from "./employees/Employees"
import CandyType from "./candyType/CandyType"
import CandyTypeManager from "../modules/CandyTypeManager"
import EmployeeManager from "../modules/EmployeeManager"
import IndividualCandyManager from "../modules/IndividualCandyManager"
import StoreLocationManager from "../modules/StoreLocationManager"
import CandyTypeDetail from "./candyType/CandyTypeDetail"
import EmployeeDetail from "./employees/EmployeeDetail"
import StoreLocationDetail from "./storeLocations/StoreLocationDetail"

class ApplicationView extends Component {
  //employees,candyTypes,individualCandies
  componentDidMount() {
    const newState = {}

    StoreLocationManager.getAll()
      .then(storeLocations => newState.storeLocations = storeLocations)
    EmployeeManager.getAll()
      .then(employees => newState.employees = employees)
    CandyTypeManager.getAll()
      .then(candyTypes => newState.candyType = candyTypes)
    IndividualCandyManager.getAll()
      .then(individualCandies => newState.individualCandies = individualCandies)

      .then(() => this.setState(newState))
  }

  deleteCandy = (id) => {
    return fetch (`http://localhost:5002/individualCandies/${id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(() => fetch("http://localhost:5002/individualCandies"))
      .then(r => r.json())
      .then(obj => {
        this.props.history.push("/")
        this.setState({individualCandies: obj})
      }
      )
  }

  deleteEmployee = (id) => {
    return fetch (`http://localhost:5002/employees/${id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(() => fetch("http://localhost:5002/employees"))
      .then(r => r.json())
      .then(obj => {
        this.props.history.push("/employees")
        this.setState({employees: obj})
      }
      )
  }

  deleteLocation = (id) => {
    return fetch (`http://localhost:5002/storeLocations/${id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(() => fetch("http://localhost:5002/storeLocations"))
      .then(r => r.json())
      .then(obj => {
        this.props.history.push("/stores")
        this.setState({storeLocations: obj})
      }
      )
  }

  state = {
    storeLocations: [],
    employees: [],
    candyType: [],
    individualCandies: []
  }
    
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
            return <CandyType individualCandies={this.state.individualCandies} candyTypes={this.state.candyType} deleteCandy={this.deleteCandy}/>
        }} />
        <Route exact path="/employees" render={(props) => {
            return <Employees employees={this.state.employees} deleteEmployee={this.deleteEmployee} />
        }} />
        <Route exact path="/stores" render={(props) => {
            return <StoreLocations storeLocations={this.state.storeLocations} deleteLocation={this.deleteLocation} />
        }} />
        <Route path="/individualCandie/:individualCandieId(\d+)" render={(props) => {
          let individualCandie = this.state.individualCandies.find(individualCandy => 
            individualCandy.id === parseInt(props.match.params.individualCandieId)
          )
          return <CandyTypeDetail individualCandie={individualCandie} deleteCandy={this.deleteCandy} candyTypes={this.state.candyType} />
        }} />
        <Route path="/employees/:employeeId(\d+)" render={(props) => {
          let employee = this.state.employees.find(employee => 
            employee.id === parseInt(props.match.params.employeeId)
            )
          return <EmployeeDetail employee={employee} deleteEmployee={this.deleteEmployee} />
        }} />
        <Route path="/stores/:storeId(\d+)" render={(props) => {
          let store = this.state.storeLocations.find(store =>
            store.id === parseInt(props.match.params.storeId)
            )
            return <StoreLocationDetail store={store} deleteLocation={this.deleteLocation} />
        }} />
      </React.Fragment>
    )
  }
}

export default withRouter(ApplicationView)