import React from 'react';
import PropTypes from 'prop-types';
import { ProjectLink } from '@hmmui/hmmchase';
import './Project.css';

const Project = (props) => (
  <article className='project'>
    <h3 className='project-title'>{props.title}</h3>

    {props.img && (
      <img className='project-img' src={props.img} alt='screenshot' />
    )}

    <p className='project-description'>{props.desc}</p>

    <div className='project-links-container'>
      {props.links.map((link, i) => (
        <div key={i} className='project-link-item'>
          {link.name && <p className='project-link-name'>{link.name}</p>}

          {link.img && (
            <img
              className='project-img project-imgs'
              src={link.img}
              alt='screenshot'
            />
          )}

          <div className='project-links'>
            <ProjectLink href={link.gitUrl}>GitHub</ProjectLink>

            <ProjectLink href={link.liveUrl}>View Live</ProjectLink>
          </div>
        </div>
      ))}
    </div>
  </article>
);

Project.propTypes = {
  desc: PropTypes.string.isRequired,
  img: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      gitUrl: PropTypes.string.isRequired,
      liveUrl: PropTypes.string.isRequired,
      img: PropTypes.string,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default React.memo(Project);
