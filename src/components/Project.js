import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/components/project.scss';

const Project = props => {
  return (
    <div className="proy__container" id={props.id}>
      <div className="proy_img">
        <img src={props.image} alt={props.name} className="img" />
      </div>
      <h2 className="proy_name">{props.name}</h2>
      <h3 className="proy_description">{props.description}</h3>
      <div className="proy_links">
        <a href={props.repoLink} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github-alt"></i>
        </a>
        <a href={props.pagesLink} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-desktop"></i>
        </a>
      </div>
    </div>
  );
};

Project.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default Project;