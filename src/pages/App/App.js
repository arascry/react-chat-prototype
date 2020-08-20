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
      value: 'Send message',
      endpoint: 'http://localhost:3001'
    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleChatSubmit = (event) => {
    event.preventDefault();
    alert('Submitted');
    const { endpoint } = this.state;
    const socket = socketClient(endpoint);
    console.log("Triggered");
    socket.emit('chat message', this.state.value);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path='/' render={() =>
              <LandingPage />
            } />
            <Route exact path='/chat' render={props =>
              <ChatPage
                {...props}
                value={this.state.value}
                handleChange={this.handleChange}
                handleChatSubmit={this.handleChatSubmit}
              />
            } />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
