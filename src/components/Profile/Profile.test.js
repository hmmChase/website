import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Profile from './Profile';

describe('Profile', () => {
  it('matches snapshot', () => {
    const mockProps = {};

    const utils = render(<Profile {...mockProps} />);

    const container = utils.container;

    expect(container).toMatchSnapshot();
  });
});
