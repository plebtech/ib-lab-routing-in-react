import React, { Component } from 'react';
import FCard from './FCard.jsx';

class Films extends Component {
    constructor() {
        super();
        this.state = {
            films: [],
        }
    }
    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then(res => (res.json()))
            .then(object => this.setState({ films: object }))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <>
                <h1>films of studio ghibli.</h1>
                {this.state.films.map(film => {
                    return (
                        <FCard
                            key={film.id}
                            film={film}
                        />
                    )
                })}
            </>
        )
    }
}

export default Films;