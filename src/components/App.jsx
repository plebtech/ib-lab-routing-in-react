import React, { Component } from 'react';
import 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Films from './Films.jsx';
import People from './People.jsx';
import Page4 from './Page4.jsx';
import Page5 from './Page5.jsx';

class App extends Component {
    render() {
        return (
            <Router>
                <>
                    <div id="controls">
                        <Link to="/">go home</Link>
                        <Link to="films">view films</Link>
                        <Link to="people">view people</Link>
                        <Link to="page4">go to page 4</Link>
                        <Link to="page5">go to page 5</Link>
                    </div>
                    <div id="panel">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/films" component={Films} />
                            <Route path="/people" component={People} />
                            <Route path="/page4" component={Page4} />
                            <Route path="/page5" component={Page5} />
                        </Switch>
                    </div>
                </>
            </Router>
        );
    }
}

export default App;