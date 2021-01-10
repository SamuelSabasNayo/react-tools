import React, { Component } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>{(authContext) => (
        <ThemeContext.Consumer>{(themeContext) => {
          const { isAuthenticated, toggleAuth } = authContext;
          const { isLightTheme, light, dark } = themeContext;
          const theme = isLightTheme ? light : dark;
          
          return(
            <nav
            style={{ background: theme.ui , color: theme.syntax }}
            >
              <h1>Context App</h1>
              <div onClick={toggleAuth}>
                { isAuthenticated ? 'Logged in' : 'Logged out' }
              </div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          )
        }}
        </ThemeContext.Consumer>
      )}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;




// import React, { Component } from 'react';
// import { ThemeContext } from '../contexts/ThemeContext';

// class Navbar extends Component {
//   static contextType = ThemeContext;
  
//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
    
//     return (
//       <nav
//         style={{ background: theme.ui , color: theme.syntax }}
//       >
//           <h1>Context App</h1>
//           <ul>
//               <li>Home</li>
//               <li>About</li>
//               <li>Contact</li>
//           </ul>
//       </nav>
//     );
//   }
// }

// export default Navbar;