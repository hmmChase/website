import React from 'react';
import bitpoll from '../../assets/bitpoll.png';
import monikers from '../../assets/monikers.png';
import ideabox from '../../assets/ideabox.png';
import hmmchase from '../../assets/hmmchase.png';
import palettePicker from '../../assets/palette-picker.png';
import Project from '../Project/Project';
import './ProjectContainer.css';

const ProjectContainer = () => (
  <div className='project-container'>
    <Project
      title='IdeaBox'
      img={ideabox}
      desc='IdeaBox is a simple Create, Read, Update, Delete (CRUD) app.  It is implemented three different ways.'
      links={[
        {
          name: 'v1. Vanilla JS',
          gitUrl: 'https://github.com/hmmChase/ideabox-v1',
          liveUrl: 'https://hmmchase.github.io/ideabox-v1/',
        },
        {
          name: 'v2. React / RESTful',
          gitUrl: 'https://github.com/hmmChase/ideabox-v2',
          liveUrl: 'https://ideabox-cra-rest.herokuapp.com/',
        },
        {
          name: 'v3. SSR React / GraphQL',
          gitUrl: 'https://github.com/hmmChase/ideabox-v3',
          liveUrl: 'https://ideabox-v3.hmmchase.now.sh/',
        },
        {
          name: 'v4. v3 + user accounts',
          gitUrl: 'https://github.com/hmmChase/ideabox-v4',
          liveUrl: 'https://ideabox-v4.hmmchase.now.sh/',
        },
      ]}
    />

    <Project
      title='BitPoll'
      img={bitpoll}
      desc='Bitpoll helps determine consensus within the Bitcoin development community by providing polls restricted to developers of the bitcoin project.'
      links={[
        {
          gitUrl: 'https://github.com/hmmChase/bitpoll',
          liveUrl: 'https://bit-poll.herokuapp.com/',
        },
      ]}
    />

    <Project
      title='Monikers'
      img={monikers}
      desc='A mobile version of the card game Monikers.'
      links={[
        {
          gitUrl: 'https://github.com/hmmChase/monikers',
          liveUrl: 'https://monikers.herokuapp.com',
        },
      ]}
    />

    <Project
      title='Palette Picker'
      img={palettePicker}
      desc='Palette Picker allows you to generate color schemes and save them in project folders.'
      links={[
        {
          gitUrl: 'https://github.com/hmmChase/palette-picker',
          liveUrl: 'https://hmm-palette-picker.herokuapp.com/',
        },
      ]}
    />

    <Project
      title='hmm... Chase'
      img={hmmchase}
      desc='You are here.'
      links={[
        {
          gitUrl: 'https://github.com/hmmChase/hmmChase',
          liveUrl: 'https://www.youtube.com/watch?v=mz6tAJMVmfM',
        },
      ]}
    />
  </div>
);

export default ProjectContainer;
