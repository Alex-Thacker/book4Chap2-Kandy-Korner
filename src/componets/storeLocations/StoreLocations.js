import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class StoreLocations extends Component {
  render() {
    return (
      <div className = "content">
        {
            this.props.storeLocations.map(storeLocation => 
                <section key={storeLocation.id}>
                <Link to={`/stores/${storeLocation.id}`}>{storeLocation.name}<br></br>{storeLocation.address}</Link>
                <button onClick={() => this.props.deleteLocation(storeLocation.id)}>Delete</button>
                </section>
                )
        }
      </div>
    )
  }
}
