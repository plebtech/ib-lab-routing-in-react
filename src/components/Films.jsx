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
        fetch('http://ghibliapi.herokuapp.com/films/')
            .then(res => (res.json()))
            .then(object => this.setState({ films: object }))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <>
                <h1>films of studio ghibli.</h1>
                {this.state.films.map(film => {
                    return <FCard
                        key={film.id}
                        title={film.title}
                        description={film.description}
                        release={film.release_date}
                        rt={film.rt_score}
                    />
                })}
            </>
        )
    }
}

export default Films;