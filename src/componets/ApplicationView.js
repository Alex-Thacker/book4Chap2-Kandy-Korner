import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
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
import EmployeeForm from "./employees/EmployeeForm"
import CandyTypeForm from "./candyType/CandyTypeForm"
import Login from "./authenticate/Login"

class ApplicationView extends Component {
  //employees,candyTypes,individualCandies
  componentDidMount() {
    const newState = {}

    StoreLocationManager.getAll()
      .then(storeLocations => newState.storeLocations = storeLocations)
      .then(() => EmployeeManager.getAll())
      .then(employees => newState.employees = employees)
      .then(() => CandyTypeManager.getAll())
      .then(candyTypes => newState.candyType = candyTypes)
      .then(() => IndividualCandyManager.getAll())
      .then(individualCandies => newState.individualCandies = individualCandies)

      .then(() => this.setState(newState))
  }

  deleteCandy = (id) => {
    return fetch(`http://localhost:5002/individualCandies/${id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(() => fetch("http://localhost:5002/individualCandies"))
      .then(r => r.json())
      .then(obj => {
        this.props.history.push("/")
        this.setState({ individualCandies: obj })
      }
      )
  }

  deleteEmployee = (id) => {
    return fetch(`http://localhost:5002/employees/${id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(() => fetch("http://localhost:5002/employees"))
      .then(r => r.json())
      .then(obj => {
        this.props.history.push("/employees")
        this.setState({ employees: obj })
      }
      )
  }

  deleteLocation = (id) => {
    return fetch(`http://localhost:5002/storeLocations/${id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(() => fetch("http://localhost:5002/storeLocations"))
      .then(r => r.json())
      .then(obj => {
        this.props.history.push("/stores")
        this.setState({ storeLocations: obj })
      }
      )
  }

  postEmployee = (object) => EmployeeManager.postItem(object)
  .then(() => EmployeeManager.getAll())
  .then(obj => {
    this.setState({
      employees: obj
    })
  })

  postCandy = (object) => IndividualCandyManager.postItem(object)
  .then(() => IndividualCandyManager.getAll())
  .then(obj => {
    this.setState({
      individualCandies: obj
    })
  })

  state = {
    storeLocations: [],
    employees: [],
    candyType: [],
    individualCandies: []
  }

  isLogin = () => {
    return sessionStorage.getItem("valid") !== null
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          if(this.isLogin()){
            return <CandyType individualCandies={this.state.individualCandies} candyTypes={this.state.candyType} deleteCandy={this.deleteCandy} {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/employees" render={(props) => {
          if(this.isLogin()) {
            return <Employees employees={this.state.employees} deleteEmployee={this.deleteEmployee} {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/stores" render={(props) => {
          if(this.isLogin()){
            return <StoreLocations storeLocations={this.state.storeLocations} deleteLocation={this.deleteLocation} employees={this.state.employees} />
          } else {
            return <Redirect to="/login" />
          }
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
        <Route path="/employees/newEmployeeYOOOOOOO" render={(props) => {
          return <EmployeeForm postEmployee={this.postEmployee} {...props} />
        }} />
        <Route path="/new" render={(props) => {
          return <CandyTypeForm {...props} candyType={this.state.candyType} postCandy={this.postCandy} />
        }} />
        <Route path="/login" render={(props) => {
          return <Login {...props} />
        }} />
      </React.Fragment>
    )
  }
}

export default withRouter(ApplicationView)