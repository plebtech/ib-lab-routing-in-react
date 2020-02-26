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
        fetch('http://ghibliapi.herokuapp.com/people/')
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
                            id={person.id}
                            name={person.name}
                            url={person.url}
                            age={person.age}
                            gender={person.gender}
                        />
                    )
                })}
            </>
        )
    }
}

export default People;