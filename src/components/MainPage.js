import React from 'react';
import '../stylesheets/components/mainPage.scss';
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