import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import Landing from './Landing';
import MainPage from './MainPage';


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/mainpage" component={MainPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
