import React, { Component } from 'react'

export default class CandyType extends Component {
  render() {
    return (
      <div>
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
