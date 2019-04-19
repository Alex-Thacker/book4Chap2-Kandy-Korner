import React, { Component } from 'react'

export default class CandyTypeForm extends Component {
    state = {
        name: "",
        candyTypeId: "1"
    }

    handleChange = event => {
        let newState = {}
        newState[event.target.id] = event.target.value
        this.setState(newState)
    }

    postNewItem = event => {
        event.preventDefault()

        let object = {
            name: this.state.name,
            candyTypeId: Number(this.state.candyTypeId)
        }

        this.props.postCandy(object)
            .then(() => this.props.history.push("/"))
    }

    render() {
        return (
            <React.Fragment>
                <form className="content">
                    <label>Add new candy</label>
                    <input type="text" onChange={this.handleChange} id="name" />
                    <label>Candy Type</label>
                    <select defaultValue="" name="candyTypeId" id="candyTypeId" onChange={this.handleChange}>
                        {this.props.candyType.map(candyType => (
                            <option key={candyType.id} id={candyType.id} value={candyType.id}>{candyType.type}</option>
                        ))}
                    </select>
                    <button type="submit" onClick={this.postNewItem}>Submit</button>
                </form>
            </React.Fragment>
        )
    }
}
