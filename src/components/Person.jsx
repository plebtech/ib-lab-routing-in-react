import React, { Component } from 'react';

class Person extends Component {
    constructor() {
        super();
        this.state = {
            person: '',
        }
    }
    componentDidMount() {
        const ID = this.props.match.params.id;
        fetch('https://ghibliapi.herokuapp.com/people/' + ID)
            .then(res => res.json())
            .then(res => this.setState({ person: res }));
    }
    render() {
        console.log(this.state.person);
        return (
            <div className="card">
                <h2>{this.state.person.name}</h2>
                <h4>
                    <span>age: {this.state.person.age}</span>
                    <span>gender: {this.state.person.gender}</span>
                </h4>
                <p><a href={this.state.person.url} target="_new">view raw data.</a></p>
            </div>
        )
    }
}

export default Person;