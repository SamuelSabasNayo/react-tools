import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }
  
  render () {
    let wordDisplay
    if (this.state.isLoggedIn === true) {
      wordDisplay = 'in'
    } else {
      wordDisplay = 'out'
    }
    return (
      <div className="App">
        <h1>You are currently logged {wordDisplay}</h1>
      </div>
    );
  }
}

export default App;
