import React from 'react';
import '../stylesheets/App.scss';
import Title from './Title';
import ViewWork from './ViewWork';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <Title />
        <ViewWork />
      </div>
    );
  }
}

export default App;
