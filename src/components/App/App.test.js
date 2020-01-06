import React from 'react';
import ReactDOM from 'react-dom';
import { render, prettyDOM } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    const result = render(<App />);

    // console.log('TCL: result', result);

    console.log('TCL: result', result.debug());

    expect(result.asFragment()).toMatchSnapshot();
  });

  it('has a logo', () => {
    const result = render(<App />);

    const logo = result.getByTestId('logo');

    // console.log(prettyDOM(logo));

    expect(logo).toHaveTextContent('hmm... Chase');
  });
});
