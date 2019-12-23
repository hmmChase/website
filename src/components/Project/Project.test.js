import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Project from './Project';

describe('Project', () => {
  let mockProps;

  beforeEach(() => {
    mockProps = {
      links: [
        {
          name: 'v1. Vanilla JS',
          gitUrl: 'https://github.com/hmmChase/ideabox-v1',
          liveUrl: 'https://hmmchase.github.io/ideabox-v1/'
        },
        {
          name: 'v2. React / RESTful',
          gitUrl: 'https://github.com/hmmChase/ideabox-v2',
          liveUrl: 'https://ideabox-cra-rest.herokuapp.com/'
        },
        {
          name: 'v3. SSR React / GraphQL',
          gitUrl: 'https://github.com/hmmChase/ideabox-v3',
          liveUrl: 'https://ideabox-v3.hmmchase.now.sh/'
        },
        {
          name: 'v4. V3 + User accounts',
          gitUrl: 'https://github.com/hmmChase/ideabox-v4',
          liveUrl: 'https://ideabox-v4.hmmchase.now.sh/'
        }
      ]
    };
  });

  it('matches snapshot', () => {
    const result = render(<Project {...mockProps} />);

    expect(result.asFragment()).toMatchSnapshot();
  });
});
