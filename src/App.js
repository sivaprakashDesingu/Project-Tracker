import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';
import NameForm from './NameForm.js';
import Home from './pages/Home/Home.js';
import { Switch, Route, BrowserRouter } from 'react-router-dom'


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'siva',
    };
    //this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div className="shopping-list">

        <BrowserRouter>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/form' render={() =>
              <NameForm Name={this.state.name} />
            } />
          </Switch>
        </BrowserRouter>
        {/* <Clock />
      <NameForm Name={this.state.name}/> */}
      </div>
    );
  }
}



export default App;
