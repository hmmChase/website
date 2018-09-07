import React, { Component } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import bitpoll from './assets/bitpoll.png';
import monikers from './assets/monikers.png';
import palettePicker from './assets/palette-picker.png';

library.add(fab);

class App extends Component {
  render() {
    return (
      <main className="App">
        <section className="left">
          <div className="profile">
            <div className="logo">
              <h1>hmm... Chase</h1>
            </div>
            <h2>Front-end web developer</h2>
            <div className="skill-container">
              <div className="curly-open" />
              <div className="skills">
                <span className="skill">JavaScript</span>
                <span className="skill">jQuery</span>
                <span className="skill">HTML</span>
                <span className="skill">CSS/SCSS</span>
                <span className="skill">Git</span>
                <span className="skill">React</span>
                <span className="skill">Router</span>
                <span className="skill">Redux</span>
                <span className="skill">Express</span>
                <span className="skill">Postgres</span>
                <span className="skill">Mocha</span>
                <span className="skill">Chai</span>
                <span className="skill">Jest</span>
                <span className="skill">Enzyme</span>
                <span className="skill">TDD</span>
                <span className="skill">Agile dev</span>
              </div>
              <div className="curly-close" />
            </div>
            <div className="platforms">
              <a className="platform-icon" href="https://github.com/hmmChase">
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>

              <a
                className="platform-icon"
                href="https://www.linkedin.com/in/chase-r/"
              >
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
            </div>
          </div>
        </section>
        <section className="right">
          <article className="project-container">
            <h3 className="project-title">bitpoll</h3>
            <img className="project-img" src={bitpoll} alt="bitpoll" />
            <p className="project-description">
              Bitpoll helps determine consensus within the Bitcoin development
              community by providing polls rescricted to developers of the
              bitcoin project.
            </p>
            <div className="project-link-container">
              <a
                className="project-link"
                href="https://github.com/hmmChase/bitpoll"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                className="project-link"
                href="https://bit-poll.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View live site
              </a>
            </div>
          </article>
          <article className="project-container">
            <h3 className="project-title">monikers</h3>
            <img className="project-img" src={monikers} alt="monikers" />
            <p className="project-description">
              A mobile version of the card game Monikers.
            </p>
            <div className="project-link-container">
              <a
                className="project-link"
                href="https://github.com/hmmChase/monikers"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                className="project-link"
                href="https://monikers.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View live site
              </a>
            </div>
          </article>
          <article className="project-container">
            <h3 className="project-title">palette picker</h3>
            <img
              className="project-img"
              src={palettePicker}
              alt="palette picker"
            />
            <p className="project-description">
              Palette Picker allows you to generate color schemes and save them
              in project folders.
            </p>
            <div className="project-link-container">
              <a
                className="project-link"
                href="https://github.com/hmmChase/palette-picker"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                className="project-link"
                href="https://hmm-palette-picker.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View live site
              </a>
            </div>
          </article>
        </section>
      </main>
    );
  }
}

export default App;
