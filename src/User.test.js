const sum = (a, b) => a + b
test('Add 3 and 4', () => {
    expect(sum(3, 4)).toEqual(7)
});


// import React from 'react';
// import { render, unmountComponentAtNode } from 'react-dom';
// import { act } from 'react-dom/test-utils';
// import User from './User';

// let container = null;

// beforeEach(() => {
//     container = document.createElement('div');
//     document.body.appendChild(container);
// });

// afterEach(() => {
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
// });

// it('renders user data', async () => {
//     const fakeUser = {
//         name: 'John Baez',
//         age: '32',
//         adress: '123, Charming Avenue'
//     };
//     jest.spyOn(global, 'fetch').mockImplementation(() =>
//         Promise.resolve({
//             json: () => Promise.resolve(fakeUser)
//         })
//     );
// });