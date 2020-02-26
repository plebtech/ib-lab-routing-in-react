import React, { Component } from 'react';

class Home extends Component {
    componentDidMount() {
        console.log(this.props.match);
    }
    render() {
        return (
            <>
                <h1>welcome.</h1>
                <h2>routing the studio ghibli api</h2>
                <p>this is a demonstration of routing in react, implementing RESTful api calls to the studio ghibli film catalog.</p>
                <p>use the buttons above to view various sorted data. 'films' returns the studio's body of work, 'people' returns a manifest of characters, and so on.</p>
            </>
        )
    }
}

export default Home;