import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ProjectContainer from './ProjectContainer';

it('matches snapshot', () => {
  const result = render(<ProjectContainer />);

  expect(result.asFragment()).toMatchSnapshot();
});
