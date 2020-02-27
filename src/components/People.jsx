import React, { Component } from 'react';
import PCard from './PCard.jsx';

class People extends Component {
    constructor() {
        super();
        this.state = {
            people: [],
        }
    }
    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/people/')
            .then(res => (res.json()))
            .then(object => this.setState({ people: object }))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <>
                <h1>characters of studio ghibli.</h1>
                {this.state.people.map((person) => {
                    return (
                        <PCard
                            key={person.id}
                            person={person}
                        />
                    )
                })}
            </>
        )
    }
}

export default People;