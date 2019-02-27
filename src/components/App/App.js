import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Profile from '../Profile/Profile';
import ProjectContainer from '../ProjectContainer/ProjectContainer';

library.add(fab);

class App extends Component {
  render() {
    return (
      <main className="App">
        <section className="left">
          <div className="fixed">
            <div className="logo">
              <h1>hmm... Chase</h1>
            </div>
            <Profile />
          </div>
        </section>
        <section className="right">
          <ProjectContainer />
        </section>
      </main>
    );
  }
}

export default App;
