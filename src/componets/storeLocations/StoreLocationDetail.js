import React, { Component } from 'react'

export default class StoreLocationDetail extends Component {
  render() {
    return (
      <div className="content">
        <h3>{this.props.store.name}</h3>
        <h3>{this.props.store.address}</h3>
        <button onClick={() => this.props.deleteLocation(this.props.store.id)}>Delete</button>
      </div>
    )
  }
}
