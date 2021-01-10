import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {render, cleanup} from '@testing-library/react';
import AuthContextProvider from '../contexts/AuthContext';
import App from '../App';

beforeEach(() => cleanup);

describe('<App />', ()=> {
  it('Should render the component', () => {
    render(
      <AuthContextProvider>
        <Router>
          <App />
        </Router>
      </AuthContextProvider>
    );
    
    expect(<App />). not.toBeNull();
  } );
});