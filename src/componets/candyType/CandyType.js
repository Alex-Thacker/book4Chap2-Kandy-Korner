import React, { Component } from 'react'

export default class CandyType extends Component {
  render() {
    return (
      <div className = "content">
        {/* {
            this.props.individualCandies.map(individualCandie => 
                <section key={individualCandie.id}>
                    <h3>{individualCandie.name}</h3>
                </section>
                )
        } */}
        {
    this.props.individualCandies.map(individualCandie =>
        <div key={individualCandie.id}>
            {individualCandie.name }
            {" "}of type:{" "}
            {this.props.candyTypes.find(candyType => {return  candyType.id === individualCandie.candyTypeId
            }).type
            }
        </div>
    )
}
      </div>
    )
  }
}
