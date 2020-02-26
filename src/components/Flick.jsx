import React, { Component } from 'react';
import FCard from './FCard';

class Flick extends Component {
    constructor() {
        super();
        this.state = {
            film: '',
        }
    }
    componentDidMount() {
        const ID = this.props.match.params;
        fetch('http://studioghibli.herokuapp.com/films/' + ID)
            .then(res => res.json())
            .then(res => this.setState({ film: res }));
    }
    render() {
        return (
            <h1>this is the fourth page.</h1>
        )
    }
}

export default Flick;