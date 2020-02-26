import React, { Component } from 'react';

class People extends Component {
    componentDidMount() {
        console.log(this.props.match);
    }
    render() {
        return (
            <h1>people.</h1>
        )
    }
}

export default People;