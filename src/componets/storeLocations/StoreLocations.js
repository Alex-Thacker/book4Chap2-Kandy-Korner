import React, { Component } from 'react'

export default class StoreLocations extends Component {
  render() {
    return (
      <div className = "content">
        {
            this.props.storeLocations.map(storeLocation => 
                <section key={storeLocation.id}>
                <h3>{storeLocation.name}</h3>
                <h3>{storeLocation.address}</h3>
                </section>
                )
        }
      </div>
    )
  }
}
