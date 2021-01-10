import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
  static contextType = ThemeContext;
  
  render() { 
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div className="book-list"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <ul>
          <li style={{ background: theme.ui }}>Understanding Space: Introduction To Aeronautics</li>
          <li style={{ background: theme.ui }}>Introduction to Rocket Science and Engineering</li>
          <li style={{ background: theme.ui }}>Space Mission Engineering - The New SMAD</li>
        </ul>
      </div>
    );
  }
}

export default BookList;