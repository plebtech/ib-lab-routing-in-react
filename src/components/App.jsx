import React, { Component } from 'react';
import 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div id="app-container">
                <h1>returned.</h1>
            </div>
        );
    }
}

export default App;