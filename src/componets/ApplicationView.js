import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import StoreLocations from './storeLocations/StoreLocations'
import Employees from "./employees/Employees"
import CandyType from "./candyType/CandyType"
import CandyTypeManager from "../modules/CandyTypeManager"
import EmployeeManager from "../modules/EmployeeManager"
import IndividualCandyManager from "../modules/IndividualCandyManager"
import StoreLocationManager from "../modules/StoreLocationManager"

export default class ApplicationView extends Component {
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
      .then(obj => this.setState({
        individualCandies: obj
      }))
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
        <Route path="/employees" render={(props) => {
            return <Employees employees={this.state.employees} />
        }} />
        <Route path="/stores" render={(props) => {
            return <StoreLocations storeLocations={this.state.storeLocations} />
        }} />
      </React.Fragment>
    )
  }
}

// Stores
// Employees
// Candies--
// render() {
//     return (
//         <React.Fragment>
//             <Route exact path="/" render={(props) => {
//                 return <LocationList locations={this.state.locations} />
//             }} />
//             <Route path="/animals" render={(props) => {
//                 return <AnimalList animals={this.state.animals} />
//             }} />
//             <Route path="/employees" render={(props) => {
//                 return <EmployeeList employees={this.state.employees} />
//             }} />
//             <Route path="/owners" render={(props) => {
//                 return <Owners owners={this.state.owners} />
//             }} />
//         </React.Fragment>
//     )
// }