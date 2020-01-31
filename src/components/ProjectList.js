import React from 'react';
import Project from './Project';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProjectList = props => {
  return (
    <div>
      <ul className="proy__list">
        {props.allProjects
          .map(project => (
            <li className="proy_item" key={project.id}>
              {/* <Link to={`/project/${project.id}`}> */}
                <Project
                  image={project.image}
                  name={project.name}
                  description={project.description}
                  id={project.id}
                  repoLink={project.repoLink}
                  pagesLink={project.pagesLink}
                />
              {/* </Link> */}
            </li>
          ))}
      </ul>
    </div>
  );
};

ProjectList.propTypes = {
    allProjects: PropTypes.array,
};

export default ProjectList;