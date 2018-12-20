import React, { Component } from 'react';
import Header from './../../Header/Header.js'

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    
  
    render() {
      return (
        <div>
          {/* <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}
          <div class="homepage>">
            <Header/>
          </div>
        </div>
      );
    }
  }

  export default Clock;