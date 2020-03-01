import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from '../Profile/Profile';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import './App.css';

library.add(fas, fab);

const App = () => (
  <main className='App'>
    <section className='left'>
      <div className='fixed'>
        <div className='logo'>
          <h1 data-testid='logo'>hmm... Chase</h1>
        </div>

        <Profile />
      </div>

      <div className='projects-heading'>
        <FontAwesomeIcon
          className='level-down'
          icon={['fas', 'level-down-alt']}
          flip='horizontal'
        />

        <span>projects</span>

        <FontAwesomeIcon
          className='level-down'
          icon={['fas', 'level-down-alt']}
        />
      </div>
    </section>

    <section className='right'>
      <ProjectContainer />
    </section>
  </main>
);

export default App;
