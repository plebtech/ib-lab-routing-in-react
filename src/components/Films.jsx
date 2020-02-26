import React, { Component } from 'react';

class Films extends Component {
    componentDidMount() {
        console.log(this.props.match);
    }
    render() {
        return (
            <h1>films.</h1>
        )
    }
}

export default Films;