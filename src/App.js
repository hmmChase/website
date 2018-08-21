import React, { Component } from 'react';
import './App.css';

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

            <p className="skills">
              JavaScript jQuery HTML CSS Sass Git React Router Redux Express
              Postgres Mocha Chai Jest Enzyme Test-driven dev. Agile dev. UX/UI
            </p>

            <p />
          </div>
        </section>
        <section className="right">
          <div />
        </section>
      </main>
    );
  }
}

export default App;
