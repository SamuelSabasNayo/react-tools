import { icon } from '@fortawesome/fontawesome-svg-core';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Landing } from '../components';

const mockHistoryPush = jest.fn();

describe('<Landing />', () => {
  test('it should render h1', () => {
    render(
      <Router>
        <Landing />
      </Router>);

    expect(document.getElementsByClassName('landing-page').length).not.toBeNull();
    expect(document.getElementsByClassName('h1').length).not.toBeNull();
    expect(document.getElementsByClassName('button').length).not.toBeNull();
  });
  
  test('should navigate when clicked', () => {
    const { getAllByRole } = render(
      <Router>
        <Landing />
      </Router>
    );
  });
});
