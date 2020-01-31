import React from 'react';
import '../stylesheets/components/mainPage.scss';
import Projects from '../data/Projects';
import Header from './Header';
import ProjectList from './ProjectList';
import Project from './Project';




class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: Projects
    };
  }

  render() {
    return (
      <div className="container">
          <Header />
          <ProjectList
          allProjects={this.state.allProjects} 
          />
      </div>
    );
  }
}

export default MainPage;