import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Profile from './Profile';

it('matches snapshot', () => {
  const result = render(<Profile />);

  expect(result.asFragment()).toMatchSnapshot();
});
