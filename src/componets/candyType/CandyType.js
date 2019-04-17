import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class CandyType extends Component {
  render() {
    return (
      <div className = "content">
        {
    this.props.individualCandies.map(individualCandie =>
        <div key={individualCandie.id}>
            <Link to={`/individualCandie/${individualCandie.id}`}>{individualCandie.name }</Link>
            {" "}of type:{" "}
            {this.props.candyTypes.find(candyType => {return candyType.id === individualCandie.candyTypeId
            }).type
            }
            <button onClick={() => this.props.deleteCandy(individualCandie.id)}>Delete</button>
        </div>
    )
}
      </div>
    )
  }
}
