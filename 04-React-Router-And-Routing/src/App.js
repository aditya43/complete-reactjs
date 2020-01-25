import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const TopicsPage = props => (
    <div>
        <button onClick={() => props.history.push('/topics/12')}><h2>Topic 12</h2></button>
        <br />
        <Link to='/topics/13'><h2>Topic 13</h2></Link>
        <h1>TOPICS PAGE</h1>
    </div>
);

const TopicDetail = (props) => (
    <div>
        <h1>TOPIC DETAIL PAGE</h1>
        <h2>Topic Id: {props.match.params.topicId}</h2>
    </div>
);

function App () {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/topics' component={TopicsPage} />
                <Route path='/topics/:topicId' component={TopicDetail} />
            </Switch>
        </div>
    );
}

export default App;
