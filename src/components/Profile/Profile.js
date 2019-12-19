import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Profile.css';

const Profile = () => (
  <div>
    <h2>Web Developer</h2>

    <div className='skills'>
      <div className='skills-left'>
        <span className='skill'>JavaScript</span>
        <span className='skill'>jQuery</span>
        <span className='skill'>HTML</span>
        <span className='skill'>CSS/SCSS</span>
        <span className='skill'>Git</span>
        <span className='skill'>React</span>
        <span className='skill'>Router</span>
        <span className='skill'>Redux</span>

        <a className='platform-icon' href='https://github.com/hmmChase'>
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
      </div>

      <hr className='split' />

      <div className='skills-right'>
        <span className='skill'>NextJS</span>
        <span className='skill'>Express</span>
        <span className='skill'>GraphQL</span>
        <span className='skill'>Postgres</span>
        <span className='skill'>Mocha</span>
        <span className='skill'>Chai</span>
        <span className='skill'>Jest</span>
        <span className='skill'>Enzyme</span>

        <a
          className='platform-icon'
          href='https://www.linkedin.com/in/chase-r/'
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </a>
      </div>
    </div>

    {/* <div className='platforms'>
          <a className='platform-icon' href='https://github.com/hmmChase'>
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>

          <a
            className='platform-icon'
            href='https://www.linkedin.com/in/chase-r/'
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </div> */}
  </div>
);

export default Profile;
