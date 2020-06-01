import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import EnterUser from './Components/EnterUser';
import EnterPassword from './Components/EnterPassword';
import Content from './Components/Content';

const APP_NAME = 'Gmail'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      loggedIn: false
    };
  }

  setUser = (user) => {
    this.setState({ user });
  }

  login = () => {
    this.setState({ loggedIn: true });
  }

  logout = () => {
    this.setState({ loggedIn: false });
  }

  render() {
    let { user, loggedIn } = this.state;

    if (!user) {
      return <EnterUser appName={APP_NAME} setUser={this.setUser} />
    }

    if (!loggedIn) {
      return <EnterPassword user={user} login={this.login}/>
    }

    return (
      <Content user={user} logout={this.logout} />
    );
  }
}

export default App;
