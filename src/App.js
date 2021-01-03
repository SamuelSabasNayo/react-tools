import React, { Component } from "react";

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }
  
  render() {
  let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
  let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
    return (
      <div style={{ width: '10%', margin: 'auto' }}>
        <button onClick={this.handleClick}>{buttonText}</button>
        <h2>{displayText}</h2>
      </div>
    )
  }
}

export default App;


// import React, { Component } from 'react';

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
  
//   handleClick() {
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1
//       }
//     })
//   }
  
//   render () {
//     return (
//       <div className="App"
//         style={{
//           margin: 'auto',
//           width: '10%'
//         }}
//       >
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Change!</button>
//       </div>
//     );
//   }
// }

// export default App;



// import React, { Component } from 'react';

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
  
//   handleClick() {
//     this.setState({ count: 1 })
//   }
  
//   render () {
//     return (
//       <div className="App"
//         style={{
//           margin: 'auto',
//           width: '10%'
//         }}
//       >
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Change!</button>
//       </div>
//     );
//   }
// }

// export default App;


// import React, { Component } from 'react';

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0
//     }
//   }
  
//   handleClick() {
//     console.log('I am working!')
//   }
  
//   render () {
//     return (
//       <div className="App"
//         style={{
//           margin: 'auto',
//           width: '10%'
//         }}
//       >
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Change!</button>
//       </div>
//     );
//   }
// }

// export default App;

// Changing state


// import React from 'react';

// const handleClick = () => {
//   alert('I was clicked');
// };

// const App = () => {
//   return (
//     <div>
//       <img onMouseOver={() => console.log('Hovered')} src="https://www.fillmurray.com/200/100" />
//       <br />
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   )
// }

// export default App;

// // Handle Events


// import React, { Component } from 'react';

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoggedIn: false
//     }
//   }
  
//   render () {
//     let wordDisplay
//     if (this.state.isLoggedIn) {
//       wordDisplay = 'in'
//     } else {
//       wordDisplay = 'out'
//     }
//     return (
//       <div className="App">
//         <h1>You are currently logged {wordDisplay}</h1>
//       </div>
//     );
//   }
// }

// export default App;

// // State
