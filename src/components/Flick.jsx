import React, { Component } from 'react';

class Flick extends Component {
    constructor() {
        super();
        this.state = {
            film: '',
        }
    }
    componentDidMount() {
        const ID = this.props.match.params.id;
        fetch('https://ghibliapi.herokuapp.com/films/' + ID)
            .then(res => res.json())
            .then(res => this.setState({ film: res }));
    }
    render() {
        return (
            <div key={this.state.film.id} className="card">
                <h2>{this.state.film.title}</h2>
                <h4>
                    <span>rt: {this.state.film.rt_score}</span>
                    <span>release: {this.state.film.release_date}</span>
                </h4>
                <p>{this.state.film.description}</p>
            </div>
        )
    }
}

export default Flick;