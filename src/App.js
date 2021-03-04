import React, {Component} from 'react';
import {Cardlist} from './components/card-list/card-list.component';
import {Searchbox} from './components/search-box/search-box.component';

import './App.css';


class App extends Component{
       constructor(){
            super();
            this.state = { 
                          monsters: [],
                          searchField: ''
            }
       }
       componentDidMount(){
                 fetch('https://jsonplaceholder.typicode.com/users')
                 .then(response => response.json())
                 .then(users => this.setState({monsters: users}))
       }
       handleChange = (e) => {
                          this.setState({searchField: e.target.value})
       }
       render(){
                  const { monsters, searchField } = this.state;
                  const filteredMonsters = monsters.filter((monster) => monster.name.includes(searchField))
        return (
          <div className="App">
          <h1>Welcome to Monster List</h1>
          <h2>Welcome to my list</h2>
          <Searchbox placeholder = 'search monsters' handleChange={this.handleChange} />
          <Cardlist monsters = {filteredMonsters} />
          </div>

        );       
       }
}


export default App;
