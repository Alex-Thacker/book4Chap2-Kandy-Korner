import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import StoreLocations from './storeLocations/StoreLocations'
import Employees from "./employees/Employees"
import CandyType from "./candyType/CandyType"

export default class ApplicationView extends Component {
    storeLocations = [
        { id: 1, name: "wonka factory", address: "123 wonka fonka lane"},
        { id: 2, name: "fonka wactory", address: "321 we sell booze lane"}
    ]

    employees = [
        { id: 1, name: "jack the bomber"},
        { id: 2, name: "stacy the killer"},
        { id: 3, name: "bobby blue heyyy"}
    ]

    candyTypes = [
        { id: 1, type: "sugar crazy"},
        { id: 2, type: "poision"},
        { id: 3, type: "dont eat this"}
    ]

    individualCandies = [
        { id: 1, candyTypeId: 1, name: "hot dog"},
        { id: 2, candyTypeId: 2, name: "not candy"},
        { id: 3, candyTypeId: 3, name: "anti freeze"}
    ]
    
    state = {
      storeLocations: this.storeLocations,
      employees: this.employees,
      candyType: this.candyTypes,
      individualCandies: this.individualCandies
    }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
            return <CandyType individualCandies={this.state.individualCandies} candyTypes={this.state.candyType} />

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