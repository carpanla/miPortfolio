import React from 'react';
import '../stylesheets/components/mainPage.scss';
import DataProjects from '../data/DataProjects';
import Header from './Header';
import ProjectList from './ProjectList';




class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allProjects: DataProjects
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