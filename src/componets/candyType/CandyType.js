import React, { Component } from 'react'

export default class CandyType extends Component {
  render() {
    return (
      <div className = "content">
        {
            this.props.candyType.map(candyType => 
                <section key={candyType.id}>
                    <h3>{candyType.type}</h3>
                </section>
                )
        }
      </div>
    )
  }
}
