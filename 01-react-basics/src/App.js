import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
    constructor () {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        };
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
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(
            monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className="App">
                <input
                    type="search"
                    placeholder='Search Monsters..'
                    onChange={e => this.setState({ searchField: e.target.value })}
                />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
