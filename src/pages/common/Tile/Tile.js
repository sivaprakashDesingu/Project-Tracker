import React, { Component } from 'react';
import './Tile.css';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    //this.updateState = this.updateState.bind(this);
  }



  render() {
    return (
         <div className={'midtile '+ this.props.CssClass}>
            <div className="titleWrp clear">
              
                <div className="clear">
                  <span className="floatLeft countHeading "><strong>{this.props.tileName} Project</strong></span>
                  <span className="floatRight "><strong>Feb <i className="fa fa-angle-down"></i></strong></span>
                </div>
                <div className="rippleCircle ">
                <h2>{this.props.count}</h2>
                </div>
            </div>
            {/* <p className="rcttask">Recent project: Drag and Drop media</p> */}
         </div>
     
    );
  }
}

export default Tile;