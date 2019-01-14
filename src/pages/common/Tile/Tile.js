import React, { Component } from 'react';
import './Tile.css';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 'Initial data...',
      header: 'Manisha',
      getMethodData: "yet to fetch",
      postMethodData: "yet to fetch",
    }
    //this.updateState = this.updateState.bind(this);
  }



  render() {
    return (
         <div class="midtile">
            <div class="titleWrp clear">
              <div class="floatLeft">
                <h2>{this.props.count}</h2>
                <span>{this.props.tileName}</span>
              </div>
              <div class="floatRight">
                <span><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
              </div>
            </div>
            <p class="rcttask">Recent project: Drag and Drop media</p>
         </div>
     
    );
  }
}

export default Tile;