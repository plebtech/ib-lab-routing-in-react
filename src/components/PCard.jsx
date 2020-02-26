import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PCard extends Component {
    render() {
        return (
            <div className="card">
                <h2>{this.props.name}</h2>
                <h4>
                    <span>age: {this.props.age}</span>
                    <span>gender: {this.props.gender}</span>
                </h4>
                <h4><Link to={`/people/${this.props.id}`}>
                    learn more.
                </Link></h4>
            </div>
        )
    }
}

export default PCard;