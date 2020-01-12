import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ProjectContainer from './ProjectContainer';

describe('ProjectContainer', () => {
  it('matches snapshot', () => {
    const mockProps = {};

    const utils = render(<ProjectContainer {...mockProps} />);

    const container = utils.container.firstChild;

    expect(container).toMatchSnapshot();
  });
});
