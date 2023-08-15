import { Component } from 'react';
import board from './components/board.js';
import roll from './components/dice.js';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // The spaces on the board and the number of times they've been landed on
      board: board,
      roll: roll,
    }
  }
    
  render(){
    // let index = 0;
    let index = (this.state.roll.sum(this.state.roll.dice1, this.state.roll.dice2)) % this.state.board.length
    const space = this.state.board[index];
    
    return (
      <div className="App">
        <h1>Monopoly Stats</h1>
        <h2>Stretegy A</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th colSpan="2">n = 1,000</th>
              <th colSpan="2">n = 100,000</th>
              <th colSpan="2">n = 10,000</th>
              <th colSpan="2">n = 1,000,000</th>
            </tr>
            <tr>
              <th>Properties</th>
              <th>Count</th>
              <th>Percentage</th>
              <th>Count</th>
              <th>Percentage</th>
              <th>Count</th>
              <th>Percentage</th>
              <th>Count</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.board.map((space) => 
              {
                return (
                  <tr key = {space.id}>
                    <td>{ space.name }</td>
                    {/* Cells in the columns below are the states we're changing */}
                    <td>{ space.tally }</td>
                    <td>{ (space.tally / 1000).toFixed(2) }</td>
                  </tr>
                );  
              })
            }
          </tbody>
        </table>
          <p>{ this.state.roll.dice1 }</p>
          <p>{ this.state.roll.dice2 }</p>

          <p>{ this.state.roll.doubles(this.state.roll.dice1, this.state.roll.dice2) ? "Doubles" : "Not Doubles" }</p>
          <p>{ this.state.roll.sum(this.state.roll.dice1, this.state.roll.dice2) }</p>

          <p>{ space.name } - { space.tally = space.tally + 1}</p>
      </div>
    );
  };

}

export default App;
