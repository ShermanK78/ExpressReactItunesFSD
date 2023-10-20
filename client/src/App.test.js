import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

// Import the jest-localstorage-mock library
import 'jest-localstorage-mock';

test('renders the App component', () => {
  render(<App />);
  const headingElement = screen.getByText(/Media Search/i);

  expect(headingElement).toBeTruthy(); 


});
