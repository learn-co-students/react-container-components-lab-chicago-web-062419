import React, { Component } from 'react';

class MovieSearch extends Component {
    constructor(){
        super()
        this.state = {
            query: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleSubmit(this.state.query)
        this.setState({
            query: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input type="text" name="query" onChange={this.handleChange} value={this.state.query}></input>
                    <input  type="submit"></input>
                </form>
            </div>
        );
    }
}

export default MovieSearch;