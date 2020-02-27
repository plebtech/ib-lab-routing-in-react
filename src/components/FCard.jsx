import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FCard extends Component {
    render() {
        return (
            <div className="card">
                <h2>{this.props.film.title}</h2>
                <h4>
                    <span>rt: {this.props.film.rt_score}</span>
                    <span>release: {this.props.film.release_date}</span>
                </h4>
                <p>{this.props.film.description}</p>
                <h4><Link to={`/films/${this.props.film.id}`}>
                    learn more.
                </Link></h4>
            </div>
        )
    }
}

export default FCard;