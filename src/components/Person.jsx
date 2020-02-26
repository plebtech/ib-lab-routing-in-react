import React, { Component } from 'react';

class Person extends Component {
    componentDidMount() {
        console.log(this.props.match);
    }
    render() {
        return (
            <h1>this is fifth page.</h1>
        )
    }
}

export default Person;