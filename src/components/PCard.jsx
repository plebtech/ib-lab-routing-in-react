import React, { Component } from 'react';

class PCard extends Component {
    render() {
        return (
            <div className="card">
                <h2>{this.props.name}</h2>
                <h4>
                    <span>age: {this.props.age}</span>
                    <span>gender: {this.props.gender}</span>
                </h4>
                <p><a href={this.props.url} target="_new">View {this.props.name}'s info</a></p>
            </div>
        )
    }
}

export default PCard;