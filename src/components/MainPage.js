import React from 'react';
import '../stylesheets/mainPage.scss';
import Header from './Header';



class MainPage extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="container">
          <Header />
      </div>
    );
  }
}

export default MainPage;