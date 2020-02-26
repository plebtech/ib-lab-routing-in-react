import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FCard extends Component {
    render() {
        return (
            <div className="card">
                <h2>{this.props.title}</h2>
                <h4>
                    <span>rt: {this.props.rt}</span>
                    <span>release: {this.props.release}</span>
                </h4>
                <p>{this.props.description}</p>
                <h4><Link to={`/films/${this.props.id}`}>
                    learn more.
                </Link></h4>
            </div>
        )
    }
}

export default FCard;