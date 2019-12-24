import React from 'react';
import './Project.css';

const Project = props => (
  <article className='project'>
    <h3 className='project-title'>{props.title}</h3>

    <img className='project-img' src={props.img} alt='screenshot' />

    <p className='project-description'>{props.desc}</p>

    <div className='project-link-container'>
      {props.links.map((link, i) => (
        <div key={i}>
          {link.name && <p className='project-link-name'>{link.name}</p>}
          <div className='project-links'>
            <a
              className='project-link'
              href={link.gitUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>

            <a
              className='project-link'
              href={link.liveUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              View Live
            </a>
          </div>
        </div>
      ))}
    </div>
  </article>
);

export default React.memo(Project);