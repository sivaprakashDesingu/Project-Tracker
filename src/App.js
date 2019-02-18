import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameForm from './NameForm.js';
import Home from './pages/Home/Home.js';
import Login from './pages/Login/Login.js';
import SearchResultPage from './pages/search/SearchResularPage.js';
import NewProjectForm from './pages/newProForm/newProForm.js';
import { Switch, Route, BrowserRouter } from 'react-router-dom'


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'siva',
      searchText: 'sivaprakash'
    };
    //this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div className="shopping-list">

        <BrowserRouter>

          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/home' component={Home} />
            
            <Route path='/form' 
              render={() =>
                <NameForm Name={this.state.name} />
              } />
            <Route path='/SearchResultPage' render={() =>
              <SearchResultPage SearchText={this.state.searchText} />
            } />
    
    <Route path='/NewProjectForm' render={() =>
                          <NewProjectForm SearchText={this.state.searchText} />
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
