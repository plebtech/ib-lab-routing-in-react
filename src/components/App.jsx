import React, { Component } from 'react';
import 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Films from './Films.jsx';
import People from './People.jsx';
import Flick from './Flick.jsx';
import Person from './Person.jsx';

class App extends Component {
    render() {
        return (
            <Router>
                <>
                    <div id="controls">
                        <Link to="/">go home</Link>
                        <Link to="films">view films</Link>
                        <Link to="people">view people</Link>
                    </div>
                    <div id="panel">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/films" component={Films} />
                            <Route path="/people" component={People} />
                            <Route path="/films/:id" component={Flick} />
                            <Route path="/people/:id" component={Person} />
                        </Switch>
                    </div>
                </>
            </Router>
        );
    }
}

export default App;