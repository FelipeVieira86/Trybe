// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAcess';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { username: 'joão', password: '12345' },
    };
  }
  render() {
    const { user } = this.state;
    return (
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/strict-access">Strict Acess</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users/:id" component={Users} />
          <Route
            exact
            path="/users"
            render={(props) => <Users {...props} greetingMessage="Good morning" />}
          />
          <Route
            path="/strict-access"
            render={(props) => <StrictAccess {...props} user={user} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
