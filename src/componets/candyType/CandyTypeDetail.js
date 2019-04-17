import React, { Component } from 'react'

export default class CandyTypeDetail extends Component {
  render() {
    return (
      <div className="content">
        {this.props.individualCandie.name }
            {" "}of type:{" "}
            {this.props.candyTypes.find(candyType => {return candyType.id === this.props.individualCandie.candyTypeId
            }).type
            }
            <button onClick={() => this.props.deleteCandy(this.props.individualCandie.id)}>Delete</button>
      </div>
    )
  }
}
