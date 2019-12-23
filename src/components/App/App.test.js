import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot', () => {
  const result = render(<App />);

  // console.log('TCL: result', result.debug());

  expect(result.asFragment()).toMatchSnapshot();
});
