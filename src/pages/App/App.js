import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import LandingPage from '../../components/LandingPage/LandingPage';
import ChatPage from '../../components/ChatPage/ChatPage';
import socketClient from 'socket.io-client';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      endpoint: 'http://localhost:3001'
    }
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketClient(endpoint);
    socket.emit('chat message', 'test');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<Switch>
            <Route exact path='/' render={() =>
              <LandingPage />
            } />
            <Route exact path='/chat' render={props =>
              <ChatPage
                {...props}
              />
            } />
          </Switch>*/}
        </header>
      </div>
    );
  }
}

export default App;
