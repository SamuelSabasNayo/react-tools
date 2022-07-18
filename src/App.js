import React, { Component } from 'react'

export class App extends Component {
	constructor() {
		super()
		this.state = {
			firstName: '',
			lastName: '',
			isFriendly: false,
			gender: ''
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		const {name, value} = event.target
		this.setState({
			[name]: value
		})
	}
	
	render() {
	return (
		<form style={{margin: '20px'}}>
			<input
				type='text'
				value={this.state.firstName}
				name='firstName'
				placeholder='First Name'
				onChange={this.handleChange}
			/>
			<br /><br />
			<input
				type='text'
				value={this.state.lastName}
				name='lastName'
				placeholder='Last Name'
				onChange={this.handleChange}
			/>
			<br /><br />
			<textarea />
			<br /><br />
			<label>
				<input
					type='checkbox'
					name='isFriendly'
					checked={this.state.isFriendly}
					onChange={this.handleChange}
				/> Is friendly ?
			</label>
			<br /><br />
			<label>
				<input
					type='radio'
					name='gender'
					value='male'
					checked={this.state.gender === 'male'}
					onChange={this.handleChange}
				/> Male
			</label>
			<br /><br />
			<label>
				<input
					type='radio'
					name='gender'
					value='female'
					checked={this.state.gender === 'female'}
					onChange={this.handleChange}
				/> Female
			</label>
			
			<h1>{this.state.firstName} {this.state.lastName}</h1>
			<h2>Your gender is {this.state.gender === '' ? 'not specified' : this.state.gender}</h2>

			
		</form>
	)
	}
}

export default App


// import React, { Component } from 'react'

// export class App extends Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 			firstName: '',
// 			lastName: ''
// 		}

// 		this.handleChange = this.handleChange.bind(this)
// 	}

// 	handleChange(event) {
// 		this.setState({
// 			[event.target.name]: event.target.value
// 		})
// 	}
	
// 	render() {
// 	return (
// 		<form style={{margin: '20px'}}>
// 			<input
// 				type='text'
// 				value={this.state.firstName}
// 				name='firstName'
// 				placeholder='First Name'
// 				onChange={this.handleChange}
// 			/>
// 			<br /><br />
// 			<input
// 				type='text'
// 				value={this.state.lastName}
// 				name='lastName'
// 				placeholder='Last Name'
// 				onChange={this.handleChange}
// 			/>
// 			<h1>{this.state.firstName} {this.state.lastName}</h1>
// 		</form>
// 	)
// 	}
// }

// export default App



// import React, { Component } from 'react';
// import TodoItem from './TodoItem';
// import todosData from './todosData';

// export class App extends Component {
//     constructor () {
// 		super()
// 		this.state = {
// 			todos: todosData
// 		}
// 		this.handleChange = this.handleChange.bind(this)
// 		}

// 		handleChange = (id) => {
// 		this.setState(prevState => {
// 			const updatedTodos = prevState.todos.map(todo => {
// 			if (todo.id === id) {
// 				todo.completed = !todo.completed
// 				console.log("clicked todo", todo)
// 			}
// 			return todo
// 			})

// 			return {
// 			todos: updatedTodos
// 			}
// 		})
// 		}

// 		render() {
// 			const todoItems = this.state.todos.map(item =>
// 				<TodoItem key={item.id} item= {item}
// 				handleChange={this.handleChange}
// 				/>
// 			)

// 		return (
// 			<div className='todo-list'
// 			style={{
// 				width: 500,
// 				height: 400,
// 				margin: '100px auto'
// 			}}
// 			>
// 			{todoItems}
// 			</div>
// 		)
//     }
// }

// export default App


// import React, { Component } from "react";

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoggedIn: false
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
  
//   handleClick() {
//     this.setState(prevState => {
//       return {
//         isLoggedIn: !prevState.isLoggedIn
//       }
//     })
//   }
  
//   render() {
//   let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
//   let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
//     return (
//       <div style={{ width: '10%', margin: 'auto' }}>
//         <button onClick={this.handleClick}>{buttonText}</button>
//         <h2>{displayText}</h2>
//       </div>
//     )
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


// import React, { Component } from 'react'

// export class App extends Component {
//   constructor () {
//     super();
//     this.state = {
//       count: 0
//     };
//     this.handleClick = this.handleClick.bind(this);
//   };

//   handleClick() {
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1
//       }
//     });
//   };
  
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

// export default App


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


// import React, { Component } from 'react';
// import TodoItem from './TodoItem';
// import todosData from './todosData';

// export class App extends Component {
//   constructor () {
//     super()
//     this.state = {
//       todos: todosData
//     }
//   }

//   render() {
//     const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item= {item} />);

//     return (
//       <div className='todo-list'style={{
//         background: 'grey',
//         width: 500,
//         height: 400,
//         margin: '100px auto'
//       }}>
//         {todoItems}
//       </div>
//     )
//   }
// }

// export default App

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

// export class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoggedIn: true
//     }
//   }
  
//   render() {
//     let wordDisplay; 
//     if (this.state.isLoggedIn) {
//       wordDisplay = 'in'
//     } else {
//       wordDisplay = 'out'
//     }
    
//     return (
//       <h1>You currently logged {wordDisplay}.</h1>
//     )
//   }
// }

// export default App;

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
