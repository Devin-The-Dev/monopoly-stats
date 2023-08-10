const roll = {
    dice1: Math.floor(Math.random() * 6) + 1,
    dice2: Math.floor(Math.random() * 6) + 1,
    doubles: (dice1, dice2) => { return dice1 === dice2 },
    sum: (dice1, dice2) => 
    { 
      // (startingSpaceIndex + rollValue) % this.state.board.length
      return dice1 + dice2 
    }
  }

  export default roll;