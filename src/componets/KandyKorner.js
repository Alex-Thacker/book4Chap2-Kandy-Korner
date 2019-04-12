import React, { Component } from 'react'
import CandyType from "./candyType/CandyType"
import Employees from "./employees/Employees"
import StoreLocations from "./storeLocations/StoreLocations"

export default class KandyKorner extends Component {
    storeLocations = [
        { id: 1, name: "wonka factory", address: "123 wonka fonka lane"},
        { id: 2, name: "fonka wactory", address: "321 we sell booze lane"}
    ]

    employees = [
        { id: 1, name: "jack the bomber"},
        { id: 2, name: "stacy the killer"},
        { id: 3, name: "bobby blue heyyy"}
    ]

    candyType = [
        { id: 1, type: "sugar crazy"},
        { id: 2, type: "poision"},
        { id: 3, type: "dont eat this"}
    ]

    individualCandies = [
        { id: 1, name: "hot dog"},
        { id: 2, name: "not candy"},
        { id: 3, name: "anti freeze"}
    ]
    
    state = {
      storeLocations: this.storeLocations,
      employees: this.employees,
      candyType: this.candyType,
      individualCandies: this.individualCandies
    }

  render() {
    return (
      <div>
        <CandyType candyType={this.state.candyType} />
        <Employees employees={this.state.employees} />
        <StoreLocations storeLocations={this.state.storeLocations} />

      </div>
    )
  }
}


// Store locations
// Employees
// Candy types
// Individual candies