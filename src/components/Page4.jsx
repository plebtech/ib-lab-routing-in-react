import React, { Component } from 'react';

class Page4 extends Component {
    componentDidMount() {
        console.log(this.props.match);
    }
    render() {
        return (
            <h1>this is the fourth page.</h1>
        )
    }
}

export default Page4;