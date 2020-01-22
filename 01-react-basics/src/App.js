import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
    constructor () {
        super();

        this.state = { monsters: [] };
    }

    async componentDidMount () {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await response.json();
            this.setState({ monsters: users });
        } catch (error) {
            console.log(error);
        }
    }

    render () {
        return (
            <div className="App">
                <CardList name='Aditya'>
                    {
                        this.state.monsters.map(monster =>
                            <h1 key={monster.id}>{monster.name}</h1>
                        )
                    }
                </CardList>
            </div>
        );
    }
}

export default App;
