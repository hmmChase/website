import React, { Component } from 'react';
import Proptypes from 'prop-types';
import './Project.css';

class Project extends Component {
  render() {
    return (
      <article className="project">
        <h3 className="project-title">{this.props.title}</h3>
        <img className="project-img" src={this.props.img} alt="screenshot" />
        <p className="project-description">{this.props.desc}</p>
        <div className="project-link-container">
          {this.props.links.map(link => (
            <div>
              {link.name && <p className="project-link-name">{link.name}</p>}
              <div className="project-links">
                <a
                  className="project-link"
                  href={link.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  GitHub
                </a>
                <a
                  className="project-link"
                  href={link.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  View Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </article>
    );
  }
}

export default Project;
