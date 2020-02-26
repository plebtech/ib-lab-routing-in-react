import React, { Component } from 'react';
import FCard from './FCard.jsx';

const BASE_URL = 'http://ghibliapi.herokuapp.com/';

class Films extends Component {
    constructor() {
        super();
        this.state = {
            films: [],
        }
    }
    componentDidMount() {
        fetch(BASE_URL + 'films/')
            .then(res => (res.json()))
            .then(res => this.setState({ films: res }))
            .catch(err => console.log(err));
            console.log(this.state.films);
    }
    // loadFilms() {
    //     fetch(BASE_URL + 'films/')
    //         .then(response => (response.json()))
    //         .then(data => this.setState({ films: data }))
    //         .catch(err => console.log(err));
    // }
    render() {
        return (
            <>
                <h1>films.</h1>
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