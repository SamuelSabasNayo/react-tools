// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
const sum = (a, b) => a + b;

test('Add 1 and 2', () => {
  expect(sum(1, 2)).toEqual(3);
});
