import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PCard extends Component {
    render() {
        return (
            <div className="card">
                <h2>{this.props.person.name}</h2>
                <h4>
                    <span>age: {this.props.person.age}</span>
                    <span>gender: {this.props.person.gender}</span>
                </h4>
                <h4><Link to={`/people/${this.props.person.id}`}>
                    learn more.
                </Link></h4>
            </div>
        )
    }
}

export default PCard;