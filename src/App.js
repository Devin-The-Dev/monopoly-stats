import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // The spaces on the board and the number of times they've been landed on
      board: 
      [
        { name:'Go', tally: 0 },
        { name: 'Mediterranean Avenue', tally: 0 },
        { name: 'Community Chest #1', tally: 0 },
        { name: 'Baltic Avenue', tally: 0 },
        { name: 'Income Tax', tally: 0 },
        { name: 'Reading Railroad', tally: 0 },
        { name: 'Oriental Avenue', tally: 0 },
        { name: 'Chance #1', tally: 0 },
        { name: 'Vermont Avenue', tally: 0 },
        { name: 'Connecticut Avenue', tally: 0 },
        { name: 'Jail', tally: 0 },
        { name: 'St. Charles Place', tally: 0 },
        { name: 'Electric Company', tally: 0 },
        { name: 'States Avenue', tally: 0 },
        { name: 'Virginia Avenue', tally: 0 },
        { name: 'Pennsylvania Railroad', tally: 0 },
        { name: 'St. James Place', tally: 0 },
        { name: 'Community Chest #2', tally: 0 },
        { name: 'Tennessee Avenue', tally: 0 },
        { name: 'New York Avenue', tally: 0 },
        { name: 'Free Parking', tally: 0 },
        { name: 'Kentucky Avenue', tally: 0 },
        { name: 'Chance #2', tally: 0 },
        { name: 'Indiana Avenue', tally: 0 },
        { name: 'Illinois Avenue', tally: 0 },
        { name: 'B. & O. Railroad', tally: 0 },
        { name: 'Atlantic Avenue', tally: 0 },
        { name: 'Ventnor Avenue', tally: 0 },
        { name: 'Water Works', tally: 0 },
        { name: 'Marvin Gardens', tally: 0 },
        { name: 'Go to jail', tally: 0 },
        { name: 'Pacific Avenue', tally: 0 },
        { name: 'North Carolina Avenue', tally: 0 },
        { name: 'Community Chest #3', tally: 0 },
        { name: 'Pennsylvania Avenue', tally: 0 },
        { name: 'Short Line Railroad', tally: 0 },
        { name: 'Chance #3', tally: 0 },
        { name: 'Park Place', tally: 0 },
        { name: 'Luxury Tax', tally: 0 },
        { name: 'Boardwalk', tally: 0 },
      ],
      roll: 
      {
        dice1: Math.floor(Math.random() * 6) + 1,
        dice2: Math.floor(Math.random() * 6) + 1,
        doubles: (dice1, dice2) => { return dice1 === dice2 },
        sum: (dice1, dice2) => 
        { 
          // (startingSpaceIndex + rollValue) % this.state.board.length
          return dice1 + dice2 
        }
      },
    }
  }
    
  render(){
    let index = 0;
    index = (index + this.state.roll.sum(this.state.roll.dice1, this.state.roll.dice2)) % this.state.board.length
    const token = this.state.board[index];

    return (
      <div className="App">
        <h1>Monopoly Stats</h1>
        <h2>Stretegy A</h2>
          <table>
              <tr>
                <th></th>
                <th colspan="2">n = 1,000</th>
                {/* <th colspan="2">n = 10,000</th>
                <th colspan="2">n = 100,000</th>
                <th colspan="2">n = 1,000,000</th> */}
              </tr>
              <tr>
                <td>Properties</td>
                <td>Count</td>
                <td>Percentage</td>
                {/* <td>Count</td>
                <td>Percentage</td>
                <td>Count</td>
                <td>Percentage</td>
                <td>Count</td>
                <td>Percentage</td> */}
            </tr>
            {
            this.state.board.map((space) => 
            {
              return (
                <tr>
                  <td>{ space.name }</td>
                  <td>{ space.tally }</td>
                  <td>{ (space.tally / 1000).toFixed(2) }</td>
                </tr>
              );  
            })
          }
          </table>
          <p>{ this.state.roll.dice1 }</p>
          <p>{ this.state.roll.dice2 }</p>
          <p>{ this.state.roll.doubles(this.state.roll.dice1, this.state.roll.dice2) ? "Doubles" : "Not Doubles" }</p>
          <p>{ this.state.roll.sum(this.state.roll.dice1, this.state.roll.dice2) }</p>
          <p>{ token.name } - { token.tally += 1 }</p>
      </div>
    );
  };

}

export default App;
