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
    const mockProps = {};

    const utils = render(<App {...mockProps} />);

    const container = utils.container;

    expect(container).toMatchSnapshot();
  });

  it('has a logo', () => {
    const mockProps = {};

    const utils = render(<App {...mockProps} />);

    const logo = utils.getByTestId('logo');

    expect(logo).toHaveTextContent('hmm... Chase');
  });
});
